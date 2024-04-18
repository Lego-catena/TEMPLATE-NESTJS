import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMailDto } from './dto/create-mail.dto';

@ApiTags('Sending mails')
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/send')
  @ApiOperation({
    summary: 'Api que se encarga de enviar un email',
    description:
      'Api que se encarga de enviar un email en base a una plantilla preestablecida.',
  })
  async sendMail(@Body() createMailDto: CreateMailDto) {
    await this.mailService.sendEmail(createMailDto);
    return 'Email sending';
  }

  @Post('/send-attach')
  @ApiOperation({
    summary: 'Api que se encarga de enviar un email',
    description:
      'Api que se encarga de enviar un email en base a una plantilla preestablecida.',
  })
  async sendMailAttach(@Body() createMailDto: CreateMailDto) {
    await this.mailService.sendEmailWithAttach(createMailDto);
    return 'Email sending';
  }
}
