import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormControl, Select, MenuItem, Divider, Grid } from '@mui/material';

const AddCoupon = () => {
  const [formValues, setFormValues] = useState({
    couponImage: null,
    couponExpiryDate: '',
    couponCode: '',
    couponTitle: '',
    couponSubtitle: '',
    couponStatus: '',
    couponMiniOrderAmount: '',
    couponValue: '',
    couponDescription: ''
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


  const handleSubmit = () => {
    console.log(formValues);
  };

  return (
    <Box p={3}>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h4">Add Coupon</Typography>
      </Box>

      <Box bgcolor="white" borderRadius={2} boxShadow={3} p={3}>
        <Typography variant="h4">Coupon Information</Typography>
        <Divider sx={{ mb: 2 }} />

        {/* First Row: 3 Fields */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponImage" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Image
              </Typography>
              <TextField name="couponImage" type="file" variant="outlined" fullWidth onChange={handleChange} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponExpiryDate" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Expiry Date
              </Typography>
              <TextField name="couponExpiryDate" type="date" variant="outlined" fullWidth onChange={handleChange} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponCode" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Code
              </Typography>
              <TextField name="couponCode" variant="outlined" fullWidth onChange={handleChange} />
            </FormControl>
          </Grid>
        </Grid>

        {/* Second Row: 4 Fields */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponTitle" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Title
              </Typography>
              <TextField name="couponTitle" variant="outlined" fullWidth onChange={handleChange} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponSubtitle" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Subtitle
              </Typography>
              <TextField name="couponSubtitle" variant="outlined" fullWidth onChange={handleChange} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponStatus" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Status
              </Typography>
              <Select
                name="couponStatus"
                value={formValues.couponStatus}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponMiniOrderAmount" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Mini Order Amount
              </Typography>
              <TextField name="couponMiniOrderAmount" type="number" variant="outlined" fullWidth onChange={handleChange} />
            </FormControl>
          </Grid>
        </Grid>

        {/* Third Row: 2 Fields */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponValue" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Value
              </Typography>
              <TextField name="couponValue" type="number" variant="outlined" fullWidth onChange={handleChange} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <Typography htmlFor="couponDescription" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                Coupon Description
              </Typography>
              <TextField name="couponDescription" variant="outlined" fullWidth onChange={handleChange} multiline rows={4} />
            </FormControl>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box textAlign="left" mt={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Coupon
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCoupon;
