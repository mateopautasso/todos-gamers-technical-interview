import styles from './CardCarousel.module.css'

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export function CardCarousel({ children }: Props) {
	return (
		<div className={styles.carousel}>
			<ul className={styles.ul}>{children}</ul>
		</div>
	)
}
