
import React from 'react';
import { Box, Typography, Button, TextField, FormControl, Input } from '@mui/material';

const AddGallery = () => {
  return (
    <>
      <Box p={3}>
      <Typography variant="h4">Add Gallery</Typography>
      {/* Add dashboard content here */}
    </Box>
      <Box display="flex" justifyContent="center" p={3}>
        <Box bgcolor="white" borderRadius={2} boxShadow={3} maxWidth={800} width="100%" p={3}>
        <FormControl fullWidth margin="normal" padding="normal" mt={3}>
            <Typography shrink htmlFor="select-car" sx={{color: "black", fontSize:16, fontWeight:"bold"}}>
              Select car
            </Typography>
            <TextField
              id="banner-status"
              variant="outlined"
              fullWidth
              sx={{paddingTop:1}}
              placeholder='choose car'
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Typography shrink htmlFor="banner-image" sx={{ color: "black", fontSize:16, fontWeight:"bold" }}>
              Gallery Image
            </Typography>
            <Box display="flex" alignItems="center" mt={1} border={1} borderColor="grey.400" borderRadius={1} >
              <Button variant="contained" component="label" sx={{backgroundColor:"grey.400"}}>
                Choose File
                <Input type="file" id="gallery-image" sx={{ display: 'none' }} />
              </Button>
              <Typography ml={2}>No file chosen</Typography>
            </Box>
          </FormControl>
          
         
          
          <Box display="flex" justifyContent="flex-start" mt={3}>
            <Button variant="contained" color="primary">
              Add Gallery
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddGallery;
