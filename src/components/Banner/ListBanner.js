import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Pagination, IconButton, TextField, MenuItem, Select, InputLabel, FormControl, Paper, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ListBanner = () => {
  const [rows, setRows] = useState([
    { id: 1, image: '/logocar.jpeg', status: 'publish' },
    { id: 2, image: '/logocar.jpeg', status: 'publish' },
    { id: 3, image: '/logocar.jpeg', status: 'publish' },
    // { id: 4, image: '/logocar.jpeg', status: 'Inactive' },
    // { id: 5, image: '/logocar.jpeg', status: 'Active' },
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
  const filteredRows = rows.filter(row =>
    row.image.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
        Banner List Management
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
                border: '1px solid grey', // Example border color
                fontSize: '1rem',
                minWidth: 650,
                borderBottom: '2px solid black'
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    Sr No.
                    <TableSortLabel
                      active={orderBy === 'id'}
                      direction={orderBy === 'id' ? order : 'asc'}
                      onClick={() => handleRequestSort('id')}
                    >
                      {orderBy === 'id' ? (order === 'asc' ? ' ▲' : ' ▼') : null}
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'image'}
                      direction={orderBy === 'image' ? order : 'asc'}
                      onClick={() => handleRequestSort('image')}
                    >
                      Banner Image
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'status'}
                      direction={orderBy === 'status' ? order : 'asc'}
                      onClick={() => handleRequestSort('status')}
                    >
                      Banner Status
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell><img src={row.image} alt="Logo" style={{width:50}} />
                    </TableCell>
                    <TableCell> <Typography sx={{ backgroundColor: 'green',
        color: 'white',
        textAlign: 'center',
        padding: '4px 8px',
        borderRadius: 1,
        display: 'inline-block',}}> {row.status}</Typography></TableCell>
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
                  }
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

export default ListBanner;
