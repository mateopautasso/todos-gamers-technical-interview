import styles from './page.module.css'
import { SectionTitle } from '@/ui/Title'
import { BreweryCardPreview, NotificacionCard } from '@/ui/Card'
import { BreweryService } from '@/lib/services'
import { topNotificationMock as noti } from '@/lib/mocks'
import { CardCarousel } from '@/ui/Carousel'

export default async function Home() {
	const notification = true
	const { data: breweriesPreview } = await BreweryService.getByFilters({ page: 1, per_page: 5 })
	const { data: breweriesPreviewByCity } = await BreweryService.getByFilters({ page: 1, per_page: 5, by_state: 'California' })

	return (
		<div>
			{notification && <NotificacionCard type={noti.type} title={noti.title} content={noti.content} />}
			<main className='page-container'>
				<div>
					<section className={styles.siteOptions}>
						<SectionTitle>Todas las opciones</SectionTitle>

						{breweriesPreview && (
							<CardCarousel>
								{breweriesPreview.map((brewery) => (
									<li key={brewery.id}>
										<BreweryCardPreview {...brewery} />
									</li>
								))}
							</CardCarousel>
						)}
					</section>

					<section className={styles.siteOptions}>
						<SectionTitle>Opciones en california</SectionTitle>

						{breweriesPreviewByCity && (
							<CardCarousel>
								{breweriesPreviewByCity.map((brewery) => (
									<li key={brewery.id}>
										<BreweryCardPreview {...brewery} />
									</li>
								))}
							</CardCarousel>
						)}
					</section>
				</div>
			</main>
		</div>
	)
}
