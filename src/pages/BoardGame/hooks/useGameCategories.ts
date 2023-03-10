import { useQuery } from "@tanstack/react-query";

import { API_STALE_TIME } from "constants/api";

import API from "services";

const useGameCategories = () => {
  const { isLoading, data } = useQuery(
    ["gameVideos"],
    () => API.boardGame.getGameCategories(),
    { staleTime: API_STALE_TIME }
  );
  return {
    categories: data?.data?.categories,
    isLoading,
  };
};

export default useGameCategories;
