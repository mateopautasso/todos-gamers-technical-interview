'use server'

import { UserLogin, UserLoginErrorsType, UserRegister, UserRegisterErrorsType } from '@/lib/interfaces'
import { validateLoginUser, validateRegisterUser } from '@/lib/validations'
import { createSession, deleteSession } from '@/lib/session'
import { getFieldValues } from '@/lib/utils'
import { UserService } from '@/lib/services'
import { redirect } from 'next/navigation'

interface FormState<F, E> {
	fieldValues: F
	fieldErrors: E
}

//
type registerActionResponse = FormState<UserRegister, UserRegisterErrorsType[] | []>

export const registerUser = async (formState: registerActionResponse, formData: FormData): Promise<registerActionResponse> => {
	const user = getFieldValues<UserRegister>(formData)
	const userValidation = validateRegisterUser(user)

	if (!userValidation.valid) return { fieldValues: user, fieldErrors: userValidation.messages }

	const { username, email, password } = user
	const { status, data: userId } = await UserService.create({ username, email, password })

	if (status === 409) {
		return {
			fieldValues: user,
			fieldErrors: ['Ya existe una cuenta con el mismo nombre de usuario o correo.'],
		}
	}

	if (status >= 200 && status <= 299 && userId) {
		await createSession(userId)
		redirect('/dashboard')
	}

	return { fieldValues: user, fieldErrors: [] }
}

//
type loginActionResponse = FormState<UserLogin, UserLoginErrorsType[] | []>

export const loginUser = async (formState: loginActionResponse, formData: FormData): Promise<loginActionResponse> => {
	const user = getFieldValues<UserLogin>(formData)
	const userValidation = validateLoginUser(user)

	if (!userValidation.valid) return { fieldValues: user, fieldErrors: userValidation.messages }

	const { data } = await UserService.login(user)

	if (data?.id) {
		await createSession(data.id)
		redirect('/dashboard')
	}

	return { fieldValues: user, fieldErrors: ['Las credenciales son incorrectas.'] }
}

//
export async function logoutUser() {
	await deleteSession()
	redirect('/auth/login')
}
