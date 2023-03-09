import { BadRequestException, Injectable } from '@nestjs/common';
import { create, Whatsapp, Message } from 'venom-bot';
import { RemetenteDto } from './dto/remetente.dto';

interface Isend{
  to: string
}

@Injectable()
export class VenomService {
  private client: Whatsapp;

  constructor() {
    this.iniciar();
  }

  public async iniciar() {
    const start = (client: Whatsapp) => {
      this.client = client;
    };

    create({
      session: 'maxipas',
      autoClose: 0,
      puppeteerOptions: {
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--disable-gpu',
        ],
      },
      disableSpins: true,
      disableWelcome: true
    })
      .then((client) => start(client))
      .catch((erro) => {
        console.log(erro);
      });
  }

  public async sendMessage(to: string, body: string) {
    try {
      await this.client.sendText(`${to}@c.us`, body);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async envioConfirmacaoAgendamento(remetenteDto: RemetenteDto) {
    let sections = [
      {
        title: "Section 1",
        rows: [
          {
            rowId: "1",
            title: "Element 1",
            description: "Description 1",
          },
          {
            rowId: "2",
            title: "Element 2",
            description: "Description 2",
          },
        ]
      },
      {
        title: "Section 2",
        rows: [
          {
            rowId: "3",
            title: "Element 3",
            description: "Description 3",
          },
          {
            rowId: "4",
            title: "Element 4",
            description: "Description 4",
          },
        ]
      },
      ];
     await this.client.sendListMenu(`${remetenteDto.to}@c.us`, "Title", "Description", "Choose", sections)
     .then(async(result) => {
       await result.toLocaleString()
     })
     .catch((erro) => {
       console.error('Error when sending: ', erro); //return object error
     });
     
     //await this.client.send

     const messages = await this.client.getChatById(`${remetenteDto.to}@c.us`);

     console.log(messages.msgs)
  }
}
