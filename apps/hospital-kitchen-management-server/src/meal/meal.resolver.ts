import * as graphql from "@nestjs/graphql";
import { MealResolverBase } from "./base/meal.resolver.base";
import { Meal } from "./base/Meal";
import { MealService } from "./meal.service";

@graphql.Resolver(() => Meal)
export class MealResolver extends MealResolverBase {
  constructor(protected readonly service: MealService) {
    super(service);
  }
}
