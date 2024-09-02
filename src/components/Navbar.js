import React from 'react';
import { AppBar, Toolbar, IconButton} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
    <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton edge="end" color="inherit">
        <AccountCircle style={{ color: 'black' }} />
      </IconButton>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
