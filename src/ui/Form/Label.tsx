import styles from './Label.module.css'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: Props) {
	return (
		<label className={styles.label} {...props}>
			{props.children}
		</label>
	)
}
