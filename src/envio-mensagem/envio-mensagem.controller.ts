import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnvioMensagemService } from './envio-mensagem.service';
import { CreateEnvioMensagemDto } from './dto/create-envio-mensagem.dto';
import { UpdateEnvioMensagemDto } from './dto/update-envio-mensagem.dto';
import { RemetenteDto } from './dto/remetente.dto';

@Controller('envio-mensagem')
export class EnvioMensagemController {
  constructor(private readonly envioMensagemService: EnvioMensagemService) {}

  @Post()
  create(@Body() createEnvioMensagemDto: CreateEnvioMensagemDto) {
    return this.envioMensagemService.create(createEnvioMensagemDto);
  }

  @Post('confirmar-agendamento')
  public async findAll(@Body() remetenteDto: RemetenteDto) {
    return await this.envioMensagemService.envioConfirmacaoAgendamento(
      remetenteDto,
    );
  }

  @Post('inciar')
  public async inicar() {
    return this.envioMensagemService.inicar();
  }
}
