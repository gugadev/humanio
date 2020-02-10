import { Resolver, Query } from "@nestjs/graphql"
import { SkillService } from "./skill.service"

@Resolver('Skill')
export class SkillResolver {
  constructor(private readonly service: SkillService) {}

  @Query('skills')
  async getAll() {
    return this.service.getAll()
  }
}