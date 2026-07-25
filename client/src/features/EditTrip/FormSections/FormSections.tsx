import { GenericTextField } from "@/component/FormField/GenericTextField";
import { DataFormatter } from "@/utils/DataFormatter";
import { Divider, Grid, Stack, Typography } from "@mui/material";

interface FormSectionProps {
  formInfo: any;
}

export const FormSection = ({ formInfo }: FormSectionProps) => {
  console.log(formInfo);

  return (
    <Stack>
      <Stack
        sx={{
          borderRadius: "10px",
          backgroundColor: "#dfdfdf",
          p: 2,
          gap: 1,
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          sx={{ alignItems: "flex-end" }}
        >
          {formInfo?.sections.map((item: any, index: number) => {
            const { label, ...others } = item;

            return (
              <Grid
                key={`formfield_${item.name}`}
                size={item.flex}
                sx={{ borderRight: { md: "1px solid black" } }}
              >
                <Typography sx={{ fontWeight: 700 }}>{item.label}</Typography>
                <GenericTextField {...others} isStyling={false} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
};
