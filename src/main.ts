import { NestFactory } from '@nestjs/core';
import { RulesModule } from './rules.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RulesModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'rules-consumer',
        },
      },
    },
  );
  app.listen();
}
bootstrap();
