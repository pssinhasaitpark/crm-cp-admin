import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Mail,
  Work,
  Group,
  Description,
  Person,
  BeachAccess,
  ReceiptLong,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Messages",
    count: 4,
    icon: <Mail sx={{ fontSize: 100, color: "#000" }} />,
    color: "#FFD400",
    path: "/messages",
  },
  {
    id: 2,
    title: "Jobs",
    count: 1,
    icon: <Work sx={{ fontSize: 100 }} />,
    color: "#3F3DFF",
    path: "/jobs",
  },
  {
    id: 3,
    title: "Candidates",
    count: 30,
    icon: <Group sx={{ fontSize: 100 }} />,
    color: "#4CAF50",
    path: "/candidates",
  },
  {
    id: 4,
    title: "Resumes",
    count: 2,
    icon: <Description sx={{ fontSize: 100 }} />,
    color: "#2B2B2B",
    path: "/resumes",
  },
  {
    id: 5,
    title: "Employee",
    count: 4,
    icon: <Person sx={{ fontSize: 100, color: "#000" }} />,
    color: "rgb(255, 153, 0)",
    path: "/employees",
  },
  {
    id: 6,
    title: "Leaves",
    count: 4,
    icon: <BeachAccess sx={{ fontSize: 100, color: "#000" }} />,
    color: "#4DD0E1",
    path: "/leaves",
  },
  {
    id: 7,
    title: "Payroll",
    count: 4,
    icon: <ReceiptLong sx={{ fontSize: 100, color: "#000" }} />,
    color: "#009688",
    path: "/payroll",
  },
];

const DashboardCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        // gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 2,
      }}
    >
      {cards.map((card) => (
        <Link key={card.id} to={card.path} style={{ textDecoration: "none" }}>
          <Card
            sx={{
              backgroundColor: card.color,
              color: "#fff",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: 2,
              boxShadow: 3,
              px: "10px",
              py: "40px",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
              },
            }}
          >
            <Box>{card.icon}</Box>
            <Box>
              <Typography variant="h2" fontWeight="bold">
                {card.count}
              </Typography>
              <Typography variant="subtitle2">{card.title}</Typography>
            </Box>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default DashboardCards;
