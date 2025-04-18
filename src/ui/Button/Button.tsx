import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant
}

export function Button(props: Props) {
	return (
		<button className={`${styles.button} ${styles[props.variant]}`} {...props}>
			{props.children}
		</button>
	)
}
