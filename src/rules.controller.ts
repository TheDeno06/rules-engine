import { Controller, Get } from '@nestjs/common';
import { RulesService } from './rules.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class RulesController {
  constructor(private readonly appService: RulesService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('payment_validate')
  validatePayment(data: any) {
    this.appService.get_payment_rules(data);
  }
}
