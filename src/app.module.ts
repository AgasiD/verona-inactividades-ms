import { Module } from '@nestjs/common';
import { InactividadesModule } from './inactividades/inactividades.module';

@Module({
  imports: [InactividadesModule],
})
export class AppModule {}
