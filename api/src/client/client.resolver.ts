import { Resolver, Query } from "@nestjs/graphql";
import { ClientService } from "src/client/client.service";
import { Client } from "src/client/client.model";

@Resolver('Client')
export class ClientResolver {
  constructor(private readonly service: ClientService) {}

  @Query('clients')
  async getAll(): Promise<Client[]> {
    return this.service.getAll()
  }
}