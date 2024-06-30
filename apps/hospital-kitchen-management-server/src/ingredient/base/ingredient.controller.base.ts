/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { IngredientService } from "../ingredient.service";
import { IngredientCreateInput } from "./IngredientCreateInput";
import { Ingredient } from "./Ingredient";
import { IngredientFindManyArgs } from "./IngredientFindManyArgs";
import { IngredientWhereUniqueInput } from "./IngredientWhereUniqueInput";
import { IngredientUpdateInput } from "./IngredientUpdateInput";

export class IngredientControllerBase {
  constructor(protected readonly service: IngredientService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ingredient })
  async createIngredient(
    @common.Body() data: IngredientCreateInput
  ): Promise<Ingredient> {
    return await this.service.createIngredient({
      data: {
        ...data,

        department: data.department
          ? {
              connect: data.department,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        itemName: true,
        quantityInGrams: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Ingredient] })
  @ApiNestedQuery(IngredientFindManyArgs)
  async ingredients(@common.Req() request: Request): Promise<Ingredient[]> {
    const args = plainToClass(IngredientFindManyArgs, request.query);
    return this.service.ingredients({
      ...args,
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        itemName: true,
        quantityInGrams: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ingredient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async ingredient(
    @common.Param() params: IngredientWhereUniqueInput
  ): Promise<Ingredient | null> {
    const result = await this.service.ingredient({
      where: params,
      select: {
        createdAt: true,

        department: {
          select: {
            id: true,
          },
        },

        id: true,
        itemName: true,
        quantityInGrams: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Ingredient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateIngredient(
    @common.Param() params: IngredientWhereUniqueInput,
    @common.Body() data: IngredientUpdateInput
  ): Promise<Ingredient | null> {
    try {
      return await this.service.updateIngredient({
        where: params,
        data: {
          ...data,

          department: data.department
            ? {
                connect: data.department,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          department: {
            select: {
              id: true,
            },
          },

          id: true,
          itemName: true,
          quantityInGrams: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Ingredient })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteIngredient(
    @common.Param() params: IngredientWhereUniqueInput
  ): Promise<Ingredient | null> {
    try {
      return await this.service.deleteIngredient({
        where: params,
        select: {
          createdAt: true,

          department: {
            select: {
              id: true,
            },
          },

          id: true,
          itemName: true,
          quantityInGrams: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
