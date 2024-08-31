import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Drawer, IconButton } from '@mui/material';
import { Dashboard, DirectionsCar, LocationCity, BrandingWatermark, PhotoLibrary, QuestionAnswer, LocalOffer, Pageview, Book, People, Menu } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleClick = (text) => {
    setOpen(prev => ({ ...prev, [text]: !prev[text] }));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { icon: <Dashboard />, text: 'Dashboard', link: '/dashboard' },
    {
      icon: <PhotoLibrary />, text: 'Banner', subItems: [
        { text: ' Add Banner', link: '/banner/add' },
        { text: ' List Banner', link: '/banner/list' }
      ]
    },
    {
      icon: <LocationCity />, text: 'City', subItems: [
        { text: ' Add City', link: '/city/add' },
        { text: ' List City', link: '/city/list' }
      ]
    },
    {
      icon: <DirectionsCar />, text: 'Car Type', subItems: [
        { text: ' Add Car Type', link: '/cartype/add' },
        { text: ' List Car Type', link: '/cartype/list' }
      ]
    },
    {
      icon: <BrandingWatermark />, text: 'Car Brand', subItems: [
        { text: ' Add Car Brand', link: '/carbrand/add' },
        { text: ' List Car Brand', link: '/carbrand/list' }
      ]
    },
    {
      icon: <DirectionsCar />, text: 'Car', subItems: [
        { text: ' Add Car', link: '/car/add' },
        { text: ' List Car', link: '/car/list' }
      ]
    },
    {
      icon: <PhotoLibrary />, text: 'Gallery', subItems: [
        { text: ' Add Gallery', link: '/gallery/add' },
        { text: ' List Gallery', link: '/gallery/list' }
      ]
    },
    {
      icon: <QuestionAnswer />, text: 'FAQ', subItems: [
        { text: ' Add FAQ', link: '/faq/add' },
        { text: ' List FAQ', link: '/faq/list' }
      ]
    },
    {
      icon: <LocalOffer />, text: 'Facility', subItems: [
        { text: ' Add Facility', link: '/facility/add' },
        { text: ' List Facility', link: '/facility/list' }
      ]
    },
    {
      icon: <LocalOffer />, text: 'Coupon', subItems: [
        { text: 'Add Coupon', link: '/coupon/add' },
        { text: 'List Coupon', link: '/coupon/list' }
      ]
    },
    {
      icon: <Pageview />, text: 'Page', subItems: [
        { text: 'Add Page', link: '/page/add' },
        { text: 'List Page', link: '/page/list' }
      ]
    },
    {
      icon: <Book />, text: 'Booking', subItems: [
        { text: 'Pending Booking', link: '/booking/pending' },
        { text: 'Cancelled Booking', link: '/booking/cancelled' },
        { text: 'Pick Booking', link: '/booking/pick' },
        { text: 'Drop Booking', link: '/booking/drop' },
        { text: 'Completed Booking', link: '/booking/completed' }
      ]
    },
    { icon: <People />, text: 'Users', link: '/users' }
  ];

  const isActive = (item) => {
    if (item.link && location.pathname === item.link) {
      return true;
    }
    if (item.subItems) {
      return item.subItems.some(subItem => location.pathname === subItem.link);
    }
    return false;
  };

  const sidebarContent = (
    <div style={{ width: '240px', backgroundColor: '#171829', color: 'white', padding: '1rem', height: '100vh', overflowY: 'auto' }}>
      {/* Logo and Dashboard Icon Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", marginBottom: '2rem' }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '1rem'
        }}>
          <img src="/logocar.jpeg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <ListItemIcon style={{ color: 'white' }}>
          <Dashboard />
        </ListItemIcon>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              component={Link}
              to={item.link || '#'}
              onClick={() => item.subItems && handleClick(item.text)}
              style={{
                color: isActive(item) ? 'white' : 'inherit'
              }}
            >
              <ListItemIcon style={{ color: isActive(item) ? 'blue' : 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
            {item.subItems && (
              <Collapse in={open[item.text]}>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem
                      button
                      component={Link}
                      to={subItem.link}
                      key={subIndex}
                      style={{
                        paddingLeft: '2rem',
                        color: location.pathname === subItem.link ? 'blue' : 'inherit'
                      }}
                    >
                      - <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton onClick={toggleDrawer} style={{ color: 'black' }}>
            <Menu />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer}
            PaperProps={{ style: { backgroundColor: '#171829', color: 'white' } }}
          >
            {sidebarContent}
          </Drawer>
        </>
      ) : (
        sidebarContent
      )}
    </>
  );
};

export default Sidebar;
