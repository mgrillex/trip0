import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type MealUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  mealIngredients?: string | null;
  mealName?: string | null;
};
