import { Inject, Injectable } from '@nestjs/common';
import { PaymentMethodCheckEvent } from './payment-method.dto';
import { ClientKafka } from '@nestjs/microservices';
import { VisaMethodRule } from './factories/visa-factory';
import { MasterCardMethodRule } from './factories/mastercard-factory';
import { ChooseFactory } from './factories/factory-chooser';

@Injectable()
export class AppService {
  constructor(
    private readonly factoryChooser: ChooseFactory,
    @Inject('PAYMENT_VALIDATED') private readonly validatedClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  get_payment_rules(paymentMethod: PaymentMethodCheckEvent) {
    console.log(`The payment method is ${paymentMethod.paymentMethod}.`);
    this.validatedClient.emit(
      'payment_validated',
      this.factoryChooser.chooseMethod(paymentMethod.paymentMethod),
    );
  }
}
