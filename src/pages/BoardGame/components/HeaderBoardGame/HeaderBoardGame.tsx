import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { isEmpty } from "lodash";

import { BoardGame } from "@/interfaces/boardGame.interface";

import "./HeaderBoardGame.scss";

type HeaderBoardGameProps = {
  boardGame?: BoardGame;
};

const HeaderBoardGame = ({ boardGame }: HeaderBoardGameProps) => {
  const { name, thumb_url, year_published } = boardGame || {};

  return (
    <Box className="headerBoardGame">
      {isEmpty(thumb_url) ? (
        <Box className="imageHolder" />
      ) : (
        <img alt={`${name}-icon`} src={thumb_url} className="boardGameImg" />
      )}
      <Typography component="h1" className="nameTxt">
        {name || "---"} {year_published ? `(${year_published})` : ""}
      </Typography>
    </Box>
  );
};

export default HeaderBoardGame;
