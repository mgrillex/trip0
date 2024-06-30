import { Module } from "@nestjs/common";
import { MealModuleBase } from "./base/meal.module.base";
import { MealService } from "./meal.service";
import { MealController } from "./meal.controller";
import { MealResolver } from "./meal.resolver";

@Module({
  imports: [MealModuleBase],
  controllers: [MealController],
  providers: [MealService, MealResolver],
  exports: [MealService],
})
export class MealModule {}
