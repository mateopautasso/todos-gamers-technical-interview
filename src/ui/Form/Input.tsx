import styles from './Input.module.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: Props) {
	return <input className={styles.input} {...props} />
}
