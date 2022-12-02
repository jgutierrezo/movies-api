import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";

const AddMovie = () => {
  return (
    <>
      <Card style={{ maxWidth: 700, margin: "50px auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add a Movie
          </Typography>
          <form action="">
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Title"
                  placeholder="Enter title"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Year"
                  type="number"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  placeholder="Enter the year"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Awards:
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Wins"
                  type="number"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  placeholder="Enter number of prizes won"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Nominations"
                  type="number"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  placeholder="Enter the number of nominations"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item style={{ marginTop: ".5rem" }}>
                <TextField
                  label="Cast"
                  placeholder="Enter the cast members comma separated"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item style={{ marginTop: ".5rem" }}>
                <TextField
                  label="Directors"
                  placeholder="Enter the directors comma separated"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Plot"
                  placeholder="Enter the plot"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={12} item>
                <TextField
                  label="Full plot"
                  multiline
                  rows={4}
                  placeholder="Enter full plot"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddMovie;
