import React from "react";
import { Field, FieldArray } from "formik";
import { Grid, MenuItem, Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextField } from "formik-material-ui";

const PetsField = ({ pets = [] }) => {
  return (
    <FieldArray
      name="pets"
      render={(arrayHelpers) => (
        <>
          {pets &&
            pets.map((pet, index) => (
              <Grid container spacing={4} key={index}>
                <Grid item md={6} xs={12}>
                  <Field
                    component={TextField}
                    name={`pets.${index}.name`}
                    label="Pet name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item md={5} xs={12}>
                  <Field
                    component={TextField}
                    type="text"
                    name={`pets.${index}.type`}
                    label="Pet species"
                    select
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    <MenuItem value="cat">Cat</MenuItem>
                    <MenuItem value="dog">Dog</MenuItem>
                  </Field>
                </Grid>
                <Grid item md={1} xs={12}>
                  <IconButton onClick={() => arrayHelpers.remove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          <Grid container spacing={4}>
            <Grid item md={3} xs={12}>
              <Button
                fullWidth
                size="small"
                startIcon={<AddIcon />}
                disableElevation
                variant="contained"
                onClick={() => arrayHelpers.push({ name: "", type: "cat" })}
              >
                Add pet
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    />
  );
};

export default PetsField;
