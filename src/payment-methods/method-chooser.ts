import { MasterCardMethodRule } from './mastercard-method';
import { VisaMethodRule } from './visa-method';

export class ChooseFactory {
  chooseMethod(method: string): {} | Error {
    console.log('method chooser running...');
    switch (method) {
      case 'VISA':
        console.log('Redirecting payment rules to the payment service:');
        let visaValidator = new VisaMethodRule();
        return visaValidator.validate();

      case 'MASTERCARD':
        console.log('Redirecting payment rules to the payment service:');
        let mastercardValidator = new MasterCardMethodRule();
        return mastercardValidator.validate();

      default:
        console.log('No such payment method available!');
    }
  }
}
