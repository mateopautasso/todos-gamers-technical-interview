export type BreweryId = string

export interface BreweryProfile {
	id: BreweryId
	name: string
	address: string
	phone: string
	images: string[]
	comments: string[]
}

export interface BreweryPreview extends Omit<BreweryProfile, 'images' | 'comments'> {
	avatar: string
}

export enum StatesWithBreweries {
	CALIFORNIA = 'California',
}
