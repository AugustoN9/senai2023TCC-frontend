import React from "react";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

const FormUI = () => {
  return (
    <div>
      <form>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid container xs="12" spacing="1">
            <Grid item>
              <TextField name="Field1" value="Field1" />
            </Grid>
            <Grid item>
              <TextField name="Field2" value="Field2" />
            </Grid>
            <Grid item>
              <TextField name="Field3" value="Field3" />
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={4} sm={4}>
              <TextField
                fullWidth
                multiline
                value="Field1"
                label="Multiline"
                rows="6"
                defaultValue="Default Value"
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <Grid container>
                <Grid item>
                  <TextField name="Popup_A1" fullWidth select />
                </Grid>
                <Grid item>
                  <TextField name="Popup_A2" fullWidth select />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <TextField name="Popup_A1" fullWidth select />
                </Grid>
                <Grid item>
                  <TextField name="Popup_A2" fullWidth select />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <TextField name="Popup_A1" fullWidth select />
                </Grid>
                <Grid item>
                  <TextField name="Popup_A2" fullWidth select />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormUI;
