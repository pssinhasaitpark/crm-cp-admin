import React from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Mail as MailIcon,
  Work as WorkIcon,
  Group as GroupIcon,
  Description as DescriptionIcon,
  Badge as BadgeIcon,
  MenuBook as MenuBookIcon,
  Assessment as AssessmentIcon,
  Paid as PaidIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from "@mui/icons-material";

// Constants
const navSections = (unreadMessages) => [
  {
    title: "Features",
    items: [
      { label: "Dashboard", path: "/", icon: <DashboardIcon /> },
      {
        label: "Messages",
        path: "/messages",
        icon: <MailIcon />,
        badge: unreadMessages,
      },
    ],
  },
  {
    title: "Recruitment",
    items: [
      { label: "Jobs", path: "/jobs", icon: <WorkIcon /> },
      {
        label: "Candidates",
        path: "/candidates",
        icon: <GroupIcon />,
      },
      {
        label: "Resumes",
        path: "/resumes",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    title: "Organization",
    items: [
      {
        label: "Employee Management",
        path: "/employees",
        icon: <BadgeIcon />,
      },
      {
        label: "Leave Management",
        path: "/leaves",
        icon: <MenuBookIcon />,
      },
      {
        label: "Performance Management",
        path: "/performance",
        icon: <AssessmentIcon />,
      },
    ],
  },
  // {
  //   title: "KRIS Pay",
  //   items: [
  //     {
  //       label: "Payroll Management",
  //       path: "/payroll",
  //       icon: <PaidIcon />,
  //     },
  //   ],
  // },
];

const UserInfo = ({ name, role, avatarUrl }) => (
  <Box p={2} textAlign="center">
    <Avatar
      src={avatarUrl}
      alt={name}
      sx={{ width: 64, height: 64, margin: "auto" }}
    />
    <Typography variant="subtitle1" mt={1}>
      {name}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {role}
    </Typography>
  </Box>
);

const Section = ({ title, items }) => (
  <Box sx={{ pt: 2 }}>
    <Typography variant="overline" sx={{ pl: 2, fontSize: "0.9rem" }}>
      {title}
    </Typography>
    {items.map(({ label, path, icon, badge }) => (
      <ListItem
        key={path}
        disablePadding
        component={NavLink}
        end 
        to={path}
        sx={{
          p: 1,
          my: 1,
          borderRadius: 2,
          "&.active": {
            backgroundColor: "#FFD400",
            color: "#000",
            fontWeight: "bold",
            "& .MuiListItemIcon-root": {
              color: "#000",
            },
            "& .MuiListItemText-primary": {
              color: "#000",
            },
          },
        }}
      >
        <ListItemIcon
          sx={{
            color: "white",
            minWidth: 46,
            fontSize: "1.8rem",
            "& svg": {
              fontSize: "1.8rem", 
            },
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={badge ? `${label} (${badge})` : label}
          primaryTypographyProps={{
            fontSize: "1.1rem",
            fontWeight: 500,
          }}
        />
      </ListItem>
    ))}
  </Box>
);

const LogoutButton = ({ onLogout }) => (
  <Box p={2} mt="auto">
    <Button
      variant="contained"
      color="error"
      fullWidth
      startIcon={<PowerSettingsNewIcon />}
      onClick={onLogout}
    >
      Log Out
    </Button>
  </Box>
);

const Sidebar = ({ user = {}, onLogout, unreadMessages = 0 }) => {
  const { name = "User", role = "", avatarUrl = "" } = user;

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 280,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 280,
          backgroundColor: "#1e85f1",
          color: "white",
          boxSizing: "border-box",
        },
      }}
    >
      {/* Sidebar Title */}
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          CRM 
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: "white" }} />

      <List sx={{ color: "white" }}>
        {navSections(unreadMessages).map((section) => (
          <Section key={section.title} {...section} />
        ))}
      </List>

      {/* <LogoutButton onLogout={onLogout} /> */}
    </Drawer>
  );
};
export default React.memo(Sidebar);
