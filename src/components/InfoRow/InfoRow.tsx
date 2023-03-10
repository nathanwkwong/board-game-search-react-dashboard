import { Box } from "@mui/material";

import { Info } from "./InfoRow.interface";
import "./InfoRow.scss";

type InfoRowProps = Info;

const InfoRow = ({ name = "---", value = "---" }: InfoRowProps) => {
  return (
    <Box className="infoRow">
      <span className="nameTxt">{name}: </span>
      <span className="valueTxt">{value}</span>
    </Box>
  );
};

export default InfoRow;
