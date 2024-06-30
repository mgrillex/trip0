import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  department?: DepartmentWhereUniqueInput;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  inventoryItemName?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
