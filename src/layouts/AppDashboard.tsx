import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/system";

import RandomBoardGame from "@/pages/RandomBoardGame/RandomBoardGame";

import AppNavBar from "components/AppNavBar/AppNavBar";
import BoardGame from "pages/BoardGame/BoardGame";
import Home from "pages/Home/Home";

import "./AppDashboard.scss";

const AppDashboard = () => {
  return (
    <Box className="dashboardWrapper">
      <AppNavBar />
      <Box className="contentWrapper">
        <Routes>
          <Route key={`route-home`} path="/" element={<Home />} />
          <Route
            key={`route-board-game`}
            path="/boardgame"
            element={<BoardGame />}
          />
          <Route
            key={`route-board-game-detail`}
            path="/boardgame/:id"
            element={<BoardGame />}
          />
          <Route
            key={`route-board-game-detail`}
            path="/random-boardgame"
            element={<RandomBoardGame />}
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default AppDashboard;
