import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type IngredientCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  itemName?: string | null;
  quantityInGrams?: number | null;
};
