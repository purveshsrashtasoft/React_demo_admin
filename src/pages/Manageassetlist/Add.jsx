import React from 'react';
import { Box, Grid, TextField, Button, Typography, Paper } from '@mui/material';
import LayoutHOC from '../HOC/WithLayout';

function Add() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#f5f8fc", minHeight: "100vh", p: 3 }}>

      {/* Header Bar */}
      <Box
        sx={{
          bgcolor: "#4C89BD",
          color: "#fff",
          p: 3,
          borderRadius: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Edit Asset
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#E85B63",
            ":hover": { bgcolor: "#d14c53" },
            textTransform: "none",
            px: 3
          }}
        >
          Back
        </Button>
      </Box>

      {/* Main Card */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "6px",
          border: "1px solid #e5e5e5"
        }}
      >

        <Grid container spacing={4}>

          {/* Full width field */}
          <Grid size={4}>
            <Typography sx={{ fontSize: 14, mb: 1, fontWeight: 600,textAlign:"left" }}>
              Asset_Category_Value
            </Typography>
            <TextField
              placeholder="Term Insurance"
              size="small"
              fullWidth
              InputProps={{ sx: { bgcolor: "#f3f6f9" } }}
            />
          </Grid>
            <Grid size={8}>
           
          </Grid>

          {/* Two column rows */}
          <Grid size={6}>
            <Typography sx={{ fontSize: 14, mb: 1, fontWeight: 600,textAlign:"left" }}>
              Asset_Field_1_Value
            </Typography>
            <TextField
              placeholder="Upload Policy"
              size="small"
              fullWidth
              sx={{ bgcolor: "#f3f6f9" }}
            />
          </Grid>

          <Grid size={6}>
            <Typography sx={{ fontSize: 14, mb: 1, fontWeight: 600,textAlign:"left" }}>
              Asset_Field_2_Value
            </Typography>
            <TextField
              placeholder="Policy issuer's Name"
              size="small"
              fullWidth
              sx={{ bgcolor: "#f3f6f9" }}
            />
          </Grid>

          <Grid size={6}>
            <Typography sx={{ fontSize: 14, mb: 1, fontWeight: 600,textAlign:"left" }}>
              Asset_Field_3_Value
            </Typography>
            <TextField
              placeholder="Policy Number"
              size="small"
              fullWidth
              sx={{ bgcolor: "#f3f6f9" }}
            />
          </Grid>

          <Grid size={6}>
            <Typography sx={{ fontSize: 14, mb: 1, fontWeight: 600,textAlign:"left" }}>
              Asset_Field_4_Value
            </Typography>
            <TextField
              placeholder="Re-enter Policy Number"
              size="small"
              fullWidth
              sx={{ bgcolor: "#f3f6f9" }}
            />
          </Grid>

        </Grid>

        {/* Update Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4C89BD",
              px: 4,
              textTransform: "none",
              ":hover": { bgcolor: "#3d7aa9" }
            }}
          >
            Update
          </Button>
        </Box>

      </Paper>
    </Box>
  );
}

export default LayoutHOC(Add);
