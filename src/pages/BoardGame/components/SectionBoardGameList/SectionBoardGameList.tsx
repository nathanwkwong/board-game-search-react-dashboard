import { Box } from "@mui/material";

import FilterGroupBoardGame from "../FilterGroupBoardGame/FilterGroupBoardGame";
import ListBoardGame from "../ListBoardGame/ListBoardGame";
import "./SectionBoardGameList.scss";

const SectionBoardGameList = () => {
  return (
    <Box className="SectionBoardGameList">
      <Box className="filterWrapper">
        <FilterGroupBoardGame />
      </Box>
      <Box className="listBoardGameWrapper">
        <ListBoardGame />
      </Box>
    </Box>
  );
};

export default SectionBoardGameList;
