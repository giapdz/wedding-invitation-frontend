import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = useMemo(() => new Date('2025-03-09T10:00:00'), []);
  
  const lunarDate = {
    day: 10,
    month: 2,
    year: 2025
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = weddingDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Nếu đã qua ngày cưới, hiển thị 0
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeUnit = (value, unit) => (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mx: { xs: 1, md: 2 },
    }}>
      <Paper elevation={3} sx={{
        width: { xs: 60, md: 80 },
        height: { xs: 60, md: 80 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 2,
      }}>
        <Typography variant="h4" sx={{
          fontWeight: 'bold',
          color: '#917545',
        }}>
          {value}
        </Typography>
      </Paper>
      <Typography sx={{
        mt: 1,
        color: 'white',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
      }}>
        {unit}
      </Typography>
    </Box>
  );

  const formatDate = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} (${hours}:${minutes})`;
  };

  return (
    <Box sx={{
      py: 8,
      px: 2,
      backgroundImage: 'url("/images/countdown-bg.jpg")',
      backgroundSize: {
        xs: '100% auto', 
        md: 'cover'      
      },
      backgroundPosition: {
        xs: 'center',
        md: 'center 30%' 
      },
      height: {
        xs: 'auto',
        md: '600px'     
      },
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }
    }}>
      <Box sx={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      }}>
        <Typography variant="h5" sx={{
          mb: 1,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          fontFamily: "'Great Vibes', cursive",
          fontSize: { xs: '2rem', md: '2.5rem' },
          letterSpacing: '0.1em',
        }}>
          Save The Date
        </Typography>

        <Typography variant="h6" sx={{
          mb: 3,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          fontFamily: "'Playfair Display', serif",
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          fontStyle: 'italic',
        }}>
          Cùng đếm ngược thời gian đến ngày chúng tôi về chung một nhà
        </Typography>

        <Box sx={{
          position: 'relative',
          height: '40px',
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <FavoriteIcon sx={{
            position: 'absolute',
            fontSize: '40px',
            color: '#ff6b6b',
            animation: 'pulse1 1.5s infinite',
            '@keyframes pulse1': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.1)' },
              '100%': { transform: 'scale(1)' },
            },
          }} />
          <FavoriteIcon sx={{
            position: 'absolute',
            fontSize: '30px',
            color: '#ff8787',
            animation: 'pulse2 1.5s infinite',
            '@keyframes pulse2': {
              '0%': { transform: 'scale(1.1)' },
              '50%': { transform: 'scale(1)' },
              '100%': { transform: 'scale(1.1)' },
            },
          }} />
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          mb: 4,
        }}>
          {timeUnit(timeLeft.days, 'Ngày')}
          {timeUnit(timeLeft.hours, 'Giờ')}
          {timeUnit(timeLeft.minutes, 'Phút')}
          {timeUnit(timeLeft.seconds, 'Giây')}
        </Box>

        <Typography variant="h6" sx={{
          mt: 2,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          fontFamily: "'Playfair Display', serif",
          fontSize: { xs: '1rem', md: '1.2rem' },
        }}>
          {formatDate(weddingDate)}
          <br />
          {`(Ngày ${lunarDate.day} tháng ${lunarDate.month} năm ${lunarDate.year} Âm lịch)`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Countdown;
