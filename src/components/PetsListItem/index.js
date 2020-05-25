import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PetsIcon from "@material-ui/icons/Pets";

const PetsListItem = ({ name }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <PetsIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default PetsListItem;
