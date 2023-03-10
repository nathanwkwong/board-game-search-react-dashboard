import { format } from "date-fns";

import { DATE_FORMAT } from "constants/dateFormats";

export const unixToDateString = (
  dateUnix: string | undefined,
  dateFormat: string = DATE_FORMAT.yMd
): string => {
  return dateUnix ? format(new Date(dateUnix), dateFormat) : "---";
};
