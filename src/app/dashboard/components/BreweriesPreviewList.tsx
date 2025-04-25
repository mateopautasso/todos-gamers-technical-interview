import { BreweryFilters } from '@/lib/interfaces'
import { BreweryService } from '@/lib/services'
import { BreweryCardPreview } from '@/ui/Card'
import { CardCarousel } from '@/ui/Carousel'
import { notFound } from 'next/navigation'

interface Props {
	filters: BreweryFilters
}

export async function BreweriesPreviewList({ filters }: Props) {
	const { data } = await BreweryService.getByFilters(filters)
	if (!data) notFound()

	return (
		<CardCarousel>
			{data.map((brewery) => (
				<li key={brewery.id}>
					<BreweryCardPreview {...brewery} />
				</li>
			))}
		</CardCarousel>
	)
}
