import React from 'react';
import LayoutHOC from '../HOC/WithLayout';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

function AddSubscriptionPlan() {
  return (
    <Box sx={{ p: 1, maxWidth: 900, margin: '0 auto' }}>
      <Typography variant="h5" sx={{ mb: 3, color: '#4b86b4', fontWeight: 600, textAlign: 'left',fontSize: '1.8rem' }}>
        Add new plan
      </Typography>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'left' }}>Plan Name</Typography>
              <TextField fullWidth placeholder="Enter plan name" variant="outlined" size="small" />
            </Grid>
            <Grid size={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'left' }}>Billing Cycle</Typography>
              <FormControl fullWidth variant="outlined" size="small">
                <InputLabel>Select billing cycle</InputLabel>
                <Select label="Select billing cycle">
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                  <MenuItem value="yearly">Yearly</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          <Grid size={6}>
  <Typography variant="subtitle1" gutterBottom  sx={{ textAlign: 'left' }}>Amount </Typography>

  <TextField fullWidth placeholder="Enter amount" variant="outlined" size="small" type="number"        // 👈 Number field
    inputProps={{
      min: 0,            // optional: prevents negative numbers
      step: "0.01"       // optional: allows decimal values
    }}
  />
</Grid>

            <Grid size={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'left' }}>Free Trial Days</Typography>
              <TextField fullWidth placeholder="Enter number of days" variant="outlined" size="small" />
            </Grid>
            <Grid size={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'left' }}>Allowed Asset Number</Typography>
              <TextField fullWidth placeholder="Enter allowed assets" variant="outlined" size="small" />
            </Grid>
            <Grid size={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'left' }}>Allowed Nominee Number</Typography>
              <TextField fullWidth placeholder="Enter allowed nominees" variant="outlined" size="small" />
            </Grid>
            <Grid size={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
              <Button variant="outlined" sx={{ color: '#4b86b4', borderColor: '#4b86b4' }}>Cancel</Button>
              <Button variant="contained" sx={{ bgcolor: '#4b86b4', '&:hover': { bgcolor: '#3a6b8f' } }}>Save</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LayoutHOC(AddSubscriptionPlan);