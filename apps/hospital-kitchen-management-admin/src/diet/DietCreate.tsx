import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const DietCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
