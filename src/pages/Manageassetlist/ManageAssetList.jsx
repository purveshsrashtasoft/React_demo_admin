import React from "react";
import LayoutHOC from "../HOC/WithLayout";

import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Pagination,
  Stack
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";

function ManageAssetList() {
  const rows = [
    "Term Insurance",
    "Saving Account",
    "Current Account",
    "Mutual Fund",
  ];

  return (
    <Box sx={{ p: 1, backgroundColor: "#f5f8fc", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: "16px", boxShadow: 3 }}>
        <CardContent sx={{ p: 0 }}>

          {/* Header */}
          <Box
            sx={{
              backgroundColor: "#4d87b7",
              color: "white",
              p: 3,
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Box sx={{ fontSize: "20px", fontWeight: 600 }}>
              Manage Asset
            </Box>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#d9539f", "&:hover": { backgroundColor: "#c0468c",color:"white" } }}
              >
               <NavLink to="/manage-asset-list/add" className="flex items-center gap-2" style={{color:"white"}}>Add Asset</NavLink>
              </Button>

              <Button
                variant="contained"
                sx={{ backgroundColor: "#28a745", "&:hover": { backgroundColor: "#218838" } }}
              >
                Export as CSV
              </Button>
            </Stack>
          </Box>

          {/* Search Bar */}
          <Box sx={{ p: 3, pb: 0,width:"500px" }}>
            <TextField 
              fullWidth
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <Box sx={{ pl: 1.5, pr: 1, display: "flex", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      fill="#6b7280"
                      style={{ opacity: 0.8 }}
                    >
                      <path d="M19.5 20.25 13.3 14.05q-.95.8-2.175 1.275Q9.9 15.8 8.55 15.8q-3.15 0-5.325-2.175Q1.05 11.45 1.05 8.3q0-3.15 2.175-5.325Q5.4.8 8.55.8q3.15 0 5.325 2.175Q16.05 5.15 16.05 8.3q0 1.35-.475 2.55-.475 1.2-1.275 2.15l6.2 6.2Zm-10.95-6.95q2.4 0 4.05-1.65t1.65-4.05q0-2.4-1.65-4.05T8.55 1.9q-2.4 0-4.05 1.65T2.85 7.6q0 2.4 1.65 4.05t4.05 1.65Z"/>
                    </svg>
                  </Box>
                ),
                sx: {
                  backgroundColor: "#f4f7fb",
                  height: "46px",
                  borderRadius: "8px",
                  paddingLeft: 0,
                }
              }}
              sx={{
                "& fieldset": {
                  borderColor: "#d7dde5",
                },
                "&:hover fieldset": {
                  borderColor: "#d7dde5",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4d87b7",
                },
              }}
            />
          </Box>

          {/* Table */}
          <TableContainer sx={{ p: 3, pt: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#4d87b7" }}>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Asset_Category_Value
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontWeight: 600, textAlign: "right" }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#e8eef5" : "white"
                    }}
                  >
                    <TableCell>{row}</TableCell>

                    <TableCell align="right">
                      <IconButton size="small">
                        <ArrowUpwardIcon />
                      </IconButton>
                      <IconButton size="small">
                        <ArrowDownwardIcon />
                      </IconButton>
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small">
                        <VisibilityOffIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", p: 3, pt: 1 }}>
            <Pagination count={3} shape="rounded" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LayoutHOC(ManageAssetList);
