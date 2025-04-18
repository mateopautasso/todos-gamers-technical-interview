import styles from './Button.module.css'
import { ButtonVariant } from './Button'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
	children: React.ReactNode
	variant: ButtonVariant
}

export function RedirectButton(props: Props) {
	return (
		<Link className={`${styles.button} ${styles[props.variant]}`} {...props}>
			{props.children}
		</Link>
	)
}
