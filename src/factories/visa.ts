import { IMethodPaymentRule } from './method--payment-rule.interface';

export class VisaMethodRule {
  public validate(): any {
    return {
      isAvsEnabled: Boolean(Math.random()),
    } as IMethodPaymentRule;
  }
}
