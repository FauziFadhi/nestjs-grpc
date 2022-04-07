import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor() {}

  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, '../hero/hero.proto'),
      loader: {
        includeDirs: [join(__dirname, '..', 'hero')],
      },
    },
  })
  client: ClientGrpc;
  private heroesService: any;

  onModuleInit() {
    this.heroesService = this.client.getService('HeroesService');
  }
  @Get()
  async getHello() {
    return this.heroesService.findOne({ id: 1 });
  }
}
