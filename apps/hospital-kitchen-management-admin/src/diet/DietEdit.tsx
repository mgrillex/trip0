import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const DietEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="availableMeals"
          source="availableMeals"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="dietCode" source="dietCode" />
        <TextInput label="dietName" source="dietName" />
      </SimpleForm>
    </Edit>
  );
};
