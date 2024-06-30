import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { IngredientTitle } from "../ingredient/IngredientTitle";
import { InventoryTitle } from "../inventory/InventoryTitle";
import { MealTitle } from "../meal/MealTitle";

export const DepartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="departmentName" source="departmentName" />
        <ReferenceArrayInput
          source="ingredients"
          reference="Ingredient"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IngredientTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inventories"
          reference="Inventory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="meals"
          reference="Meal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MealTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="totalRequiredItems"
          source="totalRequiredItems"
        />
        <NumberInput
          step={1}
          label="totalRequiredMaterials"
          source="totalRequiredMaterials"
        />
      </SimpleForm>
    </Create>
  );
};
