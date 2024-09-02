import React, { useState } from 'react';
import { Box, Typography, Button, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';

const AddCity = () => {
  const [cityStatus, setCityStatus] = useState('');

  const handleStatusChange = (event) => {
    setCityStatus(event.target.value);
  };

  return (
    <>
      <Box p={3}>
        <Typography variant="h4">City Management</Typography>
        {/* Add dashboard content here */}
      </Box>
      <Box display="flex" justifyContent="center" p={3}>
        <Box bgcolor="white" borderRadius={2} boxShadow={3} maxWidth={800} width="100%" p={3}>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="city-name" sx={{ color: "black", fontSize: 16, fontWeight: "bold", p:0}}>
              City Name
            </Typography>
            <TextField
              id="city-name"
              variant="outlined"
              fullWidth
              sx={{ 
                paddingTop: 1, 
                height: 40, 
                '& .MuiInputBase-root': { height: '100%' }, 
                '& .MuiOutlinedInput-input': { paddingTop: '10px', paddingBottom: '10px' }
              }}
            />
          </FormControl>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="city-status" sx={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
              City Status
            </Typography>
            <Box sx={{paddingTop:1}}>  <Select
              id="city-status"
              value={cityStatus}
              onChange={handleStatusChange}
              variant="outlined"
              fullWidth
              sx={{ 
                padding: 1, 
                height: 40, 
                '& .MuiSelect-select': { paddingTop: '10px', paddingBottom: '10px' } 
              }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select></Box>
           
          </FormControl>
          
          <Box display="flex" justifyContent="flex-start" mt={2} >
            <Button variant="contained" color="primary">
              Add City
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddCity;
