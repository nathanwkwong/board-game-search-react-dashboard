import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import AppFooter from "components/AppFooter/AppFooter";

import useBoardGameDetail from "../../hooks/useBoardGameDetail";
import CardBoardGameInfo from "../CardBoardGameInfo/CardBoardGameInfo";
import CardGameVideos from "../CardGameVideos/CardGameVideos";
import HeaderBoardGame from "../HeaderBoardGame/HeaderBoardGame";
import "./SectionBoardGameDetail.scss";

type SectionBoardGameDetailProps = {
  gameId: string;
};

const SectionBoardGameDetail = ({ gameId }: SectionBoardGameDetailProps) => {
  const { boardGame } = useBoardGameDetail({ id: gameId });

  return (
    <Box className="SectionBoardGameDetail">
      {boardGame?.id ? (
        <>
          <HeaderBoardGame boardGame={boardGame} />
          <Box className="sectionContentWrapper">
            <CardBoardGameInfo boardGame={boardGame} />
            <CardGameVideos gameId={String(boardGame?.id || "")} />
          </Box>
        </>
      ) : (
        <Box className="noBoardGameWrapper">
          <Typography component="h1">
            Please select a board game to show more details
          </Typography>
        </Box>
      )}
      <AppFooter />
    </Box>
  );
};

export default SectionBoardGameDetail;
