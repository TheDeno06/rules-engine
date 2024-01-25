import { PaymentMethod } from './dtos/payment-request-body.dto';

export class PaymentMethodCheckEvent {
  constructor(public readonly paymentMethod: PaymentMethod) {}
}
