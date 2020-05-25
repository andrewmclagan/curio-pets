import React from "react";
import { usePetOwners } from "../lib/hooks";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "../components/Card";
import PetsList from "../components/PetsList";
import CreateOwnerForm from "../forms/CreateOwner";
import getPets from "../lib/getPets";
import * as filters from "../lib/filters";

const Home = () => {
  const { owners, addOwner } = usePetOwners();

  const femaleOwners = owners.filter(filters.gender("female"));

  const maleOwners = owners.filter(filters.gender("male"));

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Card>
            <PetsList
              title="Female"
              pets={getPets(femaleOwners)}
              species="cat"
            />
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <PetsList title="Male" pets={getPets(maleOwners)} species="cat" />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Add pet owner
            </Typography>
            <CreateOwnerForm create={addOwner} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
