import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { isEmpty } from "lodash";

import AppCard from "components/AppCard/AppCard";

import useGameVideos from "../../hooks/useGameVideos";
import "./CardGameVideos.scss";
import { tableInfos } from "./utils";

type CardGameVideosProps = {
  gameId: string;
};

const CardGameVideos = ({ gameId = "" }: CardGameVideosProps) => {
  const { gameVideos: rowsData } = useGameVideos(gameId);
  return (
    <AppCard title="Introduction Videos" className="CardGameVideos">
      {isEmpty(rowsData) ? (
        "---"
      ) : (
        <Box sx={{ width: "100%" }} className="tableWrapper">
          <TableContainer className="tableEpisode">
            <Table className="table">
              <TableHead className="tableHead">
                <TableRow className="tableHeadRow">
                  {tableInfos.map(({ field, label }) => (
                    <TableCell key={field} className="tableCellHead">
                      {label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className="tableBody">
                {rowsData?.map((rowData) => {
                  if (isEmpty(rowData)) return null;

                  return (
                    <TableRow key={rowData.id} className="tableRow">
                      {tableInfos.map(({ field, renderCell }, index) => (
                        <TableCell key={index} className="tableCellData">
                          {typeof renderCell === "function"
                            ? renderCell(rowData)
                            : rowData[field]}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </AppCard>
  );
};
export default CardGameVideos;
