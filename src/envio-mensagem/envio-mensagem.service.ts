import { Injectable } from '@nestjs/common';
import { CreateEnvioMensagemDto } from './dto/create-envio-mensagem.dto';
import { RemetenteDto } from './dto/remetente.dto';
import { UpdateEnvioMensagemDto } from './dto/update-envio-mensagem.dto';
import { VenomService } from './venom.service';

@Injectable()
export class EnvioMensagemService {
  constructor(private readonly venomService: VenomService){
    venomService.iniciar();
  }
  public async inicar(){
    return this.venomService.iniciar();
  }

  public async create({to, body}: CreateEnvioMensagemDto) {
    await this.venomService.sendMessage(to, body);
    return body;
  }

  

  public async envioConfirmacaoAgendamento(remetenteDto: RemetenteDto) {
    return await this.venomService.envioConfirmacaoAgendamento(remetenteDto);
  }

}
