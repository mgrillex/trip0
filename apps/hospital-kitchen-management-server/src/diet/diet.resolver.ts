import * as graphql from "@nestjs/graphql";
import { DietResolverBase } from "./base/diet.resolver.base";
import { Diet } from "./base/Diet";
import { DietService } from "./diet.service";

@graphql.Resolver(() => Diet)
export class DietResolver extends DietResolverBase {
  constructor(protected readonly service: DietService) {
    super(service);
  }
}
