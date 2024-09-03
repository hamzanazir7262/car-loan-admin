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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ListCoupon = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      title: 'Summer Sale',
      subtitle: 'Get 20% Off',
      code: 'SUM20',
      image: '/logocar.jpeg',
      expiredDate: '2024-12-31',
      minAmount: 100,
      discount: 20,
      status: 'Active',
    },
    {
      id: 2,
      title: 'Winter Sale',
      subtitle: 'Get 15% Off',
      code: 'WIN15',
      image: '/logocar.jpeg',
      expiredDate: '2024-11-30',
      minAmount: 50,
      discount: 15,
      status: 'Expired',
    },
    // Add more sample data here
  ]);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

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
    row.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort rows
  const sortedRows = filteredRows.sort((a, b) => {
    if (orderBy === 'id') {
      return order === 'asc' ? a.id - b.id : b.id - a.id;
    }
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Paginate rows
  const paginatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Calculate total pages
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  return (
    <>
      <Typography variant="h4" gutterBottom p={1}>
        Coupon List Management
      </Typography>

      <Box p={3}>
        <TableContainer component={Paper}>
          <Box display="flex" flexDirection="column" p={2}>
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
                minWidth: 650,
                borderBottom: '2px solid black',
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>
                    Sr No.
                    <TableSortLabel
                      active={orderBy === 'id'}
                      direction={orderBy === 'id' ? order : 'asc'}
                      onClick={() => handleRequestSort('id')}
                    >
                      {orderBy === 'id' ? (order === 'asc' ? ' ▲' : ' ▼') : null}
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Title</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Subtitle</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Code</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Image</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Expired Date</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Min Amount</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Discount</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Status</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>{row.title}</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>{row.subtitle}</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>{row.code}</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>
                      <img src={row.image} alt={row.title} width={50} height={50} />
                    </TableCell>
                    <TableCell sx={{ fontSize: 14 }}>{row.expiredDate}</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>{row.minAmount}</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>{row.discount}%</TableCell>
                    <TableCell sx={{ fontSize: 14 }}>
                      <Typography
                        sx={{
                          backgroundColor: row.status === 'Active' ? 'green' : 'red',
                          color: 'white',
                          textAlign: 'center',
                          padding: '4px 8px',
                          borderRadius: 1,
                          display: 'inline-block',
                          fontSize:10
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
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
                sx={{
                  '.MuiPaginationItem-root': {
                    margin: '0 2px',
                  },
                  '.MuiPaginationItem-ellipsis': {
                    display: 'none',
                  },
                  '.MuiPaginationItem-page.Mui-selected': {
                    backgroundColor: 'blue',
                    color: 'white',
                  },
                  '.MuiPaginationItem-page.Mui-disabled': {
                    opacity: 0.5,
                  },
                }}
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
    </>
  );
};

export default ListCoupon;
