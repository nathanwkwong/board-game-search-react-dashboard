import { Box, Button } from "@mui/material";

import CardBoardGameInfo from "@/pages/BoardGame/components/CardBoardGameInfo/CardBoardGameInfo";
import CardGameVideos from "@/pages/BoardGame/components/CardGameVideos/CardGameVideos";
import HeaderBoardGame from "@/pages/BoardGame/components/HeaderBoardGame/HeaderBoardGame";
import useBoardGameDetail from "@/pages/BoardGame/hooks/useBoardGameDetail";

import AppFooter from "components/AppFooter/AppFooter";

import "./SectionRandomGameDetail.scss";

const SectionBoardGameDetail = () => {
  const { boardGame, refetch, isFetching } = useBoardGameDetail({
    random: true,
  });

  return (
    <Box className="sectionRandomGameDetail">
      <Button
        className="btnNext"
        disabled={isFetching}
        onClick={() => refetch()}
      >
        next
      </Button>
      <HeaderBoardGame boardGame={boardGame} />
      <Box className="sectionContentWrapper">
        <CardBoardGameInfo boardGame={boardGame} />
        <CardGameVideos gameId={String(boardGame?.id || "")} />
      </Box>
      <AppFooter />
    </Box>
  );
};

export default SectionBoardGameDetail;
