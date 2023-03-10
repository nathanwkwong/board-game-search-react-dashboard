export type BoardGame = {
  id: number;
  name: string;
  thumb_url: string;
  description_preview: string;
  players: string;
  min_players: number;
  max_players: number;
  max_playtime: number;
  min_playtime: number;
  primary_publisher: {
    name: string;
  };
  primary_designer: {
    name: string;
  };
  year_published: number;
};
