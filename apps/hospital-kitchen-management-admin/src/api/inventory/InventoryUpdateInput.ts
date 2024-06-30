import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type InventoryUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  expirationDate?: Date | null;
  inventoryItemName?: string | null;
  quantity?: number | null;
};
