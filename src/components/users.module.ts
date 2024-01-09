import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up/sign-up.service';

@Module({
  providers: [SignUpService]
})
export class ComponentsModule {}
