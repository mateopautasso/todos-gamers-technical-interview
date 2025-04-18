import { getBreweryPreviewAdapter, getBreweryProfileAdapter } from '../adapters/brewery.adapter'
import { BREWERY_API_URL, ApiResponse, BreweryPreview, BreweryProfile, StatesWithBreweries } from '../interfaces'

export class BreweryService {
	//
	static async getPreviewList(page: number, perPage: number): Promise<ApiResponse<BreweryPreview[] | []>> {
		const response = await fetch(`${BREWERY_API_URL}?page=${page}&per_page=${perPage}`)

		let breweryList
		if (response.ok) {
			breweryList = await response.json()
		} else {
			breweryList = null
		}

		return {
			status: response.status,
			data: breweryList ? breweryList.map(getBreweryPreviewAdapter) : breweryList,
		}
	}

	//
	static async getPreviewListByState(
		page: number,
		perPage: number,
		state: StatesWithBreweries
	): Promise<ApiResponse<BreweryPreview[] | []>> {
		const response = await fetch(`${BREWERY_API_URL}?by_state=${state}&page=${page}&per_page=${perPage}`)

		let breweryList
		if (response.ok) {
			breweryList = await response.json()
		} else {
			breweryList = null
		}

		return {
			status: response.status,
			data: breweryList ? breweryList.map(getBreweryPreviewAdapter) : breweryList,
		}
	}

	//
	static async getById(id: string): Promise<ApiResponse<BreweryProfile>> {
		const response = await fetch(`${BREWERY_API_URL}/${id}`)

		let brewery
		if (response.ok) {
			brewery = await response.json()
		} else {
			brewery = null
		}

		return {
			status: response.status,
			data: brewery ? getBreweryProfileAdapter(brewery) : brewery,
		}
	}
}
