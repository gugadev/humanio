import { Resolver, Query } from "@nestjs/graphql"
import { SkillService } from "src/skill/skill.service"
import { Skill } from "src/skill/skill.model"

@Resolver('Skill')
export class SkillResolver {
  constructor(private readonly service: SkillService) {}

  @Query('skills')
  async getAll(): Promise<Skill[]> {
    return this.service.getAll()
  }
}