import React from "react";
import LayoutHOC from '../HOC/WithLayout';
import {
  Box,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { NavLink } from "react-router-dom";

const Policy = () => {
  return (
    <Box p={1}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent sx={{ p: 0 }}>
          <Box
            sx={{
              background: "#4b86b4",
              color: "white",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Business Policy 
            </Typography>
            <Box>
              <Button
                variant="contained"
                sx={{ background: "#ee7f21", mr: 2, textTransform: "none" }}
              >
                <NavLink to="/policy/add" style={{ color: "white", textDecoration: "none" }}>
                  Add New Policy
                </NavLink>
              </Button>
              <Button
                variant="contained"
                sx={{ background: "#ee7f21", textTransform: "none" }}
              >
                Export as Excel
              </Button>
            </Box>
          </Box>

          <TableContainer>
            <Table>
             <TableHead >
                <TableRow sx={{ background: "#4b86b4",borderTop: '1px solid #fff' }}>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Policy Type
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Version
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Published On
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* Row 1 */}
                <TableRow>
                  <TableCell>Privacy Policy</TableCell>
                  <TableCell>1.0</TableCell>
                  <TableCell>
                    <Chip
                      label="Draft"
                      sx={{ background: "#fff3cd", color: "#856404" }}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton>
                      <UploadIcon />
                    </IconButton>
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>

                {/* Row 2 */}
                <TableRow>
                  <TableCell>Consent</TableCell>
                  <TableCell>1.0</TableCell>
                  <TableCell>
                    <Chip
                      label="Published"
                      sx={{ background: "#d4edda", color: "#155724" }}
                    />
                  </TableCell>
                  <TableCell>2024-01-15</TableCell>
                  <TableCell>
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LayoutHOC(Policy);
