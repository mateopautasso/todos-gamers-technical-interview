import styles from './SectionTitle.module.css'

interface Props {
	children: React.ReactNode
}

export function SectionTitle({ children }: Props) {
	return <h2 className={styles.sectionTitle}>{children}</h2>
}
