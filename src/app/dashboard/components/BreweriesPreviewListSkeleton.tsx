import { BreweryCardPreviewSkeleton } from '@/ui/Card'
import { CardCarousel } from '@/ui/Carousel'

export async function BreweriesPreviewListSkeleton() {
	return (
		<CardCarousel>
			{Array.from({ length: 5 }).map((_, index) => (
				<li key={index}>
					<BreweryCardPreviewSkeleton />
				</li>
			))}
		</CardCarousel>
	)
}
