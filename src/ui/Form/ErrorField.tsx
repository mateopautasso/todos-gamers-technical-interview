import styles from './ErrorField.module.css'

interface Props {
	children: string
}

export function ErrorField({ children }: Props) {
	return <span className={styles.error}>{children}</span>
}
