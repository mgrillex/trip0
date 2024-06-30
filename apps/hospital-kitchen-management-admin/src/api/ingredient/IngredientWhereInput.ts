import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type IngredientWhereInput = {
  department?: DepartmentWhereUniqueInput;
  id?: StringFilter;
  itemName?: StringNullableFilter;
  quantityInGrams?: FloatNullableFilter;
};
