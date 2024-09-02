import React from 'react';
import { Box, Typography, Button, TextField, FormControl, Input } from '@mui/material';

const AddCarBrand = () => {
  return (
    <>
      <Box p={3}>
        <Typography variant="h4">Add Car Brand</Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={3}>
        <Box bgcolor="white" borderRadius={2} boxShadow={3} maxWidth={800} width="100%" p={3}>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="car-brand-title" sx={{ color: "black", fontSize:16, fontWeight:"bold" }}>
              Car Brand Title
            </Typography>
            <TextField
              id="car-brand-title"
              variant="outlined"
              fullWidth
              sx={{paddingTop:1}}
            />
          </FormControl>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="car-brand-image" sx={{ color: "black", fontSize:16, fontWeight:"bold" }}>
              Car Brand Image
            </Typography>
            <Box display="flex" alignItems="center" mt={1} border={1} borderColor="grey.400" borderRadius={1}>
              <Button variant="contained" component="label" sx={{backgroundColor:"grey.400"}}>
                Choose File
                <Input type="file" id="car-brand-image" sx={{ display: 'none' }} />
              </Button>
              <Typography ml={2}>No file chosen</Typography>
            </Box>
          </FormControl>
          
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="car-brand-status" sx={{ color: "black", fontSize:16, fontWeight:"bold" }}>
              Car Brand Status
            </Typography>
            <TextField
              id="car-brand-status"
              variant="outlined"
              fullWidth
              sx={{paddingTop:1}}
            />
          </FormControl>
          
          <Box display="flex" justifyContent="flex-start" mt={3}>
            <Button variant="contained" color="primary">
              Add Car Brand
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddCarBrand;
