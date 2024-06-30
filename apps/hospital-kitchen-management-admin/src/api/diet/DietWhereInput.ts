import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DietWhereInput = {
  dietCode?: StringNullableFilter;
  dietName?: StringNullableFilter;
  id?: StringFilter;
};
