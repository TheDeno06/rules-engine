//import { PaymentMethod } from './dtos/payment-request-body.dto';

export enum PaymentMethod {
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA',
}

export class PaymentMethodCheckEvent {
  constructor(public readonly paymentMethod: PaymentMethod) {}
}
