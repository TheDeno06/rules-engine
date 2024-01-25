import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ChooseFactory } from './factories/factory-chooser';

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
  controllers: [AppController],
  providers: [AppService, ChooseFactory],
})
export class AppModule {}
