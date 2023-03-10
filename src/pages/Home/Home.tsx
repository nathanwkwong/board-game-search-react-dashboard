import { Box, Typography } from "@mui/material";

import "./Home.scss";

const Home = () => {
  return (
    <Box className="pageHomeWrapper">
      <Typography component="h1" className="welcomeTxt">
        Welcome to the Board Game Catalog
      </Typography>
    </Box>
  );
};

export default Home;
