import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white', padding: '0 1rem', zIndex: 1100 }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ color: 'black' }}>
          {/* Optional: Add title or logo here */}
          Dashboard
        </Typography>
        <IconButton edge="end" color="inherit">
          <AccountCircle style={{ color: 'black' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
