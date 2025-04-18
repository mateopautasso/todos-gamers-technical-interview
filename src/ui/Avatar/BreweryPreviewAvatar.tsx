'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './BreweryPreviewAvatar.module.css'
const fallbackSrc = '/images/brewery-fallback.png'

interface Props {
	imageUrl?: string
	alt: string
}

export default function BreweryPreviewAvatar({ imageUrl, alt }: Props) {
	const [src, setSrc] = useState(imageUrl || fallbackSrc)

	return (
		<figure className={styles.imageContainer}>
			<Image src={src} alt={alt} fill onError={() => setSrc(fallbackSrc)} style={{ objectFit: 'cover' }} />
		</figure>
	)
}
