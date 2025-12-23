export interface BookingConfirmedEvent {
	bookingId: string
	userId: string
	paymentId: string
	amount: number
}
