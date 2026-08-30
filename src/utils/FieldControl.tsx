import { FormDatePicker } from "@/component/FormField/FormDatePicker";
import { FormDropdown, type Dropdown } from "@/component/FormField/FormDropdown";
import { GenericTextField } from "@/component/FormField/GenericTextField";

export interface FormInfo {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    options?:Dropdown[];
    fieldType: string;
    unit?:string,
    flex?: Record<string, number>;
    required: boolean;
}

interface FieldComponentProps {
    fieldItems:FormInfo
}

export const FieldControl = ({ fieldItems }: FieldComponentProps) => {

    const { fieldType } = fieldItems;

    switch (fieldType) {
        case "dropDown":
            return <FormDropdown {...fieldItems} />;
        case "text":
            return <GenericTextField {...fieldItems} isStyling={false} />;
        case "datePicker":
            return <FormDatePicker {...fieldItems} />;
        default:
            return null
    }
}