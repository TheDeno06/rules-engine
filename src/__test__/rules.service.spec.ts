import { TestingModule } from '@nestjs/testing';
import { RulesService } from 'src/rules.service';

describe('RulesService', () => {
  let app: TestingModule;
  let rulesService: RulesService;

  it('should be defined', () => {
    expect(app).toBeDefined();
    expect(rulesService).toBeDefined();
  });

  describe('methods should be defined', () => {
    it('should call get_payment_rules', async () => {
      expect(await rulesService.get_payment_rules).toBeTruthy();
    });
  });

  describe('get_payment_rules', () => {
    it('should get payment rules depending on the method', async () => {});
  });
});
