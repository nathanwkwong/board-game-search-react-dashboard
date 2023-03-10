export type ExactOption = "yes" | "no";

export type PageBoardGameProviderProps = { children: React.ReactNode };

export type FilterValues = {
  name?: string;
  exact?: ExactOption;
  gt_min_age?: number;
  random?: boolean;
  ids?: string[];
  limit?: number;
  skip?: number;
};

export type PageBoardGameContext = {
  filterValues: FilterValues;
  setFilterValues: React.Dispatch<React.SetStateAction<FilterValues>>;
};
