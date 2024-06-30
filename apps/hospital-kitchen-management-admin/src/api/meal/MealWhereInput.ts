import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MealWhereInput = {
  department?: DepartmentWhereUniqueInput;
  id?: StringFilter;
  mealIngredients?: StringNullableFilter;
  mealName?: StringNullableFilter;
};
