import styles from './page.module.css'
import { Suspense } from 'react'
import { SectionTitle } from '@/ui/Title'
import { NotificacionCard } from '@/ui/Card'
import { topNotificationMock as noti } from '@/lib/mocks'
import { BreweriesPreviewList, BreweriesPreviewListSkeleton } from './components'

export default async function Home() {
	const notification = true

	return (
		<div>
			{notification && <NotificacionCard type={noti.type} title={noti.title} content={noti.content} />}
			<main className='page-container'>
				<div>
					<section className={styles.siteOptions}>
						<SectionTitle>Todas las opciones</SectionTitle>

						<Suspense fallback={<BreweriesPreviewListSkeleton />}>
							<BreweriesPreviewList filters={{ page: 1, per_page: 5 }} />
						</Suspense>
					</section>

					<section className={styles.siteOptions}>
						<SectionTitle>Opciones en california</SectionTitle>

						<Suspense fallback={<BreweriesPreviewListSkeleton />}>
							<BreweriesPreviewList filters={{ page: 1, per_page: 5, by_state: 'California' }} />
						</Suspense>
					</section>
				</div>
			</main>
		</div>
	)
}
