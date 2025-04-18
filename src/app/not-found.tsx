'use client'

import { Button } from '@/ui/Button'
import styles from './not-found.module.css'
import { SectionTitle } from '@/ui/Title'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const { back } = useRouter()

	return (
		<main className='page-container'>
			<section className={styles.container}>
				<SectionTitle>404 - Page Not Found</SectionTitle>
				<p className={styles.notFound}>
					La información de la página solicitada no pudo ser obtenida. Por favor, regrese a la sección anterior.
				</p>
				<div>
					<Button variant='primary' onClick={() => back()}>
						Regresar
					</Button>
				</div>
			</section>
		</main>
	)
}
