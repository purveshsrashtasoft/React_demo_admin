import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function DeathCertificateDetailsModal({ open, handleClose, userId }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 1 }}>
        Death Certificate Details
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
          <Button variant="contained" sx={{ bgcolor: '#4285F4', '&:hover': { bgcolor: '#3c7ae0' } }}>User Id</Button>
          <Button variant="contained" sx={{ bgcolor: '#4285F4', '&:hover': { bgcolor: '#3c7ae0' } }}>Submitted by</Button>
          <Button variant="contained" sx={{ bgcolor: '#4285F4', '&:hover': { bgcolor: '#3c7ae0' } }}>Submission Time</Button>
          <Button variant="contained" sx={{ bgcolor: '#4285F4', '&:hover': { bgcolor: '#3c7ae0' } }}>Certificate</Button>
          <Button variant="contained" sx={{ gridColumn: 'span 2', bgcolor: '#4285F4', '&:hover': { bgcolor: '#3c7ae0' } }}>Status</Button>
        </Box>

        <Typography variant="subtitle1" gutterBottom>Admin Remark</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Enter remark..."
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Typography variant="subtitle1" gutterBottom>Supporting Doc to upload</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Button variant="contained" component="label">
            Choose file
            <input type="file" hidden />
          </Button>
          <Typography variant="body1" sx={{ ml: 2 }}>No file chosen</Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 3, justifyContent: 'space-between' }}>
        <Button variant="contained" sx={{ bgcolor: '#4285F4', '&:hover': { bgcolor: '#3c7ae0' } }}>Mark Valid & Notify</Button>
        <Button variant="contained" sx={{ bgcolor: '#FF0000', '&:hover': { bgcolor: '#cc0000' } }}>Mark Invalid & Request Resubmission</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeathCertificateDetailsModal;