import {
  Box,
  Button,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import SelectField from "components/SelectField/SelectField";
import {
  initialFilterValues,
  usePageBoardGame,
} from "pages/BoardGame/utils/Provider/Provider";

import { ExactOption } from "../../utils/Provider/Provider.interface";
import "./FilterGroupBoardGame.scss";
import { exactOptions } from "./constants";

const FilterGroupBoardGame = () => {
  const { filterValues, setFilterValues } = usePageBoardGame();

  const handleSearchTxtChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFilterValues({
      ...filterValues,
      name: event.target.value,
    });
  };

  const handleExactChange = (event: SelectChangeEvent<string>): void => {
    setFilterValues({
      ...filterValues,
      exact: event.target.value as ExactOption,
    });
  };

  const handleMinAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFilterValues({
      ...filterValues,
      gt_min_age: Number(event.target.value),
    });
  };

  const resetFilter = (): void => {
    setFilterValues(initialFilterValues);
  };

  const { name, exact, gt_min_age } = filterValues;

  return (
    <Box className="FilterGroupBoardGame">
      <Typography component="h2" className="filterTitle">
        Search for Board Games
      </Typography>
      <TextField
        placeholder="Search Board Game Name"
        value={name}
        onChange={handleSearchTxtChange}
        className="textFieldBoardGames"
      />
      <Box className="selectFieldGroup">
        <SelectField
          handleChange={handleExactChange}
          valueList={exactOptions}
          value={exact || "no"}
          label="Exact"
          className="selectFieldStatus"
        />

        <TextField
          onChange={handleMinAgeChange}
          value={gt_min_age}
          type="number"
          label="Min Age"
          className="selectFieldGender"
        />

        <Button variant="contained" onClick={resetFilter} className="btnReset">
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default FilterGroupBoardGame;
