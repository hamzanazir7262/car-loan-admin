import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const Dashboard = () => {
  const cardData = [
    {
      id: 1,
      image: '/download.png', // Replace with actual image paths
      title: 'Banner',
      count: 1234,
    },
    {
      id: 2,
      image: '/download.png',
      title: 'City',
      count: 567,
    },
    {
      id: 3,
      image: '/download.png',
      title: 'Faq',
      count: '$12,345',
    },
    {
      id: 4,
      image: '/download.png',
      title: 'User',
      count: '$12,345',
    },
    {
      id: 5,
      image: '/download.png',
      title: 'Car',
      count: '$12,345',
    },
    {
      id: 6,
      image: '/download.png',
      title: 'Gallery',
      count: '$12,345',
    },
    // Add more cards as needed
  ];

  return (
    <Box p={5}>
      <Typography variant="h4" gutterBottom>
        Report Data
      </Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3}>
        {cardData.map((card) => (
          <Card key={card.id} style={{ display: 'flex', width: '250px',padding:10}}>
            <CardMedia
              component="img"
              sx={{ width: 100, objectFit: 'cover' }}
              image={card.image}
              alt={card.title}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <Typography sx={{ marginBottom: '8px' , backgroundColor: '#0B20EE',textAlign:"center",borderRadius:5,fontSize:14,paddingLeft:1,paddingRight:1}}>
                {card.title}
              </Typography>
              <Typography color="black" sx={{fontSize:14}}>
                {card.count}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
