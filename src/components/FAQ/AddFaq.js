import React, { useState } from 'react';
import { Box, Typography, Button, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';

const AddFaq = () => {
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
            <Typography shrink htmlFor="enter-question" sx={{ color: "black", fontSize: 16, fontWeight: "bold", p:0}}>
              Enter Question
            </Typography>
            <TextField
              name="enter-question"
              variant="outlined"
              fullWidth
              sx={{ 
                paddingTop: 1, 
                height: 40, 
                '& .MuiInputBase-root': { height: '100%' }, 
                '& .MuiOutlinedInput-input': { paddingTop: '10px', paddingBottom: '10px' }
              }}
              placeholder='Enter Question'
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="enter-answer" sx={{ color: "black", fontSize: 16, fontWeight: "bold", p:0}}>
              Enter Answer
            </Typography>
            <TextField
              name="enter-answer"
              variant="outlined"
              fullWidth
              sx={{ 
                paddingTop: 1, 
                height: 40, 
                '& .MuiInputBase-root': { height: '100%' }, 
                '& .MuiOutlinedInput-input': { paddingTop: '10px', paddingBottom: '10px' }
              }}
              placeholder='Enter Answer'
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="city-status" sx={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
              Select Status
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
            Add Faq
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddFaq;
