import React from "react";
import { List, Typography, Divider } from "@material-ui/core";
import PetsListItem from "../PetsListItem";
import * as sorters from "../../lib/sorters";
import * as filters from "../../lib/filters";
import Loading from "./Loading";

const PetsList = ({ title, pets, species }) => {
  let values = pets.sort(sorters.alpha("name"));

  if (species) {
    values = values.filter(filters.species(species));
  }

  return (
    <>
      <Typography variant="h6" color="primary" align="center" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {pets.length < 1 && <Loading />}
      {pets.length > 0 && (
        <List aria-label="main pets">
          {pets.map((pet, index) => (
            <PetsListItem {...pet} key={index} />
          ))}
        </List>
      )}
    </>
  );
};

PetsList.defaultProps = {
  title: "",
  pets: [],
  species: undefined,
};

export default PetsList;
