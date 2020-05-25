import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: {
    marginTop: 50,
    color: "white",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" className={classes.title}>
            Curio
            <Box fontWeight={400} component="span">
              Pets
            </Box>
          </Typography>
        </Grid>
        <Grid item md={2} />
        <Grid item md={8} xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} />
      </Grid>
    </Container>
  );
};

export default Layout;
