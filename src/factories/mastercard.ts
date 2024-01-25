import { IMethodPaymentRule } from './method--payment-rule.interface';

export class MasterCardMethodRule {
  public validate(): any {
    return {
      isAvsEnabled: Boolean(Math.random()),
    } as IMethodPaymentRule;
  }
}
