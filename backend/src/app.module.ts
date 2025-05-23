import { SerieFacturaController } from './series/serie-factura.controller';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { SectorModule } from './sector/sector.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { ClientModule } from './client/client.module';
import { BusinessModule } from './business/business.module';
import { SerieFacturaModule } from './series/serie-factura.module'; // ruta correcta
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: process.env.NODE_ENV !== 'production',
      }),
    }),
    AuthModule,
    MailModule,
    BusinessModule,
    UserModule,
    SectorModule,
    CategoryModule,
    PaymentMethodModule,
    ClientModule,
    SerieFacturaModule,
  ],
  controllers: [AppController], // 👈 ESTO FALTABA
  providers: [AppService],      // 👈 ESTO TAMBIÉN
})
export class AppModule {}



