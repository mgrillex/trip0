import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type MealCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  mealIngredients?: string | null;
  mealName?: string | null;
};
