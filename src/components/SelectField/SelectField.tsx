import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type SelectFieldProps = {
  handleChange: (event: SelectChangeEvent<string>) => void;
  valueList: string[];
  value: string;
  label: string;
  className?: string;
};

const SelectField = ({
  handleChange,
  value = "",
  label,
  valueList,
  className,
}: SelectFieldProps) => {
  return (
    <Box className={className}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {valueList.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
