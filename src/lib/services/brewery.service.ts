import { getBreweryPreviewAdapter, getBreweryProfileAdapter } from '../adapters/brewery.adapter'
import { BREWERY_API_URL, ApiResponse, BreweryPreview, BreweryProfile, BreweryFilters } from '../interfaces'

export class BreweryService {
	//
	static async getByFilters(filters: BreweryFilters): Promise<ApiResponse<BreweryPreview[] | []>> {
		let queryParams = ''
		const filtersEntries = Object.entries(filters)

		if (filtersEntries.length > 0) {
			queryParams = '?'
			filtersEntries.forEach(([key, value], index) => {
				if (index !== filtersEntries.length - 1) {
					queryParams = queryParams + `${key}=${value}&`
				} else {
					queryParams = queryParams + `${key}=${value}`
				}
			})
		}

		const response = await fetch(`${BREWERY_API_URL}${queryParams}`)

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
