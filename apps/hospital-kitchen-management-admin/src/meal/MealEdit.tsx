import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DepartmentTitle } from "../department/DepartmentTitle";

export const MealEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <TextInput label="mealIngredients" multiline source="mealIngredients" />
        <TextInput label="mealName" source="mealName" />
      </SimpleForm>
    </Edit>
  );
};
