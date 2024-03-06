import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    PrismaModule,
    AuthModule,
    PurchaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
