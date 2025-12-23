export interface BookingRefundedEvent {
	bookingId: string
	userId: string
	paymentId: string
	refundId: string
	amount: number
}
