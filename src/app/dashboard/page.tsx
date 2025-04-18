import styles from './page.module.css'
import { SectionTitle } from '@/ui/Title'
import { NotificacionCard } from '@/ui/Card'
import { BreweryService } from '@/lib/services'
import { StatesWithBreweries } from '@/lib/interfaces'
import { topNotificationMock as noti } from '@/lib/mocks'
import { BreweryCardPreviewCarousel } from '@/ui/Carousel'

export default async function Home() {
	const notification = true
	const { data: breweriesPreview } = await BreweryService.getPreviewList(1, 5)
	const { data: breweriesPreviewByCity } = await BreweryService.getPreviewListByState(1, 5, StatesWithBreweries.CALIFORNIA)

	return (
		<div>
			{notification && <NotificacionCard type={noti.type} title={noti.title} content={noti.content} />}
			<main className='page-container'>
				<div>
					<section className={styles.siteOptions}>
						<SectionTitle>Todas las opciones</SectionTitle>
						{breweriesPreview && <BreweryCardPreviewCarousel breweries={breweriesPreview} />}
					</section>

					<section className={styles.siteOptions}>
						<SectionTitle>Opciones en california</SectionTitle>
						{breweriesPreviewByCity && <BreweryCardPreviewCarousel breweries={breweriesPreviewByCity} />}
					</section>
				</div>
			</main>
		</div>
	)
}
