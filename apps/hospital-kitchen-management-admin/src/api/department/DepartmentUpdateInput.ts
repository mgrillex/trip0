import { IngredientUpdateManyWithoutDepartmentsInput } from "./IngredientUpdateManyWithoutDepartmentsInput";
import { InventoryUpdateManyWithoutDepartmentsInput } from "./InventoryUpdateManyWithoutDepartmentsInput";
import { MealUpdateManyWithoutDepartmentsInput } from "./MealUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  departmentName?: string | null;
  ingredients?: IngredientUpdateManyWithoutDepartmentsInput;
  inventories?: InventoryUpdateManyWithoutDepartmentsInput;
  meals?: MealUpdateManyWithoutDepartmentsInput;
  totalRequiredItems?: number | null;
  totalRequiredMaterials?: number | null;
};
