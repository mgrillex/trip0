import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  inventoryItemName?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
