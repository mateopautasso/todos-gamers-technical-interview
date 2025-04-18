import { BreweryPreview, BreweryProfile } from '../interfaces'

export const getBreweryProfileAdapter = (brewery: Record<string, any>): BreweryProfile => {
	return {
		id: brewery.id,
		name: brewery.name,
		address: brewery.address_1,
		phone: brewery.phone,
		images: brewery.images,
		comments: brewery.comments,
	}
}

export const getBreweryPreviewAdapter = (brewery: Record<string, any>): BreweryPreview => {
	return {
		id: brewery.id,
		name: brewery.name,
		address: brewery.address_1,
		avatar: brewery.avatar,
		phone: brewery.phone,
	}
}
