import { SortOrder } from "../../util/SortOrder";

export type DietOrderByInput = {
  availableMeals?: SortOrder;
  createdAt?: SortOrder;
  dietCode?: SortOrder;
  dietName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
