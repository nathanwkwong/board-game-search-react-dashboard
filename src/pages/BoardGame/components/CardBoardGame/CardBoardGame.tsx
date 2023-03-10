import { useNavigate, useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import cx from "classnames";
import { BoardGame } from "interfaces/boardGame.interface";

import "./CardBoardGame.scss";

type CardBoardGameProps = {
  boardGame: BoardGame;
};

const CardBoardGame = ({ boardGame }: CardBoardGameProps) => {
  const navigate = useNavigate();
  const { id: idParam } = useParams();
  const { name, description_preview, id, thumb_url, year_published } =
    boardGame;

  const onClickCard = (): void => {
    navigate(`/boardgame/${id}`);
  };

  return (
    <Box
      onClick={onClickCard}
      className={cx([
        "boardGameWrapper",
        Number(idParam) === id && "selectedBoardGame",
      ])}
    >
      <img alt={`${name}-icon`} src={thumb_url} className="boardGameImg" />
      <Box className="cardRightWrapper">
        <Typography component="h4" className="nameTxt">
          {name} {year_published ? `(${year_published})` : ""}
        </Typography>
        <Typography component="h4" className="speciesTxt">
          {description_preview.split(".")[0]}.
          {description_preview.split(".")[1]}.
        </Typography>
      </Box>
    </Box>
  );
};

export default CardBoardGame;
