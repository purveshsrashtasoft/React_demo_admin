import React, { useState } from 'react';
import LayoutHOC from "../HOC/WithLayout";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { NavLink } from "react-router-dom";
function LifeDeclaration() {
  const [open, setOpen] = useState(false);
  const [actionType, setActionType] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionTypeChange = (event) => {
    setActionType(event.target.value);
  };

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
            Manage Due Life Declaration 
            </Typography>
          
          </Box>

          <TableContainer>
            <Table>
             <TableHead >
                <TableRow sx={{ background: "#4b86b4",borderTop: '1px solid #fff' }}>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    User ID
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    User Name
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Life Declaration Due Date
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Demise Status
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    DC Availability
                  </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    DC Validity
                  </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Life Cycle
                  </TableCell>
                    <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* Row 1 */}
                <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>USER123</TableCell>
                  <TableCell>Rahul Singh</TableCell>
                  <TableCell>2025-03-25</TableCell>
                  <TableCell>Confirmed</TableCell>
                  <TableCell>Received</TableCell>
                  <TableCell>Valid</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={handleClickOpen} sx={{ background: "#4d86b4", textTransform: "none" }}>
                      Action Type
                    </Button>
                  </TableCell>
                </TableRow>

                {/* Row 2 */}
                <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>USER456</TableCell>
                  <TableCell>Ankit Verma</TableCell>
                  <TableCell>2025-04-01</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Invalid</TableCell>
                  <TableCell>Open</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={handleClickOpen} sx={{ background: "#4d86b4", textTransform: "none" }}>
                      Action Type
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            Life Declaration Action
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="action-type-label">Action Type</InputLabel>
            <Select
              labelId="action-type-label"
              id="action-type-select"
              value={actionType}
              label="Action Type"
              onChange={handleActionTypeChange}
            >
              <MenuItem value="Mark Life Declaration" sx={{ '&.Mui-selected': { backgroundColor: '#CD853F', color: 'white' }, '&:hover': { backgroundColor: '#CD853F', color: 'white' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  Mark Life Declaration
                  {actionType === 'Mark Life Declaration' && <CheckIcon fontSize="small" />}
                </Box>
              </MenuItem>
              <MenuItem value="Mark Demise Confirmation" sx={{ '&.Mui-selected': { backgroundColor: '#CD853F', color: 'white' }, '&:hover': { backgroundColor: '#CD853F', color: 'white' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  Mark Demise Confirmation
                  {actionType === 'Mark Demise Confirmation' && <CheckIcon fontSize="small" />}
                </Box>
              </MenuItem>
              <MenuItem value="Upload Death Certificate" sx={{ '&.Mui-selected': { backgroundColor: '#CD853F', color: 'white' }, '&:hover': { backgroundColor: '#CD853F', color: 'white' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  Upload Death Certificate
                  {actionType === 'Upload Death Certificate' && <CheckIcon fontSize="small" />}
                </Box>
              </MenuItem>
              <MenuItem value="Preview" sx={{ '&.Mui-selected': { backgroundColor: '#CD853F', color: 'white' }, '&:hover': { backgroundColor: '#CD853F', color: 'white' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  Preview
                  {actionType === 'Preview' && <CheckIcon fontSize="small" />}
                </Box>
              </MenuItem>
              <MenuItem value="Generate & Share" sx={{ '&.Mui-selected': { backgroundColor: '#CD853F', color: 'white' }, '&:hover': { backgroundColor: '#CD853F', color: 'white' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  Generate & Share
                  {actionType === 'Generate & Share' && <CheckIcon fontSize="small" />}
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="user-id"
            label="User ID"
            type="text"
            fullWidth
            variant="outlined"
            defaultValue="USER123"
            InputProps={{
              readOnly: true,
            }}
            disabled
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            id="admin-remark"
            label="Admin Remark"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Enter remark..."
            sx={{ mb: 2 }}
          />
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Upload Proof (if any)</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="outlined" component="span">
                  Choose file
                </Button>
              </label>
              <TextField
                variant="outlined"
                size="small"
                value="No file chosen"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ ml: 1, flexGrow: 1 }}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#4d86b4' }}>Cancel</Button>
          <Button onClick={handleClose} variant="contained" sx={{ background: "#4d86b4" }}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LayoutHOC(LifeDeclaration)