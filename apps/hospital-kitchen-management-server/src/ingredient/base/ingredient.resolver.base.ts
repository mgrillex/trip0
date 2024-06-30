/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Ingredient } from "./Ingredient";
import { IngredientCountArgs } from "./IngredientCountArgs";
import { IngredientFindManyArgs } from "./IngredientFindManyArgs";
import { IngredientFindUniqueArgs } from "./IngredientFindUniqueArgs";
import { CreateIngredientArgs } from "./CreateIngredientArgs";
import { UpdateIngredientArgs } from "./UpdateIngredientArgs";
import { DeleteIngredientArgs } from "./DeleteIngredientArgs";
import { Department } from "../../department/base/Department";
import { IngredientService } from "../ingredient.service";
@graphql.Resolver(() => Ingredient)
export class IngredientResolverBase {
  constructor(protected readonly service: IngredientService) {}

  async _ingredientsMeta(
    @graphql.Args() args: IngredientCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Ingredient])
  async ingredients(
    @graphql.Args() args: IngredientFindManyArgs
  ): Promise<Ingredient[]> {
    return this.service.ingredients(args);
  }

  @graphql.Query(() => Ingredient, { nullable: true })
  async ingredient(
    @graphql.Args() args: IngredientFindUniqueArgs
  ): Promise<Ingredient | null> {
    const result = await this.service.ingredient(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Ingredient)
  async createIngredient(
    @graphql.Args() args: CreateIngredientArgs
  ): Promise<Ingredient> {
    return await this.service.createIngredient({
      ...args,
      data: {
        ...args.data,

        department: args.data.department
          ? {
              connect: args.data.department,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Ingredient)
  async updateIngredient(
    @graphql.Args() args: UpdateIngredientArgs
  ): Promise<Ingredient | null> {
    try {
      return await this.service.updateIngredient({
        ...args,
        data: {
          ...args.data,

          department: args.data.department
            ? {
                connect: args.data.department,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ingredient)
  async deleteIngredient(
    @graphql.Args() args: DeleteIngredientArgs
  ): Promise<Ingredient | null> {
    try {
      return await this.service.deleteIngredient(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Department, {
    nullable: true,
    name: "department",
  })
  async getDepartment(
    @graphql.Parent() parent: Ingredient
  ): Promise<Department | null> {
    const result = await this.service.getDepartment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
