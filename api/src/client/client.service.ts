import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Client } from "./client.model";
import { InjectRepository } from "@nestjs/typeorm";

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