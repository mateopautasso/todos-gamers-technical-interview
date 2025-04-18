import styles from './Header.module.css'
import { NavbarDynamicSection } from './NavbarDynamicSection'
import { NavbarStaticSection } from './NavbarStaticSection'

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<NavbarDynamicSection />
				<NavbarStaticSection />
			</nav>
		</header>
	)
}
