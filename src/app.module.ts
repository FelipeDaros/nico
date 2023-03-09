import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvioMensagemModule } from './envio-mensagem/envio-mensagem.module';

@Module({
  imports: [EnvioMensagemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
