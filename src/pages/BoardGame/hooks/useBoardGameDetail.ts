import { useCallback } from "react";

import { useQuery } from "@tanstack/react-query";
import { debounce, isString } from "lodash";

import { API_STALE_TIME } from "constants/api";

import API from "services";

const useBoardGameDetail = ({
  id,
  random = false,
}: {
  id?: string;
  random?: boolean;
}) => {
  const { isLoading, isFetching, data, refetch } = useQuery(
    ["boardGameDetail", id],
    () => API.boardGame.getBoardGames({ ids: [id || ""], random }),
    {
      enabled: random || isString(id),
      staleTime: random ? 0 : API_STALE_TIME,
      refetchOnWindowFocus: false,
    }
  );

  const debouncedChangeHandler = useCallback(debounce(refetch, 300), []);

  return {
    boardGame: isFetching ? undefined : data?.data?.games[0],
    isLoading,
    refetch: debouncedChangeHandler,
    isFetching,
  };
};

export default useBoardGameDetail;
