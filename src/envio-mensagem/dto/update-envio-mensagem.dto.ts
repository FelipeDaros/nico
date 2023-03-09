import { PartialType } from '@nestjs/mapped-types';
import { CreateEnvioMensagemDto } from './create-envio-mensagem.dto';

export class UpdateEnvioMensagemDto extends PartialType(CreateEnvioMensagemDto) {}
