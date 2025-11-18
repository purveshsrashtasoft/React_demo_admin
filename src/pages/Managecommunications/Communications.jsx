import React from "react";
import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Paper,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import LayoutHOC from "../HOC/WithLayout";

function Communications() {
  const rows = [
    {
      type: "Email",
      subject: "Welcome Email",
      content: "Welcome to Meri Zimmedari...",
      status: "Active",
    },
    {
      type: "SMS",
      subject: "OTP Verification",
      content: "Your OTP is...",
      status: "Active",
    },
  ];

  return (
    <Box sx={{ width: "100%", background: "#f4f6f9", p: 2 }}>
      {/* Top Header Section */}
      <Box
        sx={{
          background: "#4a89c7",
          color: "white",
          p: 2.5,
          borderRadius: "6px 6px 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #fff",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
          Manage Communications
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: "#f59231",
            textTransform: "none",
            fontWeight: 600,
            px: 3,
            py: 1,
            "&:hover": { background: "#e5831f" },
          }}
        >
          Add Communication
        </Button>
      </Box>

      {/* Table */}
      <Paper elevation={0} sx={{ borderRadius: 0 }}>
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
              <TableCell>Type</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{
                  background: i % 2 === 0 ? "#e9eef4" : "#ffffff",
                }}
              >
                <TableCell sx={{ fontSize: "15px" }}>{row.type}</TableCell>
                <TableCell sx={{ fontSize: "15px" }}>{row.subject}</TableCell>
                <TableCell sx={{ fontSize: "15px" }}>{row.content}</TableCell>

                <TableCell>
                  <Chip
                    label={row.status}
                    sx={{
                      background: "#ccffe1",
                      color: "#00994a",
                      fontWeight: 600,
                      width: "80px",
                      textAlign: "center",
                    }}
                  />
                </TableCell>

                <TableCell align="center">
                  <IconButton>
                    <EditIcon sx={{ color: "#1c6eb9" }} />
                  </IconButton>

                  <IconButton>
                    <DeleteIcon sx={{ color: "#333" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default LayoutHOC(Communications);
