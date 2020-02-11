import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientResolver } from "src/client/client.resolver";
import { ClientService } from "src/client/client.service";
import { Client } from "src/client/client.model";

@Module({
  imports: [
    TypeOrmModule.forFeature([Client])
  ],
  providers: [
    ClientResolver,
    ClientService
  ],
  exports: [
    ClientService
  ]
})
export class ClientModule {
  
}