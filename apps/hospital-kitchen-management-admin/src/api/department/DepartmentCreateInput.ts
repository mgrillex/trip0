import { IngredientCreateNestedManyWithoutDepartmentsInput } from "./IngredientCreateNestedManyWithoutDepartmentsInput";
import { InventoryCreateNestedManyWithoutDepartmentsInput } from "./InventoryCreateNestedManyWithoutDepartmentsInput";
import { MealCreateNestedManyWithoutDepartmentsInput } from "./MealCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  departmentName?: string | null;
  ingredients?: IngredientCreateNestedManyWithoutDepartmentsInput;
  inventories?: InventoryCreateNestedManyWithoutDepartmentsInput;
  meals?: MealCreateNestedManyWithoutDepartmentsInput;
  totalRequiredItems?: number | null;
  totalRequiredMaterials?: number | null;
};
