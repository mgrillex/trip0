import { Department } from "../department/Department";

export type Meal = {
  createdAt: Date;
  department?: Department | null;
  id: string;
  mealIngredients: string | null;
  mealName: string | null;
  updatedAt: Date;
};
