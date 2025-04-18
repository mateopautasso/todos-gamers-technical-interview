import { cookies } from 'next/headers'
import { decrypt } from '@/lib/session'
import { NextRequest, NextResponse } from 'next/server'
import { protectedRoutes, publicRoutes } from '@/lib/interfaces'

export default async function authMiddleware(req: NextRequest) {
	const path = req.nextUrl.pathname

	const isProtectedRoute = protectedRoutes.includes(path)
	const isPublicRoute = publicRoutes.includes(path)

	const cookie = (await cookies()).get('session')?.value
	const session = await decrypt(cookie)

	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
	}

	if (isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/dashboard')) {
		return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
