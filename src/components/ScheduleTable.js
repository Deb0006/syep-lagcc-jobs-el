import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const ScheduleTable = ({ schedule }) => {
    if (!schedule) {
      return <p>N/A</p>;
    }
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {days.map((day) => (
              <TableCell
                align="center"
                padding="checkbox"
                key={day}
                sx={{ fontWeight: "bold", fontSize: "0.875rem" }}
              >
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {schedule.map((scheduleData, index) => (
              <TableCell
                align="center"
                padding="checkbox"
                key={days[index]}
                sx={{ fontSize: "0.75rem" }}
              >
                {scheduleData.Start}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {schedule.map((scheduleData, index) => (
              <TableCell
                align="center"
                padding="checkbox"
                key={days[index]}
                sx={{ fontSize: "0.75rem" }}
              >
                {scheduleData.End}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;