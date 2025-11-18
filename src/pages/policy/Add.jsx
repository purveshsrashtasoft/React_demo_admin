import React, { useState } from "react";
import LayoutHOC from "../HOC/WithLayout";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Select,
  FormControl,
} from "@mui/material";

function Add() {
  const [policy, setPolicy] = useState("");

  return (
    <Box sx={{ p: 0 }}>
      {/* Page Header */}
      <Box
        sx={{
          background: "#4d86b4",
          p: 3,
          borderRadius: "6px",
          mb: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>
          Add New Policy
        </Typography>
      </Box>

      <Card sx={{ borderRadius: "6px" }}>
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {/* LEFT: Dropdown (Grid 6) */}
            <Grid size={6} >
              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "14px", textAlign: "left" }}>
                Policy Type from drop down
              </Typography>

              <FormControl fullWidth>
                <Select
                  value={policy}
                  onChange={(e) => setPolicy(e.target.value)}
                  displayEmpty
                  sx={{
                    height: "44px",
                    background: "#ffffff",
                    borderRadius: "6px",
                    fontSize: "14px",
                    "& .MuiSelect-select": {
                      padding: "12px",
                        justifyContent: "left",
                          display: "flex"
                    },
                    "& fieldset": { borderColor: "#b7cde5" },
                    "&:hover fieldset": { borderColor: "#8cb2d6" },
                    "&.Mui-focused fieldset": { borderColor: "#6fa0cc" },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        borderRadius: "6px",
                        mt: 1,
                        boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                      },
                    },
                  }}
                >
                  <MenuItem disabled value="">
                    <span style={{ color: "#9ca3af",justifyContent: "left",display: "flex" }}>Select policy type</span>
                  </MenuItem>

                  {[
                 
                    "Terms & Conditions",
                    "Privacy Policy",
                    "Cancellation & Refund Policy",
                    "Cookies Policy",
                    "Asset sharing Consent",
                    "Auto debit Consent",
                  ].map((item) => (
                    <MenuItem
                      key={item}
                      value={item}
                      sx={{
                        fontSize: "14px",
                        height: "42px",
                        "&.Mui-selected": {
                          background: "#c17b35 !important",
                          color: "white !important",
                        
                        },
                        "&.Mui-selected:hover": {
                          background: "#a8672d !important",
                          
                        },
                      }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* RIGHT: Version Input (Grid 6) */}
            <Grid size={6}>
              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "14px" }}>
                Enter version
              </Typography>

              <TextField
                placeholder="e.g., 1.0"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "44px",
                    background: "#ffffff",
                    fontSize: "14px",
                    borderRadius: "6px",
                    "& fieldset": { borderColor: "#b7cde5" },
                    "&:hover fieldset": { borderColor: "#8cb2d6" },
                    "&.Mui-focused fieldset": { borderColor: "#6fa0cc" },
                  },
                }}
              />
            </Grid>

            {/* TEXTAREA GRID 12 */}
            <Grid size={12}>
             
              <Box
                sx={{
                  border: "1px solid #e1e7ef",
                  borderRadius: "6px",
                  background: "#f8fafc",
                }}
              >
                {/* Toolbar */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: 2,
                    borderBottom: "1px solid #e1e7ef",
                    fontSize: "14px",
                  }}
                >
                  <strong>B</strong> / <u>U</u> S | Normal Font
                </Box>

                {/* Text Area */}
                <Box
                  component="textarea"
                  placeholder="Type policy here and press publish to change the policy on website."
                  style={{
                    width: "100%",
                    height: "350px",
                    padding: "15px",
                    border: "none",
                    outline: "none",
                    fontSize: "15px",
                    background: "transparent",
                    resize: "none",
                  }}
                />
              </Box>
            </Grid>

            {/* Save Button */}
            <Grid size={12} sx={{ textAlign: "right" }}>
              <Button
                variant="contained"
                sx={{
                  background: "#4d86b4",
                  textTransform: "none",
                  px: 4,
                  height: "40px",
                  borderRadius: "6px",
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LayoutHOC(Add);
