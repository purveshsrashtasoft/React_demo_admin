import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AddPromocodeModal({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ color: '#4b86b4' }}>
          Add New Promocode
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
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>Promocode</Typography>
          <TextField fullWidth placeholder="Enter promocode" variant="outlined" size="small" />
        </Box>
        <Box sx={{ mb: 2 }}>
  <Typography variant="subtitle1" gutterBottom>Discount %</Typography>
  <TextField fullWidth placeholder="Enter discount percentage" variant="outlined" size="small" type="number" inputProps={{ min: 0, max: 100 }} />
</Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>Valid From</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="dd-mm-yyyy"
              slotProps={{ textField: { fullWidth: true, size: 'small' } }}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>Valid Till</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="dd-mm-yyyy"
              slotProps={{ textField: { fullWidth: true, size: 'small' } }}
            />
          </LocalizationProvider>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'flex-end', p: 2 }}>
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{
            bgcolor: '#4b86b4',
            '&:hover': { bgcolor: '#3a6b8f' },
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddPromocodeModal;