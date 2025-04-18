import styles from './SiteInfoItem.module.css'

interface Props {
	children: React.ReactNode
	label: string
	color: string
}

export function SiteInfoItem({ children, label, color }: Props) {
	return (
		<div className={styles.infoItem}>
			{children}
			<p style={{ color }}>{label}</p>
		</div>
	)
}
