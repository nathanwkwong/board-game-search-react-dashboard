import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import "./BoardGame.scss";
import SectionBoardGameDetail from "./components/SectionBoardGameDetail/SectionBoardGameDetail";
import SectionBoardGameList from "./components/SectionBoardGameList/SectionBoardGameList";
import PageBoardGameProvider from "./utils/Provider/Provider";

const BoardGame = () => {
  const { id = "" } = useParams();
  return (
    <PageBoardGameProvider>
      <Box className="pageBoardGameWrapper">
        <SectionBoardGameList />
        <SectionBoardGameDetail gameId={id} />
      </Box>
    </PageBoardGameProvider>
  );
};

export default BoardGame;
