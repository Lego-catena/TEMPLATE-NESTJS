import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import { CreateMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {
  constructor(private mailService: MailerService) {}

  async sendEmail(createMailDto: CreateMailDto) {
    const url = 'https:www.google.com';

    await this.mailService.sendMail({
      to: createMailDto.email,
      subject: 'testmail',
      template: './welcome',
      context: {
        name: createMailDto.name,
        url: url,
      },
    });
  }

  async sendEmailWithAttach(createMailDto: CreateMailDto) {
    const url = 'https:www.google.com';

    await this.mailService.sendMail({
      to: createMailDto.email,
      subject: 'testmail',
      template: './welcome',
      context: {
        name: createMailDto.name,
        url: url,
      },
      attachments: [
        {
          path: join(__dirname, 'templates', 'example.txt'),
          filename: 'example.txt',
          contentDisposition: 'attachment',
        },
      ],
    });
  }
}

/*attachments: attachments.map(({ name, arrayBuffer }) => ({
        filename: name,
        contents: Buffer.from(arrayBuffer).toString('base64'),
        contentTransferEncoding: 'base64',
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }))*/
