import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ff7043" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <NavLink to="/">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Typography variant="h6">Home</Typography>
              </Button>
            </NavLink>
            <NavLink to="/list">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Typography variant="h6">Notes</Typography>
              </Button>
            </NavLink>
          </Box>
          <Avatar sx={{ bgcolor: deepOrange[500] }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
