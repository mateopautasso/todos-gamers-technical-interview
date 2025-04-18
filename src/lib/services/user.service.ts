import { PrismaClient } from '@prisma/client'
import { ApiResponse, User, UserId, UserLogin, UserRegister } from '@/lib/interfaces'

// db
const prisma = new PrismaClient()

export class UserService {
	//
	static async create(user: Omit<UserRegister, 'repeat_password'>): Promise<ApiResponse<UserId | null>> {
		try {
			const exist = await prisma.user.findFirst({
				where: {
					OR: [{ username: user.username }, { email: user.email }],
				},
			})

			if (exist) return { status: 409, data: null }

			// Acá se podría hashear la pass tmb...
			const created = await prisma.user.create({
				data: {
					username: user.username,
					email: user.email,
					password: user.password,
				},
			})

			return { status: 200, data: created.id }
		} catch (error) {
			return { status: 500, data: null }
		}
	}

	//
	static async login(user: UserLogin): Promise<ApiResponse<Omit<User, 'email' | 'password'> | null>> {
		try {
			const found = await prisma.user.findUnique({
				where: {
					username: user.username,
				},
			})

			if (!found || found.password !== user.password) {
				return { status: 404, data: null }
			}

			return {
				status: 200,
				data: {
					id: found.id,
					username: found.username,
				},
			}
		} catch (error) {
			return { status: 500, data: null }
		}
	}
}
