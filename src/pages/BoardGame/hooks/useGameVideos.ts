import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";

import { API_STALE_TIME } from "constants/api";

import API from "services";

const useGameVideos = (gameId: string) => {
  const { isLoading, data } = useQuery(
    ["gameVideos", gameId],
    () => API.boardGame.getGameVideos({ game_id: gameId as string }),
    { enabled: !isEmpty(gameId), staleTime: API_STALE_TIME }
  );
  return {
    gameVideos: data?.data?.videos,
    isLoading,
  };
};

export default useGameVideos;
