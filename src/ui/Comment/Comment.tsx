'use client'

import UserAvatar from '@/ui/Avatar/UserAvatar'
import styles from './Comment.module.css'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface Props {
	id: string
	avatar: string
	name: string
	comment: string
}

export function Comment({ avatar, name, comment }: Props) {
	const [commentActive, setCommentActive] = useState(false)

	return (
		<article className={styles.container}>
			<header className={styles.header}>
				<div className={styles.userInfoContainer}>
					<UserAvatar imageUrl={avatar} alt={`Foto de perfil de ${name}`} />
					<p className={styles.userName}>{name}</p>
				</div>
				<button className={styles.response}>Responder</button>
			</header>
			<div className={styles.commentContainer}>
				<p className={`${styles.commentText} ${commentActive ? styles.noLimitText : styles.limitText}`}>{comment}</p>
				<ChevronDown
					className={`${styles.commentChevron} ${commentActive ? styles.commentChevronActive : ''}`}
					size={16}
					color='var(--pink)'
					onClick={() => setCommentActive(!commentActive)}
				/>
			</div>
		</article>
	)
}
