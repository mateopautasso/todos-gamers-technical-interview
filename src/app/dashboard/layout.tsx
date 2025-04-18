import { Header } from '@/ui/Header'
import { Footer } from '@/ui/Footer'

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
