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

export type BreweryType = 'micro' | 'nano' | 'regional' | 'brewpub' | 'brewpub' | 'planning' | 'bar' | 'contract' | 'proprietor' | 'closed'

export interface BreweryFilters {
	search?: string
	by_city?: string
	by_country?: string
	by_dist?: string
	by_ids?: string
	by_name?: string
	by_state?: string
	by_postal?: string
	by_type?: BreweryType
	page?: number
	per_page?: number
	sort?: 'asc' | 'desc'
}
