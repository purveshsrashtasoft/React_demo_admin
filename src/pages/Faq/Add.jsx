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

function AddFaq() {
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
        <Typography variant="h5" sx={{ color: "white", fontWeight: 600 ,textAlign:"left"}}>
         Business Policy → FAQ
        </Typography>
      </Box>

      <Card sx={{ borderRadius: "6px" }}>
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={3}>
           
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
                  placeholder="Type Question Here..........."
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

export default LayoutHOC(AddFaq);
