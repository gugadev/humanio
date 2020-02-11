import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { Client } from "src/client/client.model"

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly repository: Repository<Client>
  ) {}

  async getAll(): Promise<Client[]> {
    return this.repository.find()
  }
}