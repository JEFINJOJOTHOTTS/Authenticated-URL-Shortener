import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/users.module';
import { UsersService } from './dbsrvs/srv/users/users.service';

@Module({
  imports: [ComponentsModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
