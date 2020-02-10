import { Module } from "@nestjs/common";
import { SkillResolver } from "./skill.resolver";

@Module({
  providers: [SkillResolver]
})
export class SkillModule {
  
}