import { Module } from '@nestjs/common';
import { EnvioMensagemService } from './envio-mensagem.service';
import { EnvioMensagemController } from './envio-mensagem.controller';
import { VenomService } from './venom.service';

@Module({
  controllers: [EnvioMensagemController],
  providers: [EnvioMensagemService, VenomService]
})
export class EnvioMensagemModule {}
