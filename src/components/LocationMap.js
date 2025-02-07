import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const LocationMap = () => {
  const locations = [
    {
      title: 'Nhà Trai',
      address: 'Xóm 6, thôn Phúc Thịnh, Thái Thịnh, Thái Thuỵ, Thái Bình',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d934.3989595450112!2d106.50872946949632!3d20.481786655139853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI4JzU0LjQiTiAxMDbCsDMwJzMzLjciRQ!5e0!3m2!1svi!2s!4v1738492398064!5m2!1svi!2s'
    },
    {
      title: 'Nhà Gái',
      address: 'Đội 9, thôn Xuân Khê,Thái Thịnh, Kinh Môn, Hải Dương',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d931.3782926907089!2d106.57521736949724!3d20.972056851055296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU4JzE5LjQiTiAxMDbCsDM0JzMzLjEiRQ!5e0!3m2!1sen!2s!4v1738492032849!5m2!1sen!2s'
    }
  ];

  return (
    <Grid container spacing={4}>
      {locations.map((location, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon />
              {location.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {location.address}
            </Typography>
            <Box sx={{ width: '100%', height: '300px', mt: 2 }}>
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={`${location.title} Location`}
              />
            </Box>
            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
              Click vào bản đồ để xem chỉ đường chi tiết
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default LocationMap;
