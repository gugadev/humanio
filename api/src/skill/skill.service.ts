import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Skill } from "src/skill/skill.model"

@Injectable()
export class SkillService {

  constructor (
    @InjectRepository(Skill)
    private readonly repository: Repository<Skill>
  ) {}

  async getAll(): Promise<Skill[]> {
    return this.repository.find()
  }
}