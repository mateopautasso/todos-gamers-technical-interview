export type UserId = string

export interface User {
	id: UserId
	username: string
	email: string
	password: string
}

export interface UserRegister extends Omit<User, 'id'> {
	repeat_password: string
}

export interface UserLogin extends Omit<UserRegister, 'email' | 'repeat_password'> {}

export const UserPropertiesLengthLimit = {
	username: { min: 4, max: 25 },
	password: { min: 6, max: 20 },
}

export const UserRegisterErrors = {
	USERNAME_REQUIRED: 'Debe ingresar un nombre de usuario.',
	USERNAME_INVALID_FORMAT: 'El nombre de usuario contiene caracteres no permitidos.',
	USERNAME_TOO_SHORT: 'El nombre de usuario es demasiado corto.',
	USERNAME_TOO_LONG: 'El nombre de usuario es demasiado largo.',
	EMAIL_REQUIRED: 'Debe ingresar un correo.',
	EMAIL_INVALID_FORMAT: 'El correo es inválido.',
	PASSWORD_REQUIRED: 'Debe ingresar una contraseña.',
	PASSWORD_INVALID_FORMAT: 'La contraseña contiene caracteres no permitidos.',
	PASSWORD_TOO_SHORT: 'La contraseña es demasiada corta.',
	PASSWORD_TOO_LONG: 'La contraseña es demasiada larga.',
	REPEAT_PASSWORD: 'Las contraseñas no coinciden.',
	EXISTING_USER: 'Ya existe una cuenta con el mismo nombre de usuario o correo.',
} as const
export type UserRegisterErrorsType = (typeof UserRegisterErrors)[keyof typeof UserRegisterErrors]

export const UserLoginErrors = {
	USERNAME_REQUIRED: 'Debe ingresar un nombre de usuario.',
	PASSWORD_REQUIRED: 'Debe ingresar una contraseña.',
	USERNAME_OR_PASSWORD_INCORRECT: 'Las credenciales son incorrectas.',
} as const
export type UserLoginErrorsType = (typeof UserLoginErrors)[keyof typeof UserLoginErrors]

export const registerUserInitialFormState = {
	fieldValues: { username: '', email: '', password: '', repeat_password: '' },
	fieldErrors: [],
}

export const loginUserInitialFormState = {
	fieldValues: { username: '', password: '' },
	fieldErrors: [],
}
