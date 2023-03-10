import { Button, Link } from "@mui/material";

import { GameVideo } from "services/boardGame/boardGame.interface";

type TableColInfo = {
  field: keyof GameVideo;
  label: string;
  renderCell?: (videos: GameVideo) => JSX.Element;
};

export const tableInfos: TableColInfo[] = [
  {
    field: "title",
    label: "Title",
  },
  {
    field: "channel_name",
    label: "Channel",
  },
  {
    field: "url",
    label: "Url",
    renderCell: (videos: GameVideo) => {
      return (
        <Button href={videos.url} target="_blank">
          watch
        </Button>
      );
    },
  },
];
