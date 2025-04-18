'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './UserAvatar.module.css'
const fallbackSrc = '/images/user-avatar-fallback.png'

interface Props {
	imageUrl?: string
	alt: string
}

export default function UserAvatar({ imageUrl, alt }: Props) {
	const [src, setSrc] = useState(imageUrl || fallbackSrc)

	return (
		<figure className={styles.imageContainer}>
			<Image src={src} alt={alt} fill onError={() => setSrc(fallbackSrc)} style={{ objectFit: 'cover' }} />
		</figure>
	)
}
