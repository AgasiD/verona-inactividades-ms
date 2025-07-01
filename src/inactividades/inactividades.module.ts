import { Module } from '@nestjs/common';
import { InactividadesService } from './inactividades.service';
import { HttpService } from '../common/services/http/http.service';
import { InactividadesController } from './inactividades.controller';

@Module({
  controllers: [InactividadesController],
  providers: [HttpService, InactividadesService],
})
export class InactividadesModule {}
