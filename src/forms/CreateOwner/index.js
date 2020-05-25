import React from "react";
import { Formik, Form, Field } from "formik";
import { Grid, MenuItem, Button, Typography, Divider } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import PetsFeild from "./PetsField";
import errorHandler from "./errorHandler";
import schema from "./schema";

const CreateOwnerForm = ({ create }) => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: "",
        gender: "female",
        age: "",
        pets: [],
      }}
      onSubmit={(values, form) =>
        create(values)
          .then(() => form.resetForm())
          .catch((error) => errorHandler(error, form))
      }
    >
      {({ values, status: error }) => (
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="name"
                label="Owner name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="age"
                label="Owner age"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                type="text"
                name="gender"
                label="Owner gender"
                select
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary">
                Pets
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <PetsFeild pets={values.pets} />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Button
                color="primary"
                type="submit"
                size="large"
                variant="contained"
                fullWidth
                disableElevation
              >
                Create
              </Button>
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Divider />
                <pre>
                  <Typography color="error" variant="body2">
                    {JSON.stringify(error)}
                  </Typography>
                </pre>
              </Grid>
            )}
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default CreateOwnerForm;
