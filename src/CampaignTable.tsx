import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { TableComponents, TableVirtuoso } from "react-virtuoso";
import { CampaignData, CanBePercent, ColumnData } from "./data";
import { calculatePercentage } from "./utils";

const VirtuosoComponents: TableComponents<CampaignData> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function headerContent(
  handleSortClick: (column: keyof CampaignData) => void,
  orderBy?: keyof CampaignData,
  dir?: "asc" | "desc",
  numericRep?: "number" | "percentage"
) {
  return (
    <TableRow>
      {ColumnData.map((column) => (
        <TableCell
          className="campaign-table-header-cell"
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width, fontWeight: "bold" }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <TableSortLabel
            active={column.dataKey === orderBy}
            direction={dir}
            onClick={() => handleSortClick(column.dataKey)}
          >
            {CanBePercent.has(column.dataKey) && numericRep === "percentage"
              ? `${column.label} Rate`
              : column.label}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(
  _index: number,
  row: CampaignData,
  numbericRep: "number" | "percentage"
) {
  return (
    <React.Fragment>
      {ColumnData.map((column) => {
        let colVal = row[column.dataKey];
        if (CanBePercent.has(column.dataKey) && numbericRep === "percentage") {
          if (row.sent < 1) {
            colVal = "0%";
          } else {
            colVal = `${calculatePercentage(
              row[column.dataKey] as number,
              row.sent
            )}%`;
          }
        }
        return (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? "right" : "left"}
          >
            {colVal}
          </TableCell>
        );
      })}
    </React.Fragment>
  );
}

export const CampaignTable: React.FC<{
  data: CampaignData[];
  orderedBy?: keyof CampaignData;
  orderedDir?: "asc" | "desc";
  handleSortClick: (column: keyof CampaignData) => void;
  numericRep: "number" | "percentage";
}> = (props) => (
  <Paper style={{ height: 500, width: "100%" }}>
    <TableVirtuoso
      className="campaign-table"
      data={props.data}
      components={VirtuosoComponents}
      fixedHeaderContent={() =>
        headerContent(
          props.handleSortClick,
          props.orderedBy,
          props.orderedDir,
          props.numericRep
        )
      }
      itemContent={(idx, row: CampaignData) =>
        rowContent(idx, row, props.numericRep)
      }
    />
  </Paper>
);
