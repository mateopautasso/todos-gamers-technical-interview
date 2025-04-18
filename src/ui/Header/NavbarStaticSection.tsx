'use client'

import { Bell, User } from 'lucide-react'
import styles from './NavbarStaticSection.module.css'
import { useState } from 'react'
import { logoutUser } from '@/lib/actions'
import { Button } from '../Button'

export function NavbarStaticSection() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<ul className={styles.container}>
			<li>
				<Bell size={23} fill='var(--foreground)' />
			</li>
			<li>
				<User fill='var(--foreground)' onClick={() => setShowMenu(!showMenu)} />
			</li>
			{showMenu && (
				<div className={styles.logout}>
					<Button variant='secondary' onClick={logoutUser}>
						Cerrar sesión
					</Button>
				</div>
			)}
		</ul>
	)
}
