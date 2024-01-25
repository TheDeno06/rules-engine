import { Inject, Injectable } from '@nestjs/common';
import { PaymentMethodCheckEvent } from './payment-method.dto';
import { ClientKafka } from '@nestjs/microservices';
import { PaymentValidatedEvent } from './payment-validated.event';
import { MethodFactory } from './factories/method-factory';
import { VisaMethodRule } from './factories/visa';
import { MasterCardMethodRule } from './factories/mastercard';

@Injectable()
export class AppService {
  constructor(
    @Inject('PAYMENT_VALIDATED') private readonly validatedClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  get_payment_rules(paymentMethod: PaymentMethodCheckEvent) {
    console.log(`The payment method is ${paymentMethod.paymentMethod}.`);
    this.chooseMethod(paymentMethod.paymentMethod);
    // if (paymentMethod.paymentMethod === 'VISA') {
    //   this.validatedClient.emit(
    //     'payment_validation',
    //     new PaymentValidatedEvent('Green light from visa'),
    //   );
    // } else if (paymentMethod.paymentMethod === 'MASTERCARD') {
    //   this.validatedClient.emit(
    //     'payment_validation',
    //     new PaymentValidatedEvent('Green light from mastercard'),
    //   );
    // } else {
    //   this.validatedClient.emit(
    //     'payment_validation',
    //     new PaymentValidatedEvent('Red light: No such method'),
    //   );
    // }
  }

  chooseMethod(method: string): {} | Error {
    //let method: string = JSON.stringify(paymentMethod.paymentMethod);
    console.log('method chooser running...');
    switch (method) {
      case 'VISA':
        console.log('Redirecting payment rules to the payment service');
        console.log(new VisaMethodRule());
        return new VisaMethodRule();
      case 'MASTERCARD':
        console.log('Redirecting payment rules to the payment service');
        console.log(new MasterCardMethodRule());
        return new MasterCardMethodRule();
      default:
        throw new Error('No such payment method available!');
    }
  }
}
