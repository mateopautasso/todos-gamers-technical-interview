import { LoaderCircle } from 'lucide-react'
import styles from './LoadingPage.module.css'

export function LoadingPage() {
	return (
		<main className={`page-container ${styles.loadingPage}`}>
			<LoaderCircle size={60} className='loaderSpin' color='var(--pink)' />
		</main>
	)
}
