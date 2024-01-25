import { PaymentMethod } from './dtos/payment-request-body.dto';

export class PaymentValidatedEvent {
  constructor(public readonly paymentMsg: string) {}

  toString() {
    return JSON.stringify({ paymentMsg: this.paymentMsg });
  }
}
