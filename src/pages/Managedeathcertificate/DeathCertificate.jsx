import React, { useState } from 'react';
import LayoutHOC from '../HOC/WithLayout';
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
  Chip,
} from "@mui/material";
import DeathCertificateDetailsModal from './DeathCertificateDetailsModal';

function DeathCertificate() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('');

  const handleOpenModal = (userId) => {
    setSelectedUserId(userId);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUserId('');
  };

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
              Manage Death Certificate
            </Typography>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#4b86b4", borderTop: '1px solid #fff' }}>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    User ID
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    User Name
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Nominee Name
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Submitted On
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: 600 }}>
                    Verification Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleOpenModal('USER345')}
                    >
                      USER345
                    </Typography>
                  </TableCell>
                  <TableCell>Aadit Singh</TableCell>
                  <TableCell>Neha</TableCell>
                  <TableCell>20-05-25</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip label="Pending" sx={{ backgroundColor: '#FFFACD', color: '#8B8000' }} />
                      <Chip label="Valid" sx={{ backgroundColor: '#e0e0e0' }} />
                      <Chip label="Invalid" sx={{ backgroundColor: '#e0e0e0' }} />
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <DeathCertificateDetailsModal open={openModal} handleClose={handleCloseModal} userId={selectedUserId} />
    </Box>
  );
}

export default LayoutHOC(DeathCertificate);
