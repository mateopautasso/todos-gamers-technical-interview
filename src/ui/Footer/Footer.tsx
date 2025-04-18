'use client'

import { CalendarDays, House, MessageCircle } from 'lucide-react'
import styles from './Footer.module.css'
import { usePathname, redirect } from 'next/navigation'

export function Footer() {
	const pathname = usePathname()

	const calendarIsActive = pathname === '/dashboard/calendar'
	const homeIsActive = pathname === '/dashboard'
	const chatIsActive = pathname === '/dashboard/chat'

	return (
		<footer className={styles.footer}>
			<ul className={styles.ul}>
				<li>
					<CalendarDays color={calendarIsActive ? 'var(--purple)' : 'var(--foreground)'} />
					<span className={calendarIsActive ? `${styles.textActive}` : ''}>Calendario</span>
				</li>
				<li onClick={() => redirect('/')}>
					<House fill={homeIsActive ? 'var(--purple)' : ''} color={homeIsActive ? 'var(--purple)' : 'var(--foreground)'} />
					<span className={homeIsActive ? `${styles.textActive}` : ''}>Inicio</span>
				</li>
				<li>
					<MessageCircle color={chatIsActive ? 'var(--purple)' : 'var(--foreground)'} />
					<span className={chatIsActive ? `${styles.textActive}` : ''}>Chat</span>
				</li>
			</ul>
		</footer>
	)
}
