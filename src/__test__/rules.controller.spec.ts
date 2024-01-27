import { Test, TestingModule } from '@nestjs/testing';
import { RulesController } from '../rules.controller';
import { RulesService } from '../rules.service';

describe('AppController', () => {
  let appController: RulesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RulesController],
      providers: [RulesService],
    }).compile();

    appController = app.get<RulesController>(RulesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
