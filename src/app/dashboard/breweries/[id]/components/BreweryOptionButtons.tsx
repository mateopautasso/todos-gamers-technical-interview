'use client'

import { Button } from '@/ui/Button'
import styles from './BreweryOptionButtons.module.css'

export function BreweryOptionButtons() {
	return (
		<div className={styles.buttonsContainer}>
			<Button variant='primary' onClick={() => alert('Funcionalidad en desarrollo')}>
				Reservar mesa
			</Button>
			<Button variant='secondary' onClick={() => alert('Funcionalidad en desarrollo')}>
				Opciones de transporte
			</Button>
		</div>
	)
}
