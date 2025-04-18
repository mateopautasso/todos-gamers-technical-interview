import { UserId } from './user.interface'

export const AUTH_API_URL = 'http://localhost:3000/api/auth'
export const BREWERY_API_URL = 'https://api.openbrewerydb.org/v1/breweries'

export const protectedRoutes = ['/dashboard']
export const publicRoutes = ['/auth/login', '/auth/register']

export interface ApiResponse<T> {
	data?: T
	status: number
	error?: string
}

export interface ValidationResponse<T> {
	valid: boolean
	messages: T[] | []
}

export interface SessionPayload {
	userId: UserId
	expiresAt: Date
	[key: string]: unknown
}
