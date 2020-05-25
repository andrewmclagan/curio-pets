import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

const Item = () => (
  <Box paddingBottom={3}>
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Skeleton variant="circle" width={40} height={40} />
      </Grid>
      <Grid item xs={10}>
        <Skeleton variant="text" />
      </Grid>
    </Grid>
  </Box>
);

const PetsListSuspense = () => {
  return (
    <Box paddingTop={4}>
      <Item />
      <Item />
      <Item />
    </Box>
  );
};

export default PetsListSuspense;
