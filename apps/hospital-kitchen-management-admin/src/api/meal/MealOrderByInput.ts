import { SortOrder } from "../../util/SortOrder";

export type MealOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  mealIngredients?: SortOrder;
  mealName?: SortOrder;
  updatedAt?: SortOrder;
};
