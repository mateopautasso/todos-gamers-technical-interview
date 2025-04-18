export type TopNotificationType = 'error' | 'warning' | 'success'

export interface TopNotification {
	type: TopNotificationType
	title: string
	content: string
}
