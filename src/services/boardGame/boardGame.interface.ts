import { BoardGame } from "interfaces/boardGame.interface";

import { FilterValues } from "pages/BoardGame/utils/Provider/Provider.interface";

type PageParams = {};

export type GameVideo = {
  id: number;
  title: string;
  channel_name: string;
  url: string;
};

export type GameCategory = {
  id: number;
  name: string;
};

export type GetBoardGameListParams = FilterValues;

export type GetBoardGameListResponse = {
  count: number;
  games: BoardGame[];
};

export type GetGameVideosParams = {
  game_id: string;
};

export type GetGameVideosResponse = {
  videos: GameVideo[];
};

export type GetGameCategoriesResponse = {
  categories: GameCategory[];
};
