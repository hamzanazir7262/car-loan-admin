import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormControl, Select, MenuItem, Divider } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles for Quill

const AddPage = () => {
  const [formValues, setFormValues] = useState({
    pageTitle: '',
    pageStatus: '',
    pageDescription: ''
  });

  const handleChange = (event) => {
    const { name, value, type, files, checked } = event.target;

    // console.log(`Field Name: ${name}, Value: ${value}`); // Debug log to check values

    if (type === 'file') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: files[0] || null,
      }));
    } else if (type === 'checkbox') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: checked,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleEditorChange = (value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      pageDescription: value
    }));
  };

  const handleSubmit = () => {
    console.log(formValues);
  };

  return (
    <Box p={3}>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h4">Add Page</Typography>
      </Box>

      <Box bgcolor="white" borderRadius={2} boxShadow={3} p={3}>
        <Typography variant="h4">Page Information</Typography>
        <Divider sx={{ mb: 2 }} />

        {/* Page Title */}
        <FormControl fullWidth margin="normal">
          <Typography htmlFor="pageTitle" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
            Enter Page Title
          </Typography>
          <TextField
            name="pageTitle"
            variant="outlined"
            fullWidth
            value={formValues.pageTitle}
            onChange={handleChange}
            placeholder='Enter Page Title'
          />
        </FormControl>

        {/* Page Status */}
        <FormControl fullWidth margin="normal">
          <Typography htmlFor="pageStatus" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
            Select Page Status
          </Typography>
          <Select
            name="pageStatus"
            value={formValues.pageStatus}
            onChange={handleChange}
            fullWidth
            displayEmpty
          >

            <MenuItem value="" disabled>Choose</MenuItem>
            <MenuItem value="Published">Published</MenuItem>
            <MenuItem value="Archived">Archived</MenuItem>
          </Select>
        </FormControl>

        {/* Page Description */}
        <FormControl fullWidth margin="normal">
          <Typography htmlFor="pageDescription" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
            Page Description
          </Typography>
          <ReactQuill
            name="pageDescription"
            value={formValues.pageDescription}
            onChange={handleEditorChange}
            theme="snow"
            style={{ height: '200px' }}
          />
        </FormControl>

        {/* Submit Button */}
        <Box textAlign="right" mt={2} marginTop={10}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add page
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPage;
