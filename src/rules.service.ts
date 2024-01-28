import { Inject, Injectable } from '@nestjs/common';
import { PaymentMethodCheckEvent } from './payment-method.dto';
import { ClientKafka } from '@nestjs/microservices';
import { ChooseFactory } from './payment-methods/method-chooser';

@Injectable()
export class RulesService {
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
      `${paymentMethod.paymentMethod.toLowerCase()}_payment_validated`,
      this.factoryChooser.chooseMethod(paymentMethod.paymentMethod),
    );
  }
}
