import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  Paper,
  InputAdornment,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

import LayoutHOC from "../HOC/WithLayout";

function Reports() {
  const [fromDate, setFromDate] = React.useState(dayjs("2025-07-12"));
  const [toDate, setToDate] = React.useState(dayjs("2026-07-12"));

  // Open states for datepickers
  const [openFrom, setOpenFrom] = React.useState(false);
  const [openTo, setOpenTo] = React.useState(false);

  const [selectedReport, setSelectedReport] = React.useState("Life Declaration Table");

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }}>
        {/* Outer Card */}
        <Box
          sx={{
            background: "white",
            p: 3,
            borderRadius: "6px",
            border: "1px solid #e3e6ea",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: 700,
              mb: 3,
              textAlign: "left",
            }}
          >
            Log Table
          </Typography>

          {/* Dropdown */}
          <TextField
            fullWidth
            select
            value={selectedReport}
            onChange={handleReportChange}
            sx={{
              mb: 4,
              "& .MuiOutlinedInput-root": {
                borderRadius: "6px",
                background: "#f8fafc",
                width: "500px",
                textAlign: "left",
              },
            }}
            SelectProps={{
              IconComponent: KeyboardArrowDownIcon,
            }}
          >
            <MenuItem
              value="Life Declaration Table"
              sx={{
                textAlign: "left",
                bgcolor: selectedReport === "Life Declaration Table" ? "#cd853f" : "inherit",
                color: selectedReport === "Life Declaration Table" ? "white" : "inherit",
                "&:hover": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
                "&:focus": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
              }}
            >
              {selectedReport === "Life Declaration Table" && (
                <CheckIcon sx={{ mr: 1, color: "white" }} />
              )}
              Life Declaration Table
            </MenuItem>
            <MenuItem
              value="User Activity Logs"
              sx={{
                textAlign: "left",
                bgcolor: selectedReport === "User Activity Logs" ? "#cd853f" : "inherit",
                color: selectedReport === "User Activity Logs" ? "white" : "inherit",
                "&:hover": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
                "&:focus": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
              }}
            >
              {selectedReport === "User Activity Logs" && (
                <CheckIcon sx={{ mr: 1, color: "white" }} />
              )}
              User Activity Logs
            </MenuItem>
            <MenuItem
              value="Admin Activity Logs"
              sx={{
                textAlign: "left",
                bgcolor: selectedReport === "Admin Activity Logs" ? "#cd853f" : "inherit",
                color: selectedReport === "Admin Activity Logs" ? "white" : "inherit",
                "&:hover": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
                "&:focus": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
              }}
            >
              {selectedReport === "Admin Activity Logs" && (
                <CheckIcon sx={{ mr: 1, color: "white" }} />
              )}
              Admin Activity Logs
            </MenuItem>
            <MenuItem
              value="Transaction Logs"
              sx={{
                textAlign: "left",
                bgcolor: selectedReport === "Transaction Logs" ? "#cd853f" : "inherit",
                color: selectedReport === "Transaction Logs" ? "white" : "inherit",
                "&:hover": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
                "&:focus": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
              }}
            >
              {selectedReport === "Transaction Logs" && (
                <CheckIcon sx={{ mr: 1, color: "white" }} />
              )}
              Transaction Logs
            </MenuItem>
            <MenuItem
              value="System Logs"
              sx={{
                textAlign: "left",
                bgcolor: selectedReport === "System Logs" ? "#cd853f" : "inherit",
                color: selectedReport === "System Logs" ? "white" : "inherit",
                "&:hover": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
                "&:focus": {
                  bgcolor: "#cd853f",
                  color: "white",
                },
              }}
            >
              {selectedReport === "System Logs" && (
                <CheckIcon sx={{ mr: 1, color: "white" }} />
              )}
              System Logs
            </MenuItem>
          </TextField>

          {/* Dates Row */}
          <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
            {/* FROM DATE */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", mb: 1, textAlign: "left" }}>
                From
              </Typography>

              <DatePicker
                value={fromDate}
                onChange={(newValue) => setFromDate(newValue)}
                open={openFrom}
                onOpen={() => setOpenFrom(true)}
                onClose={() => setOpenFrom(false)}
                enableAccessibleFieldDOMStructure={false}
                slots={{ textField: TextField }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    onClick: () => setOpenFrom(true),
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "6px",
                        background: "#f8fafc",
                      },
                    },
                    InputProps: {
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={() => setOpenFrom(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <CalendarMonthIcon sx={{ color: "#6b7280" }} />
                        </InputAdornment>
                      ),
                    },
                  },
                }}
              />
            </Box>

            {/* TO DATE */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", mb: 1, textAlign: "left" }}>
                To
              </Typography>

              <DatePicker
                value={toDate}
                onChange={(newValue) => setToDate(newValue)}
                open={openTo}
                onOpen={() => setOpenTo(true)}
                onClose={() => setOpenTo(false)}
                enableAccessibleFieldDOMStructure={false}
                slots={{ textField: TextField }}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    onClick: () => setOpenTo(true),
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "6px",
                        background: "#f8fafc",
                      },
                    },
                    InputProps: {
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          onClick={() => setOpenTo(true)}
                          style={{ cursor: "pointer" }}
                        >
                          <CalendarMonthIcon sx={{ color: "#6b7280" }} />
                        </InputAdornment>
                      ),
                    },
                  },
                }}
              />
            </Box>

            {/* EXPORT BUTTON */}
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Button
                variant="contained"
                sx={{
                  height: "48px",
                  background: "#4a89c7",
                  textTransform: "none",
                  px: 4,
                  fontSize: "16px",
                  fontWeight: 600,
                  "&:hover": { background: "#3b76ac" },
                }}
              >
                Export
              </Button>
            </Box>
          </Box>

          {/* Table */}
          <Paper sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    background: "#4a89c7",
                    "& th": {
                      color: "white",
                      fontWeight: 600,
                      fontSize: "15px",
                    },
                  }}
                >
                  <TableCell>Header 1</TableCell>
                  <TableCell>Header 2</TableCell>
                  <TableCell>Header 3</TableCell>
                  <TableCell>Header 4</TableCell>
                  <TableCell>Header 5</TableCell>
                  <TableCell>Header 6</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow sx={{ background: "#e9eef4" }}>
                  <TableCell colSpan={6}>&nbsp;</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={6}>&nbsp;</TableCell>
                </TableRow>
                <TableRow sx={{ background: "#e9eef4" }}>
                  <TableCell colSpan={6}>&nbsp;</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          {/* Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination
              count={3}
              page={1}
              variant="outlined"
              shape="rounded"
              siblingCount={1}
              boundaryCount={1}
            />
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default LayoutHOC(Reports);
