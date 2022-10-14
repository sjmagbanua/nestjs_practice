import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BoomarkModule } from './boomark/boomark.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, BoomarkModule,]
})
export class AppModule {}