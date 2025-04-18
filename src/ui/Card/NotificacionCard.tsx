import { CircleAlert } from 'lucide-react'
import styles from './NotificacionCard.module.css'
import { TopNotification } from '@/lib/interfaces'

interface Props extends TopNotification {}

export function NotificacionCard({ type, title, content }: Props) {
	return (
		<aside className={`${styles.container} ${styles[type]}`}>
			<div>
				{/* {type === 'success' && <SuccessIcon />} */}
				{type === 'warning' && <CircleAlert size={28} fill='var(--orange)' color='var(--background)' />}
				{/* {type === 'warning' && <ErrorIcon />} */}
			</div>
			<div className={styles.infoContainer}>
				<h3 className={styles.infoTitle}>{title}</h3>
				<p className={styles.infoContent}>{content}</p>
			</div>
		</aside>
	)
}
