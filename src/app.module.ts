import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { PersonalModule } from './personal/personal.module';
import { GeneroModule } from './genero/genero.module';
import { DistritoModule } from './distrito/distrito.module';
import { EstadocivilModule } from './estadocivil/estadocivil.module';
import { TipoModule } from './tipo/tipo.module';
import { MailerModule } from './mailer/mailer.module'; // Importa el MailerModule
import { EmailController } from './mailer/mailer.controller'; // Importa el EmailController


@Module({
  imports: [
            TypeOrmModule.forRoot({
              type:'mssql', 
              host:'DESKTOP-G8P3KD4',
              port:1433,
              username:'Sa',
              password: '12345678',
              database: 'DB_BI',
              entities: [__dirname+'/**/*.entity{.ts,.js}'],
              synchronize: true,
              options: {
                encrypt: true,  // Habilita cifrado
                trustServerCertificate: true  // Aceptar certificados auto-firmados
              },
            }),
            UsuariosModule,
            PersonalModule,
            GeneroModule,
            DistritoModule,
            EstadocivilModule,
            TipoModule,
            MailerModule],
  controllers: [AppController,EmailController],
  providers: [AppService],
})
export class AppModule {}
