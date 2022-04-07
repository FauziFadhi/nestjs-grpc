import { Metadata } from '@grpc/grpc-js';
import { BadRequestException, Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {} from '../hero/'
@Controller()
export class HeroesService {
  private logger = new Logger('HeroesController');
  @GrpcMethod()
  findOne(data: any, metadata: Metadata) {
    console.log(data);
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
