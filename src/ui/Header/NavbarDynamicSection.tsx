'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeft, Menu } from 'lucide-react'

export function NavbarDynamicSection() {
	const pathname = usePathname()
	const { back } = useRouter()

	return pathname === '/dashboard' ? <Menu style={{ cursor: 'pointer' }} /> : <ArrowLeft onClick={back} style={{ cursor: 'pointer' }} />
}
