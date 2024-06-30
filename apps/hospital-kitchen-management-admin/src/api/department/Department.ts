import { Ingredient } from "../ingredient/Ingredient";
import { Inventory } from "../inventory/Inventory";
import { Meal } from "../meal/Meal";

export type Department = {
  createdAt: Date;
  departmentName: string | null;
  id: string;
  ingredients?: Array<Ingredient>;
  inventories?: Array<Inventory>;
  meals?: Array<Meal>;
  totalRequiredItems: number | null;
  totalRequiredMaterials: number | null;
  updatedAt: Date;
};
