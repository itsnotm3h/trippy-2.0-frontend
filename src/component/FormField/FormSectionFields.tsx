import { FieldControl,  type FormInfo } from "@/utils/FieldControl";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

interface FormSectionProps {
  formInfo: FormInfo[];
}

export const FormSectionFields = ({formInfo}: FormSectionProps) => {

  return (
      <Stack
        sx={{
          borderRadius: "10px",
          backgroundColor: "#dfdfdf",
          flexGrow:1,
          width:"100%", 
        }}
      >
        <Grid
          container
          direction="row"
          sx={{alignItems: "stretch", position: "relative",px:2, justifyContent:"space-between",  flexGrow:1,
 }}
        >
          {formInfo?.map((item:FormInfo, index: number) => {
            const { label } = item;
            const formLength = formInfo?.length - 1 || 0;

            return (
              <React.Fragment key={`field_${label}`}>
                <Grid
                  key={`formfield_${item.name}`}
                  size={item.flex}
                  sx={{ py: 1, flexGrow:1, width:"100%"}}
                >
                  <Stack sx={{justifyContent:"space-evenly"}}>
                  {item.fieldType != "dropDown" && <Typography sx={{ fontWeight: 700 }}>{item.label}</Typography>}
                  <FieldControl fieldItems={item} />
                  </Stack>
                </Grid>
                {index < formLength ? <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "flex" } }} /> : ""}
              </React.Fragment>
            );
          })}
        </Grid>
      </Stack>
  );
};
