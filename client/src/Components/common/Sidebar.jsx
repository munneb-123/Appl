import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";


const Sidebar = () => {
  const CustomizedListItem = styled(ListItem)({
    color: "black",
  });
  const CustomizedListItemText = styled(ListItemText)({
    textAlign: "center",
  });
  return (
    <>
      <List sx={{ mt: 10 }}>
        <CustomizedListItem disablePadding component={NavLink} to="/">
          <ListItemButton>
            <CustomizedListItemText primary="Home" />
          </ListItemButton>
        </CustomizedListItem>
        <CustomizedListItem disablePadding component={NavLink} to="/All_Products">
          <ListItemButton>
            <CustomizedListItemText primary="All Products" />
          </ListItemButton>
        </CustomizedListItem>
        <CustomizedListItem disablePadding component={NavLink} to="/Add_Product">
          <ListItemButton>
            <CustomizedListItemText primary="Add Product" />
          </ListItemButton>
        </CustomizedListItem>
      </List>
    </>
  );
};

export default Sidebar;
