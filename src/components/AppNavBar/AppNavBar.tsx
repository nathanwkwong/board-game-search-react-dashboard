import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import AppFooter from "../AppFooter/AppFooter";
import "./AppNavBar.scss";

const AppNavBar = () => {
  return (
    <Box className="appNavBarWrapper">
      <Link to={"/"} className="homeLink">
        <Typography className="navHeaderTxt" component="h1">
          Board Game
        </Typography>
      </Link>
      <Box className="navMenu">
        <Link to={"/boardgame"}>Search</Link>
        <Link to={"/random-boardgame"}>Find Some Pearls!</Link>
      </Box>
    </Box>
  );
};

export default AppNavBar;
