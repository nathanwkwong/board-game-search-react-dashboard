import { Box, Typography } from "@mui/material";
import cx from "classnames";

import "./AppCard.scss";

type AppCardProps = {
  title: string;
  className: string;
  children: React.ReactNode;
};

const AppCard = ({ title = "", className = "", children }: AppCardProps) => {
  return (
    <Box className={cx(["card", className])}>
      <Box className="cardHeader">
        <Typography component="h1" className="titleTxt">
          {title}
        </Typography>
      </Box>
      <Box className="cardContent">{children}</Box>
    </Box>
  );
};

export default AppCard;
