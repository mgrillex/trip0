import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DepartmentTitle } from "../department/DepartmentTitle";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
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
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <TextInput label="inventoryItemName" source="inventoryItemName" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
