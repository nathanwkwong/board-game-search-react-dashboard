import InfiniteScroll from "react-infinite-scroller";

import { Box } from "@mui/material";
import { BoardGame } from "interfaces/boardGame.interface";

import useBoardGameList from "pages/BoardGame/hooks/useBoardGameList";

import CardBoardGame from "../CardBoardGame/CardBoardGame";

const ListBoardGame = () => {
  const { boardGames, fetchNextPage, hasMore } = useBoardGameList();

  return (
    <Box className="listBoardGame">
      <InfiniteScroll
        pageStart={0}
        loadMore={() => fetchNextPage()}
        hasMore={hasMore}
        loader={
          <div className="loader" key="loading">
            Loading ...
          </div>
        }
        useWindow={false}
      >
        {boardGames?.map((boardGame: BoardGame) => (
          <CardBoardGame boardGame={boardGame} key={boardGame.id} />
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export default ListBoardGame;
