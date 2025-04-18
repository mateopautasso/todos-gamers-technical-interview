import { BreweryCardPreview } from '@/ui/Card'
import styles from './BreweryCardPreviewCarousel.module.css'
import { BreweryPreview } from '@/lib/interfaces'

interface Props {
	breweries: BreweryPreview[]
}

export function BreweryCardPreviewCarousel({ breweries }: Props) {
	return (
		<div className='carousel'>
			<ul className={styles.ul}>
				{breweries &&
					breweries.map((brewery) => (
						<li key={brewery.id}>
							<BreweryCardPreview {...brewery} />
						</li>
					))}
			</ul>
		</div>
	)
}
