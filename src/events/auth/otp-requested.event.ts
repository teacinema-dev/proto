export interface OtpRequestedEvent {
	identifier: string
	code: string
	type: 'email' | 'phone'
}
