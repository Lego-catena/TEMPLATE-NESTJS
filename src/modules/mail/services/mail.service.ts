import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import { CreateMailDto } from '../dto/create-mail.dto';

/**
 * Servicio encargado del envio de correos electronicos
 *
 * @author: jprodriguez
 */
@Injectable()
export class MailService {
  private readonly logger: Logger = new Logger(MailService.name);

  constructor(private mailService: MailerService) {}

  /**
   * Metodo encargado del envio de correos.
   *
   * @param createMailDto
   */
  async sendEmail(createMailDto: CreateMailDto) {
    this.logger.log('Sending mails');

    await this.mailService.sendMail({
      to: createMailDto.email,
      subject: 'testmail',
      template: createMailDto.template ? createMailDto.template : './welcome',
      context: {
        name: createMailDto.name,
      },
    });
  }

  /**
   * Metodo encargado de enviar correos con adjunto.
   *
   * @param createMailDto
   */
  async sendEmailWithAttach(createMailDto: CreateMailDto): Promise<void> {
    await this.mailService.sendMail({
      to: createMailDto.email,
      subject: 'testmail',
      template: createMailDto.template ? createMailDto.template : './welcome',
      context: {
        name: createMailDto.name,
      },
      attachments: [
        {
          path: join(__dirname, '../templates', 'example.txt'),
          filename: 'example.txt',
          contentDisposition: 'attachment',
        },
      ],
    });
  }
}
