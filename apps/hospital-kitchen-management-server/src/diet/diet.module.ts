import { Module } from "@nestjs/common";
import { DietModuleBase } from "./base/diet.module.base";
import { DietService } from "./diet.service";
import { DietController } from "./diet.controller";
import { DietResolver } from "./diet.resolver";

@Module({
  imports: [DietModuleBase],
  controllers: [DietController],
  providers: [DietService, DietResolver],
  exports: [DietService],
})
export class DietModule {}
