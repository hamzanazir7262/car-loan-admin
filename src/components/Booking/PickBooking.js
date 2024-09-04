import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  IconButton,
  Paper,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Pagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import PreviewIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';
const PickBooking = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      carName: 'Toyota Camry',
      carImage: '/logocar.jpeg',
      pickupDate: '2024-09-01',
      pickupTime: '10:00 AM',
      dropDate: '2024-09-05',
      dropTime: '02:00 PM',
      pickupOtp: '123456',
      customerName: 'John Doe',
      customerNumber:'+923035656839',
      subtotal: 300,
      taxAmount: 50,
      netAmount: 350,
    },
    {
      id: 2,
      carName: 'Honda Civic',
      carImage: '/logocar.jpeg',
      pickupDate: '2024-09-03',
      pickupTime: '11:00 AM',
      dropDate: '2024-09-06',
      dropTime: '03:00 PM',
      pickupOtp: '654321',
      customerName: 'Jane Smith',
      customerNumber:'+923035656839',
      subtotal: 400,
      taxAmount: 60,
      netAmount: 460,
    },
    // Add more sample data here
  ]);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Handle sorting
  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && order === 'asc';
    setOrder(isAscending ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter rows based on search term
  const filteredRows = rows.filter((row) =>
    row.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.pickupOtp.includes(searchTerm)
  );

  // Sort rows
  const sortedRows = filteredRows.sort((a, b) => {
    const compareValue = (key) => {
      if (typeof a[key] === 'string') {
        return a[key].localeCompare(b[key]);
      }
      if (typeof a[key] === 'number') {
        return a[key] - b[key];
      }
      return a[key] > b[key] ? 1 : -1;
    };
    
    return order === 'asc' ? compareValue(orderBy) : -compareValue(orderBy);
  });

  // Paginate rows
  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  // Handle dialog open
  const handleOpenDialog = (row) => {
    setSelectedRow(row);
    setOpenDialog(true);
  };

  // Handle dialog close
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRow(null);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom p={1}>
       Total Pick up Book Management
      </Typography>

      <Box p={3} >
        <TableContainer component={Paper}>
          <Box display="flex" flexDirection="column" p={2} >
            <Box display="flex" justifyContent="space-between" mb={2} flexWrap="wrap">
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120, mb: 2 }}>
                <InputLabel>Entries</InputLabel>
                <Select
                  value={rowsPerPage}
                  onChange={handleChangeRowsPerPage}
                  label="Entries"
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Search"
                variant="outlined"
                size="small"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                sx={{ width: { xs: '100%', sm: '300px' } }}
              />
            </Box>

            <Table
              sx={{
                border: '1px solid grey',
                fontSize: '1rem',
                minWidth: 600,
                borderBottom: '2px solid black',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'id'}
                      direction={orderBy === 'id' ? order : 'asc'}
                      onClick={() => handleRequestSort('id')}
                    >
                      Sr No.
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'carName'}
                      direction={orderBy === 'carName' ? order : 'asc'}
                      onClick={() => handleRequestSort('carName')}
                    >
                      Car Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>Car Image</TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'pickupDate'}
                      direction={orderBy === 'pickupDate' ? order : 'asc'}
                      onClick={() => handleRequestSort('pickupDate')}
                    >
                      Pickup Date
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'pickupTime'}
                      direction={orderBy === 'pickupTime' ? order : 'asc'}
                      onClick={() => handleRequestSort('pickupTime')}
                    >
                      Pickup Time
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'dropDate'}
                      direction={orderBy === 'dropDate' ? order : 'asc'}
                      onClick={() => handleRequestSort('dropDate')}
                    >
                      Drop Date
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'dropTime'}
                      direction={orderBy === 'dropTime' ? order : 'asc'}
                      onClick={() => handleRequestSort('dropTime')}
                    >
                      Drop Time
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'pickupOtp'}
                      direction={orderBy === 'pickupOtp' ? order : 'asc'}
                      onClick={() => handleRequestSort('pickupOtp')}
                    >
                      Pickup OTP
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'customerName'}
                      direction={orderBy === 'customerName' ? order : 'asc'}
                      onClick={() => handleRequestSort('customerName')}
                    >
                      Customer Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>
                    <TableSortLabel
                      active={orderBy === 'customerName'}
                      direction={orderBy === 'customerName' ? order : 'asc'}
                      onClick={() => handleRequestSort('customerName')}
                    >
                      Customer Number
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{borderLeft:1,padding:0}}>Preview Data</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell sx={{borderLeft:1}}>{index + 1 + page * rowsPerPage}</TableCell>
                    <TableCell sx={{borderLeft:1}}>{row.carName}</TableCell>
                    <TableCell sx={{borderLeft:1}}>
                      <img src={row.carImage} alt={row.carName} width="50" />
                    </TableCell>
                    <TableCell sx={{borderLeft:1}}>{row.pickupDate}</TableCell>
                    <TableCell sx={{borderLeft:1}}>{row.pickupTime}</TableCell>
                    <TableCell sx={{borderLeft:1}}>{row.dropDate}</TableCell>
                    <TableCell sx={{borderLeft:1}}>{row.dropTime}</TableCell>
                    <TableCell sx={{borderLeft:1}}>{row.pickupOtp}</TableCell>
                    <TableCell sx={{borderLeft:1}}>{row.customerName}</TableCell>
                    <TableCell sx={{borderLeft:1}}>{row.customerNumber}</TableCell>
                    <TableCell sx={{borderLeft:1}}>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PreviewIcon />}
                        onClick={() => handleOpenDialog(row)}
                        sx={{fontSize:10}}
                      >
                        Preview
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Box mt={2} display="flex" justifyContent="flex-end" flexWrap="wrap">
              <Button
                variant="outlined"
                disabled={page === 0}
                onClick={() => handleChangePage(null, page - 1)}
                sx={{ marginRight: 1 }}
              >
                Previous
              </Button>

              <Pagination
                count={totalPages}
                page={page + 1}
                onChange={handleChangePage}
                color="primary"
                shape="rounded"
              />

              <Button
                variant="outlined"
                disabled={page >= totalPages - 1}
                onClick={() => handleChangePage(null, page + 1)}
                sx={{ marginLeft: 1 }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </TableContainer>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
  <DialogTitle>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">Booking Details</Typography>
      <IconButton edge="end" color="inherit" onClick={handleCloseDialog} aria-label="close">
        <CloseIcon />
      </IconButton>
    </Box>
  </DialogTitle>
  <DialogContent dividers>
  <Box sx={{ display:"flex", justifyContent:"space-between", marginBottom:20}}>
     
   
    {/* New Section for Order Details */}
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      <Box sx={{ flex: "1 1 30px" }}>
        <Typography variant="body1"><strong>Order No:</strong></Typography>
        <Typography>{selectedRow?.orderNo || 'N/A'}</Typography>
      </Box>
      <Box sx={{ flex: "1 1 30px" }}>
        <Typography variant="body1"><strong>Pickup Date:</strong></Typography>
        <Typography>{selectedRow?.pickupDate || 'N/A'}</Typography>
      </Box>
      <Box sx={{ flex: "1 1 30px" }}>
        <Typography variant="body1"><strong>Return Date:</strong></Typography>
        <Typography>{selectedRow?.returnDate || 'N/A'}</Typography>
      </Box>
      <Box sx={{ flex: "1 1 30px" }}>
        <Typography variant="body1"><strong>Mobile Number:</strong></Typography>
        <Typography>{selectedRow?.mobileNumber || 'N/A'}</Typography>
      </Box>
      <Box sx={{ flex: "1 1 30px" }}>
        <Typography variant="body1"><strong>Customer Name:</strong></Typography>
        <Typography>{selectedRow?.customerName || 'N/A'}</Typography>
      </Box>
    </Box>
    <Box sx={{ }}>
        <Typography>
          <ImageIcon color="primary" sx={{ fontSize: 40 }} />
        </Typography>
      </Box>
    </Box>
    {/* Existing Section for Booking Details */}
    
    <Typography variant="h6" gutterBottom>
      <img src="/logocar.jpeg" alt="Company Logo" width="40" /> Booking Details
    </Typography>
    {selectedRow && (
      <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right">3 days</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Subtotal</TableCell>
              <TableCell align="right">${selectedRow.subtotal.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Tax Amount</TableCell>
              <TableCell align="right">${selectedRow.taxAmount.toFixed(2)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Net Amount</TableCell>
              <TableCell align="right">
                <strong>${selectedRow.netAmount.toFixed(2)}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )}
     {/* New Section for Car Pickup Details */}
     <Box sx={{ borderTop: '1px solid #ccc', pt: 2 }}>
      <Typography variant="h6" gutterBottom>Car Pickup Details</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ flex: "1 1 200px" }}>
          <Typography variant="body1"><strong>Payment Gateway:</strong></Typography>
          <Typography>{selectedRow?.paymentGateway || 'N/A'}</Typography>
        </Box>
        <Box sx={{ flex: "1 1 200px" }}>
          <Typography variant="body1"><strong>Transaction ID:</strong></Typography>
          <Typography>{selectedRow?.transactionId || 'N/A'}</Typography>
        </Box>
        <Box sx={{ flex: "1 1 200px" }}>
          <Typography variant="body1"><strong>Pickup Car Address:</strong></Typography>
          <Typography>{selectedRow?.pickupCarAddress || 'N/A'}</Typography>
        </Box>
        <Box sx={{ flex: "1 1 200px" }}>
          <Typography variant="body1"><strong>Book Status:</strong></Typography>
          <Typography>{selectedRow?.bookStatus || 'N/A'}</Typography>
        </Box>
      </Box>
    </Box>
  </DialogContent>
</Dialog>
    </>
  );
};

export default PickBooking;
