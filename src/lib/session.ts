import 'server-only'

import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { SessionPayload } from '@/lib/interfaces'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey) // Uint8Array de la secret key
const encryptAlgorithm = 'HS256'

//
export async function encrypt(payload: SessionPayload) {
	return new SignJWT(payload).setProtectedHeader({ alg: encryptAlgorithm }).setIssuedAt().setExpirationTime('7d').sign(encodedKey)
}

export async function decrypt(token: string | undefined = '') {
	try {
		const { payload } = await jwtVerify(token, encodedKey, { algorithms: [encryptAlgorithm] })
		return payload
	} catch (error) {
		return null
	}
}

export async function createSession(userId: string) {
	const cookieStore = await cookies()

	const newSessionExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
	const newSession = await encrypt({ userId, expiresAt: newSessionExpiresAt })

	cookieStore.set('session', newSession, {
		httpOnly: true,
		secure: true,
		expires: newSessionExpiresAt,
		sameSite: 'lax',
		path: '/',
	})
}

export async function updateSession() {
	const cookieStore = await cookies()

	const currentSession = cookieStore.get('session')?.value
	const payload = await decrypt(currentSession)
	if (!currentSession || !payload) return null

	const newExpirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

	cookieStore.set('session', currentSession, {
		httpOnly: true,
		secure: true,
		expires: newExpirationDate,
		sameSite: 'lax',
		path: '/',
	})
}

export async function deleteSession() {
	const cookieStore = await cookies()
	cookieStore.delete('session')
}
