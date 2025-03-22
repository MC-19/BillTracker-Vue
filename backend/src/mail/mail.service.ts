import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(email: string) {
    await this.mailerService.sendMail({
      to: email,
      from: '"BillTracker" <no-reply@billtracker.com>', // Cambia esto con tu dominio
      subject: 'Bienvenido a BillTracker 🚀',
      text: '¡Gracias por registrarte en BillTracker!',
      html: '<h1>Bienvenido a BillTracker 🚀</h1><p>Gracias por registrarte.</p>',
    });
  }
}
