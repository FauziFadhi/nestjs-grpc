import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesService } from './heroes.controller';

@Module({
  imports: [],
  controllers: [AppController, HeroesService],
  providers: [],
})
export class AppModule {}
