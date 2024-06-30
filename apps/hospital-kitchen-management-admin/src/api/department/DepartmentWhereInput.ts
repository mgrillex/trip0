import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IngredientListRelationFilter } from "../ingredient/IngredientListRelationFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { MealListRelationFilter } from "../meal/MealListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DepartmentWhereInput = {
  departmentName?: StringNullableFilter;
  id?: StringFilter;
  ingredients?: IngredientListRelationFilter;
  inventories?: InventoryListRelationFilter;
  meals?: MealListRelationFilter;
  totalRequiredItems?: IntNullableFilter;
  totalRequiredMaterials?: IntNullableFilter;
};
