import { MasterCardMethodRule } from './mastercard';
import { VisaMethodRule } from './visa';

export class MethodFactory {
  chooseMethod(method: string): {} | Error {
    switch (method) {
      case 'VISA':
        return new VisaMethodRule();
      case 'MASTERCARD':
        return new MasterCardMethodRule();
      default:
        throw new Error('No such payment method available!');
    }
  }
}
