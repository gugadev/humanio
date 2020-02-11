import { Resolver, Query } from "@nestjs/graphql";
import { ClientService } from "./client.service";
import { Client } from "./client.model";

@Resolver('Client')
export class ClientResolver {
  constructor(private readonly service: ClientService) {}

  @Query('clients')
  async getAll(): Promise<Client[]> {
    return this.service.getAll()
  }
}