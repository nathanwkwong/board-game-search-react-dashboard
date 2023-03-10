import { createContext, useContext, useState } from "react";

import {
  FilterValues,
  PageBoardGameContext,
  PageBoardGameProviderProps,
} from "./Provider.interface";

export const initialFilterValues: FilterValues = {
  name: "",
  exact: "no",
  gt_min_age: 8,
};

export const BoardGameContext = createContext<PageBoardGameContext>(
  {} as PageBoardGameContext
);

const PageBoardGameProvider = ({ children }: PageBoardGameProviderProps) => {
  const [filterValues, setFilterValues] =
    useState<FilterValues>(initialFilterValues);

  const contextValue: PageBoardGameContext = {
    filterValues,
    setFilterValues,
  };

  return (
    <BoardGameContext.Provider value={contextValue}>
      {children}
    </BoardGameContext.Provider>
  );
};

export default PageBoardGameProvider;

export const usePageBoardGame = () =>
  useContext(BoardGameContext) as PageBoardGameContext;
