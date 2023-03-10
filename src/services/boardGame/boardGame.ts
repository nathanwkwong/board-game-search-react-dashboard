import queryString from "query-string";

import axiosConfig from "../../axios/axiosConfig";
import {
  GetBoardGameListParams,
  GetBoardGameListResponse,
  GetGameCategoriesResponse,
  GetGameVideosParams,
  GetGameVideosResponse,
} from "./boardGame.interface";

const clientId = import.meta.env.VITE_BOARD_GAME_CLIENT_ID;

const boardGame = {
  getBoardGames: (params: GetBoardGameListParams) => {
    const { exact, ...apiParams } = params;

    let querystring = queryString.stringify({
      ...apiParams,
      ...(exact === "yes" && {
        exact: true,
      }),
    });

    return axiosConfig.get<GetBoardGameListResponse>(
      `/search?client_id=${clientId}&${querystring}`
    );
  },
  getGameVideos: (params: GetGameVideosParams) => {
    let querystring = queryString.stringify(params);
    return axiosConfig.get<GetGameVideosResponse>(
      `/game/videos?client_id=${clientId}&${querystring}`
    );
  },
  getGameCategories: () => {
    return axiosConfig.get<GetGameCategoriesResponse>(
      `/game/categories?client_id=${clientId}`
    );
  },
};

export default boardGame;
