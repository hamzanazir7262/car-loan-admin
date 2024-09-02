import React from 'react';
import { Box, Typography, Button, TextField, FormControl, Input } from '@mui/material';

const AddCarType = () => {
  return (
    <>
      <Box p={3}>
        <Typography variant="h4">Add Car Type</Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={3}>
        <Box bgcolor="white" borderRadius={2} boxShadow={3} maxWidth={800} width="100%" p={3}>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="car-type-title" sx={{ color: "black", fontSize:16, fontWeight:"bold" }}>
              Car Type Title
            </Typography>
            <TextField
              id="car-type-title"
              variant="outlined"
              fullWidth
              sx={{paddingTop:1}}
            />
          </FormControl>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="car-type-image" sx={{ color: "black", fontSize:16, fontWeight:"bold" }}>
              Car Type Image
            </Typography>
            <Box display="flex" alignItems="center" mt={1} border={1} borderColor="grey.400" borderRadius={1}>
              <Button variant="contained" component="label" sx={{backgroundColor:"grey.400"}}>
                Choose File
                <Input type="file" id="car-type-image" sx={{ display: 'none' }} />
              </Button>
              <Typography ml={2}>No file chosen</Typography>
            </Box>
          </FormControl>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="car-type-status" sx={{ color: "black", fontSize:16, fontWeight:"bold" }}>
              Car Type Status
            </Typography>
            <TextField
              id="car-type-status"
              variant="outlined"
              fullWidth
              sx={{paddingTop:1}}
            />
          </FormControl>
          
          <Box display="flex" justifyContent="flex-start" mt={3}>
            <Button variant="contained" color="primary">
              Add Car Type
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddCarType;
