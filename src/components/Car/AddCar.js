import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormControl, Select, MenuItem, Divider, Grid } from '@mui/material';

const AddCar = () => {
  const [formValues, setFormValues] = useState({
    carName: '',
    carNumber: '',
    carImage: null,
    carStatus: '',
    carRating: '',
    totalSeats: '',
    carAc: '',
    driverName: '',
    driverNumber: '',
    carGearSystem: '',
    carFacility: '',
    carType: '',
    carBrand: '',
    availableCarCity: '',
    carRentWithoutDriver: '',
    carRentWithDriver: '',
    carEngineHp: '',
    carPriceType: '',
    carFuelType: '',
    carDescription: '',
    carPickupAddress: '',
    carLatitude: '',
    carLongitude: '',
    carTotalDrivenKm: '',
    carMinimumHrsRequired: '',
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
        {/* <CarIcon fontSize="large" sx={{ color: "primary.main", mr: 1 }} /> */}
        <Typography variant="h4">Car Management</Typography>
      </Box>

      <Box bgcolor="white" borderRadius={2} boxShadow={3} minWidth={1000} p={3}>
        <Typography variant="h4">Car Information</Typography>
        <Divider sx={{ mb: 2 }} />
        {/* First Row: 4 Fields */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carName" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>  Car Name
              </Typography>
              <TextField name="carName" variant="outlined" fullWidth onChange={handleChange} required   placeholder="Enter car name"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carNumber" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>Car Number
              </Typography>
              <TextField name="carNumber" variant="outlined" fullWidth onChange={handleChange} required   placeholder="Enter car number"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carImage" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Image
              </Typography>
              <TextField name="carImage" type="file" variant="outlined" fullWidth onChange={handleChange} required />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carStatus" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Status
              </Typography>
              <Select
                name="carStatus"
                value={formValues.carStatus}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                 <MenuItem value="" disabled>
          Select car status
        </MenuItem>
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Unavailable">Unavailable</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/* Second Row: 6 Fields */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carRating" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Rating
              </Typography>
              <TextField name="carRating" type="number" variant="outlined" fullWidth required onChange={handleChange} placeholder="Enter Rating" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="totalSeats" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Total Seats
              </Typography>
              <TextField name="totalSeats" type="number" variant="outlined" required fullWidth onChange={handleChange} placeholder="Enter seats" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carAc" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>Car AC
              </Typography>
              <Select
                name="carAc"
                value={formValues.carAc}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                 <MenuItem value="" disabled>
          Select status
        </MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="driverName" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Driver Name
              </Typography>
              <TextField name="driverName" type="text" variant="outlined" fullWidth required onChange={handleChange} placeholder="Driver name" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="driverNumber" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>Driver Number
              </Typography>
              <TextField name="driverNumber" type="number" variant="outlined" fullWidth required onChange={handleChange} placeholder="Driver number" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carGearSystem" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>Car Gear System
              </Typography>
              <Select
                name="carGearSystem"
                value={formValues.carGearSystem}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                 <MenuItem value="" disabled>
          Select System
        </MenuItem>
                <MenuItem value="Automatic">Automatic</MenuItem>
                <MenuItem value="Manual">Manual</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Second Row: 5 Fields */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carFacility" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>  Car Facility
              </Typography>
              <Select
                name="carFacility"
                value={formValues.carFacility}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                <MenuItem value="" disabled>
          Choose Facility
        </MenuItem>
                <MenuItem value="Wifi">Wifi</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carType" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>Car Type
              </Typography>
              <Select
                name="carType"
                value={formValues.carType}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                <MenuItem value="" disabled>
          Choose Car type
        </MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Hatchback">Hatchback</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carBrand" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Brand
              </Typography>
              <Select
                name="carBrand"
                value={formValues.carBrand || ""}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                <MenuItem value="" disabled>
          Choose Car Brand
        </MenuItem>
                <MenuItem value="Toyota">Toyota</MenuItem>
                <MenuItem value="Honda">Honda</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="availableCarCity" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>  Available Car City
              </Typography>
              <TextField name="availableCarCity" variant="outlined" fullWidth required onChange={handleChange} />
            </FormControl>
          </Grid> */}
             <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="availableCarCity" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Available Car City
              </Typography>
              <Select
                name="availableCarCity"
                value={formValues.availableCarCity || ""}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                <MenuItem value="" disabled>
          Choose available City
        </MenuItem>
                <MenuItem value="multan">Multan</MenuItem>
                <MenuItem value="lahore">Lahore</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

     
        {/* Row: 5 Fields */}
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={2.4}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carRentWithoutDriver" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>Car Rent (Without Driver)
              </Typography>
              <TextField name="carRentWithoutDriver" type="number" variant="outlined" required fullWidth onChange={handleChange} placeholder="Rent(Without Driver)"  />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carRentWithDriver" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Rent (With Driver)
              </Typography>
              <TextField name="carRentWithDriver" type="number" variant="outlined" fullWidth required onChange={handleChange} placeholder="Rent(With Driver)" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carEngineHp" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Engine HP
              </Typography>
              <TextField name="carEngineHp" type="number" variant="outlined" fullWidth required onChange={handleChange} placeholder="Enter Car Engine" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carPriceType" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Price Type
              </Typography>
              <Select
                name="carPriceType"
                value={formValues.carPriceType}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                 <MenuItem value="" disabled>
          Select Price
        </MenuItem>
                <MenuItem value="Per Day">Per Day</MenuItem>
                <MenuItem value="Per Hour">Per Hour</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carFuelType" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Fuel Type
              </Typography>
              <Select
                name="carFuelType"
                value={formValues.carFuelType}
                onChange={handleChange}
                fullWidth
                required
                displayEmpty
              >
                <MenuItem value="" disabled>
          Select Fuel
        </MenuItem>
                <MenuItem value="Petrol">Petrol</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {/* Third Row: Map Placeholder */}
        <Box mt={2} mb={2}>
          <Typography variant="h6" mb={1}>Car Location</Typography>
          <Box bgcolor="grey.200" p={2} borderRadius={2}>
            {/* Replace with actual map component */}
            <Typography>Map goes here...</Typography>
          </Box>
        </Box>
        <Grid container spacing={2} mt={2}>
          {/* First Column: Car Description */}
          <Grid item xs={12} md={4}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carDescription" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Description
              </Typography>
              <TextField name="carDescription" variant="outlined" fullWidth onChange={handleChange} multiline rows={4} required />
            </FormControl>
          </Grid>

          {/* Second Column: Car Pickup Address */}
          <Grid item xs={12} md={4}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carPickupAddress" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Pickup Address
              </Typography>
              <TextField name="carPickupAddress" variant="outlined" fullWidth onChange={handleChange} multiline rows={4} required />
            </FormControl>
          </Grid>

          {/* Third Column: Remaining Fields and Button */}
          <Grid item xs={12} md={4}>
            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carLatitude" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography>  Car Latitude
              </Typography>
              <TextField name="carLatitude" type="number" step="0.0001" variant="outlined" fullWidth onChange={handleChange} required placeholder="Enter Car Latitude" />
            </FormControl>

            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carLongitude" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Longitude
              </Typography>
              <TextField name="carLongitude" type="number" step="0.0001" variant="outlined" fullWidth required onChange={handleChange}  placeholder="Enter Car Longitude" />
            </FormControl>

            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carTotalDrivenKm" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Total Driven KM
              </Typography>
              <TextField name="carTotalDrivenKm" type="number" variant="outlined" fullWidth required onChange={handleChange}  placeholder="Enter Total Driven KM" />
            </FormControl>

            <FormControl fullWidth margin="normal" required>
              <Typography htmlFor="carMinimumHrsRequired" sx={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                <Typography component="span" sx={{ color: 'red' }}>*</Typography> Car Minimum Hrs Required
              </Typography>
              <TextField name="carMinimumHrsRequired" type="number" variant="outlined" fullWidth onChange={handleChange} required placeholder="Enter Minimum Hrs"  />
            </FormControl>

            <Box textAlign="center" mt={2}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Add car
              </Button>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </Box>
  );
};

export default AddCar;
