import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ crumbs }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {crumbs.map((crumb, index) => (
        crumb.link ? (
          <Link key={index} to={crumb.link}>
            {crumb.label}
          </Link>
        ) : (
          <Typography key={index} color="text.primary">
            {crumb.label}
          </Typography>
        )
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
