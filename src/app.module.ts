import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { authenticationMiddleware } from './middleware/authentication.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, DatabaseModule,EmployeesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(authenticationMiddleware).forRoutes("*")
  }
}
