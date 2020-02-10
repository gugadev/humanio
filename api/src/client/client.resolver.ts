import { Resolver, Query } from "@nestjs/graphql";
import { ClientService } from "./client.service";

@Resolver('Client')
export class ClientResolver {
  constructor(private readonly service: ClientService) {}

  @Query('clients')
  async getAll() {
    return this.service.getAll()
  }
}