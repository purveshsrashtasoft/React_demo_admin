import React from 'react';
import LayoutHOC from '../HOC/WithLayout';
import { NavLink } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";

function Subscription() {
  const data = [
    {
      subscription_plan_id: 'SUB001',
      subscription_plan_name: 'Economy Pack',
      billing_cycle: 'Monthly',
      price: '₹199.00',
      max_assets: 3,
      max_nominees: 2,
      free_trial_days: 7,
      plan_status: 'Inactive',
    },
    {
      subscription_plan_id: 'SUB002',
      subscription_plan_name: 'Super Saver Pack',
      billing_cycle: 'Yearly',
      price: '₹1999.00',
      max_assets: 10,
      max_nominees: 5,
      free_trial_days: 14,
      plan_status: 'Inactive',
    },
  ];

  return (
    <Box px={1}>
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
              Manage Subscription
            </Typography>
            <Box>
              <Button variant="contained" sx={{ bgcolor: '#FF9800', '&:hover': { bgcolor: '#e68900' }, mr: 1 }}>
                <NavLink to="/subscription/add-subscription-plan" className="flex items-center gap-2" style={{ color: 'white' }}>Add New Plan</NavLink>
              </Button>
              <Button variant="contained" sx={{ bgcolor: '#FF9800', '&:hover': { bgcolor: '#e68900' } }}>
                Export as Excel
              </Button>
            </Box>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#4b86b4", borderTop: '1px solid #fff' }}>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    subscription_plan_id
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    subscription_plan_name
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    billing_cycle
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    price
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    max_assets
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    max_nominees
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    free_trial_days
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Plan_status
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Action
                  </TableCell>
                </TableRow>
                <TableRow sx={{ background: "#e3f2fd" }}>
                  <TableCell sx={{ fontSize: '0.75rem' }}>Unique identifier for the plan</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>E.g, "Economy Pack", "Super Saver Pack"</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>Plan duration (monthly / yearly)</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>Amount charged (e.g, ₹199.00)</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>Max number of assets user can add</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>Max number of nominees allowed</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>Number of free trial days</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>active / inactive</TableCell>
                  <TableCell sx={{ fontSize: '0.75rem' }}>Inactive</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.subscription_plan_id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{row.subscription_plan_id}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{row.subscription_plan_name}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{row.billing_cycle}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{row.price}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{row.max_assets}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{row.max_nominees}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{row.free_trial_days}</TableCell>
                    <TableCell sx={{ fontSize: '0.75rem' }}>{row.plan_status}</TableCell>
                    <TableCell>
                      <Button variant="contained" size="small" sx={{ bgcolor: '#6495ED', '&:hover': { bgcolor: '#5a87d8' }, fontSize: '0.75rem' }}>
                        Inactive
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LayoutHOC(Subscription);