import { useMemo } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import { BoardGame } from "interfaces/boardGame.interface";
import { isNil } from "lodash";

import { FilterValues } from "pages/BoardGame/utils/Provider/Provider.interface";

import useDebounceValue from "hooks/useDebounceValue";

import API from "services";

import { API_DEBOUNCE_TIME } from "../../../constants/api";
import { usePageBoardGame } from "../utils/Provider/Provider";

const PAGE_LIMIT = 20;
const useBoardGameList = () => {
  const { filterValues } = usePageBoardGame();
  const debouncedFilterValues = useDebounceValue<FilterValues>(
    filterValues,
    API_DEBOUNCE_TIME
  );

  const { fetchNextPage, hasNextPage, data } = useInfiniteQuery({
    queryKey: ["boardGameList", JSON.stringify(debouncedFilterValues)],
    queryFn: ({ pageParam = 0 }) => {
      return API.boardGame.getBoardGames({
        ...debouncedFilterValues,
        limit: PAGE_LIMIT,
        skip: pageParam,
      });
    },
    getNextPageParam: (lastPage, pages) => {
      const { count } = lastPage?.data || {};
      const currPage = pages.length;

      let nexSkip = currPage * PAGE_LIMIT;
      return nexSkip > count ? undefined : nexSkip;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  const boardGames: BoardGame[] = useMemo(
    () => data?.pages.flatMap((page) => page?.data?.games) || [],
    [data]
  );

  return {
    boardGames,
    fetchNextPage,
    hasMore: hasNextPage,
  };
};

export default useBoardGameList;
