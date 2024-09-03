import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Input, FormControl, Select, MenuItem } from '@mui/material';

const AddFacility = () => {
  const [cityStatus, setCityStatus] = useState('');

  const handleStatusChange = (event) => {
    setCityStatus(event.target.value);
  };

  return (
    <>
      <Box p={3}>
        <Typography variant="h4">Faq Management</Typography>
        {/* Add dashboard content here */}
      </Box>
      <Box display="flex" justifyContent="center" p={3}>
        <Box bgcolor="white" borderRadius={2} boxShadow={3} maxWidth={800} width="100%" p={3}>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="facility-name" sx={{ color: "black", fontSize: 16, fontWeight: "bold", p:0}}>
              Facility Name
            </Typography>
            <TextField
              name="facility-name"
              variant="outlined"
              fullWidth
              sx={{ 
                paddingTop: 1, 
                height: 40, 
                '& .MuiInputBase-root': { height: '100%' }, 
                '& .MuiOutlinedInput-input': { paddingTop: '10px', paddingBottom: '10px' }
              }}
              placeholder='Enter title'
            />
          </FormControl>
            
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="facility-image" sx={{ color: "black", fontSize:16, fontWeight:"bold" }}>
              Facility Image
            </Typography>
            <Box display="flex" alignItems="center" mt={1} border={1} borderColor="grey.400" borderRadius={1} >
              <Button variant="contained" component="label" sx={{backgroundColor:"grey.400"}}>
                Choose File
                <Input type="file" id="facility-image" sx={{ display: 'none' }} />
              </Button>
              <Typography ml={2}>No file chosen</Typography>
            </Box>
          </FormControl>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="facilty-status" sx={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
              facility Status
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
              displayEmpty
            >
              <MenuItem value="" disabled>Choose</MenuItem>
              <MenuItem value="Publish">Publish</MenuItem>
              <MenuItem value="unpublish">unpublish</MenuItem>
             
            </Select></Box>
           
          </FormControl>
          
          <Box display="flex" justifyContent="flex-start" mt={2} >
            <Button variant="contained" color="primary">
            Add Facility
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddFacility;
