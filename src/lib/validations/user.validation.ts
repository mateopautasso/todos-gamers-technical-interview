import {
	UserLogin,
	UserLoginErrorsType,
	UserRegister,
	UserRegisterErrorsType,
	ValidationResponse,
	UserPropertiesLengthLimit as limits,
} from '../interfaces'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateRegisterUser = (user: UserRegister): ValidationResponse<UserRegisterErrorsType> => {
	const { username, email, password, repeat_password } = user
	const validation = { valid: true, messages: [] } as ValidationResponse<UserRegisterErrorsType>

	// Username
	if (username.length === 0) {
		validation.valid = false
		validation.messages = [...validation.messages, 'Debe ingresar un nombre de usuario.']
	} else if (username.length < limits.username.min) {
		validation.valid = false
		validation.messages = [...validation.messages, 'El nombre de usuario es demasiado corto.']
	} else if (username.length > limits.username.max) {
		validation.valid = false
		validation.messages = [...validation.messages, 'El nombre de usuario es demasiado largo.']
	}

	// Email
	if (email.length === 0) {
		validation.valid = false
		validation.messages = [...validation.messages, 'Debe ingresar un correo.']
	} else if (!emailRegex.test(email)) {
		validation.valid = false
		validation.messages = [...validation.messages, 'El correo es inválido.']
	}

	// Password
	if (password.length === 0) {
		validation.valid = false
		validation.messages = [...validation.messages, 'Debe ingresar una contraseña.']
	} else if (password.length < limits.password.min) {
		validation.valid = false
		validation.messages = [...validation.messages, 'La contraseña es demasiada corta.']
	} else if (password.length > limits.password.max) {
		validation.valid = false
		validation.messages = [...validation.messages, 'La contraseña es demasiada larga.']
	} else if (password !== repeat_password) {
		validation.valid = false
		validation.messages = [...validation.messages, 'Las contraseñas no coinciden.']
	}

	return validation
}

export const validateLoginUser = (user: UserLogin): ValidationResponse<UserLoginErrorsType> => {
	const { username, password } = user
	const validation = { valid: true, messages: [] } as ValidationResponse<UserLoginErrorsType>

	if (!username.length) {
		validation.valid = false
		validation.messages = [...validation.messages, 'Debe ingresar un nombre de usuario.']
	}

	if (!password.length) {
		validation.valid = false
		validation.messages = [...validation.messages, 'Debe ingresar una contraseña.']
	}

	return validation
}
