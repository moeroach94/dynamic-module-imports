import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OurDynamicModule } from './util/dynamic-module';

@Module({
  imports: [OurDynamicModule.forFeature()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
