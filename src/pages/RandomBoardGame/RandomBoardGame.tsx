import { Box } from "@mui/material";

import "./RandomBoardGame.scss";
import SectionRandomGameDetail from "./components/SectionRandomGameDetail/SectionRandomGameDetail";

const RandomBoardGame = () => {
  return (
    <Box className="pageRandomBoardGameWrapper">
      <SectionRandomGameDetail />
    </Box>
  );
};

export default RandomBoardGame;
