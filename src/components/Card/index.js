import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import BaseCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    padding: 12,
    boxShadow: "4px 4px 10px 0px rgba(0,0,0,0.16)",
  },
  subtitle: {
    marginBottom: "1em",
  },
});

const Card = ({ children, className, ...props }) => {
  const classes = useStyles();
  return (
    <BaseCard square className={clsx(className, classes.root)} {...props}>
      <CardContent>{children}</CardContent>
    </BaseCard>
  );
};

export default Card;
