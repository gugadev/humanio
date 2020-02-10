import { Resolver, Query } from "@nestjs/graphql";

@Resolver('Skill')
export class SkillResolver {
  @Query('skills')
  async getAll() {
    return []
  }
}