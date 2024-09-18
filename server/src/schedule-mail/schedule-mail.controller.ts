import { Controller } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ScheduleMailService } from './schedule-mail.service';

@Controller('schedule-mail')
export class ScheduleMailController {
  constructor(private readonly scheduleMailService: ScheduleMailService) {}

  @Cron(CronExpression.EVERY_30_SECONDS, {
    name: 'Send daily mail',
    timeZone: 'Asia/Ho_Chi_Minh',
  })
  async sendDailyEmail() {
    await this.scheduleMailService.sendDailyEmail();
  }
}
