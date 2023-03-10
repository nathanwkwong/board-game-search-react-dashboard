import { Box } from "@mui/material";

import { BoardGame } from "@/interfaces/boardGame.interface";

import AppCard from "components/AppCard/AppCard";
import InfoRow from "components/InfoRow/InfoRow";
import { Info } from "components/InfoRow/InfoRow.interface";

import "./CardBoardGameInfo.scss";

type CardBoardGameInfoProps = {
  boardGame?: BoardGame;
};

const CardBoardGameInfo = ({ boardGame }: CardBoardGameInfoProps) => {
  const {
    primary_publisher,
    primary_designer,
    players,
    min_playtime,
    max_playtime,
    description_preview,
  } = boardGame || {};

  const infoList: Info[] = [
    { name: "Publisher", value: primary_publisher?.name },
    { name: "Designer", value: primary_designer?.name },
    {
      name: "Player",
      value: players || "---",
    },
    {
      name: "Playtime",
      value:
        min_playtime && max_playtime
          ? `${min_playtime} - ${max_playtime} minutes`
          : "---",
    },
  ];

  return (
    <AppCard title="Info Details" className="cardBoardGameInfo">
      <Box className="infoList">
        {infoList.map((info) => (
          <InfoRow {...info} key={info.name} />
        ))}
      </Box>
      <Box className="descTxt">{description_preview}</Box>
    </AppCard>
  );
};

export default CardBoardGameInfo;
