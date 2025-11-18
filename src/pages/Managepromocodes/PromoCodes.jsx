import React, { useState } from 'react';
import LayoutHOC from '../HOC/WithLayout';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from '@mui/material';
import AddPromocodeModal from './AddPromocodeModal';

function PromoCodes() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const promocodes = [
    { id: 'TC0001', discount: '10%', validFrom: '01-01-2024', validTill: '31-12-2024' },
     { id: 'TC0001', discount: '10%', validFrom: '01-01-2024', validTill: '31-12-2024' },
  ];

  return (
    <Box sx={{ p: 3 }}>
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
                Promo Codes
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  sx={{ bgcolor: '#f57c00', '&:hover': { bgcolor: '#e65100' }, mr: 1 }}
                  onClick={handleOpenModal}
                >
                  Add New Promocode
                </Button>
                <Button variant="contained" sx={{ bgcolor: '#f57c00', '&:hover': { bgcolor: '#e65100' } }}>
                  Export as Excel
                </Button>
              </Box>
      </Box>
      <Card sx={{ borderRadius: 0, boxShadow: 3 }}>
        <CardContent sx={{ p: 0 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="promocode table">
              <TableHead>
                <TableRow sx={{ bgcolor: '#4b86b4' }}>
                  <TableCell sx={{ color: 'white', fontSize: '0.875rem' }}>Promocode</TableCell>
                  <TableCell sx={{ color: 'white', fontSize: '0.875rem' }}>Discount %</TableCell>
                  <TableCell sx={{ color: 'white', fontSize: '0.875rem' }}>Valid From</TableCell>
                  <TableCell sx={{ color: 'white', fontSize: '0.875rem' }}>Valid Till</TableCell>
                  <TableCell sx={{ color: 'white', fontSize: '0.875rem' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {promocodes.map((promocode) => (
                  <TableRow key={promocode.id}>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{promocode.id}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{promocode.discount}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{promocode.validFrom}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>{promocode.validTill}</TableCell>
                    <TableCell sx={{ fontSize: '0.875rem' }}>
                      <Link href="#" underline="hover" sx={{ color: '#4b86b4' }}>
                        Delete
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <AddPromocodeModal open={openModal} handleClose={handleCloseModal} />
    </Box>
  );
}

export default LayoutHOC(PromoCodes);