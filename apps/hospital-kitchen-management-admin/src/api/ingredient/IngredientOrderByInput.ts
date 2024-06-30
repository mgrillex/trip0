import { SortOrder } from "../../util/SortOrder";

export type IngredientOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  itemName?: SortOrder;
  quantityInGrams?: SortOrder;
  updatedAt?: SortOrder;
};
