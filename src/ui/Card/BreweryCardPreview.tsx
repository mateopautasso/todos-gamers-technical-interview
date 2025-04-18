import styles from './BreweryCardPreview.module.css'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'
import { BreweryPreview } from '@/lib/interfaces'
import { SiteInfoItem } from '../SiteInfoItem'
import BreweryPreviewAvatar from '../Avatar/BreweryPreviewAvatar'
import { RedirectButton } from '../Button'

interface Props extends BreweryPreview {}

export function BreweryCardPreview({ id, name, avatar, address, phone }: Props) {
	return (
		<article className={`${styles.cardContainer} ${styles.customScroll}`}>
			<h3 className={styles.title}>{name}</h3>

			<div className={styles.infoContainer}>
				<BreweryPreviewAvatar imageUrl={avatar} alt={`Imagen de la cervecería seleccionada`} />

				<div className={styles.infoItemsContainer}>
					<SiteInfoItem label={address ?? 'Sin especificar...'} color='var(--foreground)'>
						<MapPin size={20} />
					</SiteInfoItem>

					<SiteInfoItem label={phone ?? 'Sin especificar...'} color='var(--foreground)'>
						<Phone size={20} />
					</SiteInfoItem>
				</div>
			</div>

			<RedirectButton variant='primary' href={`/dashboard/breweries/${id}`}>
				Ver más
			</RedirectButton>
		</article>
	)
}
