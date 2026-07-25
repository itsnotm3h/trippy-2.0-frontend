import { Stack } from "@mui/material";
import { Form, FormProvider, useForm } from "react-hook-form";
import { FormSection } from "./FormSections/FormSections";

export const TripForm = () => {
  const form = useForm();

  const submitEdits = () => {};

  const formList = [
    {
      sections: [
        {
          label: "Trip Title",
          name: "title",
          type: "text",
          placeholder: "Give your trip a name",
          fieldType: "text",
          flex: { xs: 12, sm: 8, md: 8 },
          required: true,
        },
        {
          label: "Type",
          name: "type",
          type: "text",
          placeholder: "Type",
          fieldType: "dropDown",
          flex: { xs: 6, sm: 2, md: 2 },
          required: true,
        },
        {
          label: "Visibility",
          name: "visible",
          type: "text",
          placeholder: "Private",
          fieldType: "dropDown",
          flex: { xs: 6, sm: 2, md: 2 },
          required: true,
        },
      ],
    },
  ];

  return (
    <Stack>
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(submitEdits)}>
          <Stack>
            {formList.map((item, index) => (
              <FormSection key={`section_${index}`} formInfo={item} />
            ))}
          </Stack>
        </Form>
      </FormProvider>
    </Stack>
  );
};
