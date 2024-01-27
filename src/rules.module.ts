import { Module } from '@nestjs/common';
import { RulesController } from './rules.controller';
import { RulesService } from './rules.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ChooseFactory } from './payment-methods/method-chooser';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENT_VALIDATED',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'payment',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'payment-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [RulesController],
  providers: [RulesService, ChooseFactory],
})
export class RulesModule {}
