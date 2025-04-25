import styles from './page.module.css'
import { SiteInfoItem } from '@/ui/SiteInfoItem'
import { SectionTitle } from '@/ui/Title'
import { MapPin, Phone } from 'lucide-react'
import { BreweryImage } from './components'
import { BreweryService } from '@/lib/services'
import { commentsMock } from '@/lib/mocks'
import { Comment } from '@/ui/Comment'
import { BreweryOptionButtons } from './components/BreweryOptionButtons'
import { notFound } from 'next/navigation'
import { CardCarousel } from '@/ui/Carousel'

export default async function BreweryProfile({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const { data } = await BreweryService.getById(id)

	if (!data) notFound()

	const { name, address, phone, images, comments } = data

	return (
		<main className='page-container'>
			<section className={styles.firstSection}>
				<SectionTitle>{name}</SectionTitle>

				<div className={styles.infoItemsContainer}>
					<SiteInfoItem color='var(--foreground)' label={address}>
						<MapPin size={20} />
					</SiteInfoItem>
					<SiteInfoItem color='var(--foreground)' label={phone}>
						<Phone size={20} />
					</SiteInfoItem>
				</div>

				<CardCarousel>
					{Array.isArray(images) && images.length > 0
						? images.map((image, index) => (
								<li key={index}>
									<BreweryImage imageUrl={image} alt={`Imagen de cervecería '${name}'`} />
								</li>
						  ))
						: Array.from({ length: 5 }).map((_, index) => (
								<li key={index}>
									<BreweryImage imageUrl={''} alt={`Imagen no disponible`} />
								</li>
						  ))}
				</CardCarousel>
			</section>

			<section className={styles.secondSection}>
				<h3>Opiniones</h3>

				<ul className={styles.commentsContainer}>
					{commentsMock.map((comment) => (
						<li key={comment.id}>
							<Comment {...comment} />
						</li>
					))}
				</ul>

				<BreweryOptionButtons />
			</section>
		</main>
	)
}
