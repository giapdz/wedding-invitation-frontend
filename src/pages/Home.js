import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Button,
  Modal,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import RSVPForm from '../components/RSVPForm';
import PhotoGallery from '../components/PhotoGallery';
import LocationMap from '../components/LocationMap';
import WishesWall from '../components/WishesWall';
import MusicPlayer from '../components/MusicPlayer';

const Home = () => {
  const weddingDate = "2025-03-09T10:00:00";
  const groomPartyDate = "2025-03-09T10:00:00";
  const bridePartyDate = "2025-03-09T08:00:00";

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const NameTypography = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <Typography
        variant="h4"
        component="span"
        sx={{
          display: 'inline-block',
          color: 'white',
          fontFamily: "'Great Vibes', cursive",
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
          fontWeight: 500,
          letterSpacing: '0.05em',
        }}
      >
        {children}
      </Typography>
    </motion.div>
  );

  const [openRSVP, setOpenRSVP] = useState(false);
  const [openGift, setOpenGift] = useState(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: '500px' },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    maxHeight: '90vh',
    overflow: 'auto',
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          color: 'white',
          textAlign: 'center',
          py: { xs: 10, md: 0 },
          '@supports (-webkit-touch-callout: none)': {
            backgroundAttachment: 'scroll',
          },
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
            px: { xs: 2, md: 3 },
            mx: 'auto',
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 'md',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 6, md: 8 },
            }}
          >
            <Typography
              variant="h2"
              component={motion.h2}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: { xs: '3rem', sm: '4.5rem', md: '5rem' },
                background: 'linear-gradient(45deg, #D4AF37, #FFD700)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.15)',
                mb: { xs: 2, md: 3 },
              }}
            >
              Happy Wedding
            </Typography>

            <Box sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center', 
              alignItems: 'center',
              gap: { xs: 3, sm: 4, md: 5 },
              position: 'relative',
              zIndex: 2,
            }}>
              <NameTypography>Hoàng Giáp</NameTypography>
              <Typography 
                variant="h4" 
                component="span"
                sx={{ 
                  color: 'white',
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.15)',
                  fontWeight: 600,
                }}
              >
                &
              </Typography>
              <NameTypography>Trần Thảo</NameTypography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                color: '#D4AF37',
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' },
                letterSpacing: 2,
                textTransform: 'uppercase',
                textShadow: '2px 2px 4px rgba(0,0,0,0.15)',
                fontWeight: 600,
                mt: { xs: 2, md: 3 },
              }}
            >
              {new Date(weddingDate).toLocaleDateString('vi-VN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container 
          maxWidth="lg"
          sx={{
            px: { xs: 2, md: 3 },
          }}
        >
          {/* Invitation Card */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, sm: 4, md: 8 },
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center',
              mb: 4,
              width: '100%',
              position: 'relative',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '15px',
                left: '15px',
                right: '15px',
                bottom: '15px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '4px',
                pointerEvents: 'none',
              },
            }}
          >
            <Box sx={{ 
              mb: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}>
              <Typography
                variant="h4"
                sx={{ 
                  color: '#B8860B',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(to right, transparent, #B8860B, transparent)',
                  }
                }}
              >
                Thiệp Mời
              </Typography>

              <Typography
                variant="h6"
                sx={{ 
                  color: '#666666',
                  fontWeight: 'light',
                  letterSpacing: 1,
                  lineHeight: 2,
                  maxWidth: '800px',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontFamily: "'Playfair Display', serif",
                  textAlign: 'center',
                  '& strong': {
                    color: '#B8860B',
                    fontWeight: 600,
                    display: 'block',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    mb: 2,
                  },
                  '& .subtitle': {
                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                    color: '#B8860B',
                    opacity: 0.9,
                    fontStyle: 'italic',
                    mt: 1,
                  }
                }}
              >
                <strong>Trân Trọng Kính Mời</strong>
                Bạn và người thương
                <div className="subtitle">
                  Đến dự bữa tiệc chung vui trong ngày thành hôn của
                </div>
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 2, md: 3 },
                my: 3,
                '& .MuiTypography-root': {
                  color: '#B8860B',
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                }
              }}>
                <Typography>
                  Hoàng Giáp
                </Typography>
                <Typography sx={{ 
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mx: { xs: 1, md: 2 }
                }}>
                  &
                </Typography>
                <Typography>
                  Trần Thảo
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{ 
                  color: '#666666',
                  fontStyle: 'italic',
                  mt: 2,
                  opacity: 0.9,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                }}
              >
                Sự hiện diện của bạn là niềm vinh hạnh cho chúng tôi
              </Typography>
            </Box>

            <Grid container spacing={{ xs: 3, md: 6 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: { xs: 2, sm: 3, md: 4 }, 
                  height: '100%',
                  borderRight: { md: '1px solid rgba(184, 134, 11, 0.2)' },
                  borderBottom: { xs: '1px solid rgba(184, 134, 11, 0.2)', md: 'none' },
                }}>
                  <Typography variant="h5" sx={{ 
                    mb: 3, 
                    color: '#B8860B', 
                    textAlign: 'center',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                  }}>
                    Nhà Trai
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 2,
                    color: '#666666',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}>
                    <strong>Thời gian:</strong>
                    <br />
                    {formatDate(groomPartyDate)}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 2,
                    color: '#666666',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}>
                    <strong>Địa điểm:</strong>
                    <br />
                    Xóm 6, thôn Phúc Thịnh
                    <br />
                    Thái Thịnh, Thái Thuỵ, Thái Bình
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, height: '100%' }}>
                  <Typography variant="h5" sx={{ 
                    mb: 3, 
                    color: '#B8860B', 
                    textAlign: 'center',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                  }}>
                    Nhà Gái
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 2,
                    color: '#666666',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}>
                    <strong>Thời gian:</strong>
                    <br />
                    {formatDate(bridePartyDate)}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 2,
                    color: '#666666',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}>
                    <strong>Địa điểm:</strong>
                    <br />
                    Đội 9, thôn Xuân Khê
                    <br />
                    Thái Thịnh, Kinh Môn, Hải Dương
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Countdown Timer */}
          <Countdown weddingDate={weddingDate} />

          {/* Photo Gallery */}
          <PhotoGallery />

          {/* Location Map */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              textAlign: 'center',
              mt: 8,
              mb: 4,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                color: '#B8860B',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 1,
              }}
            >
              Địa Điểm Tổ Chức
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                fontStyle: 'italic',
                maxWidth: '600px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Hân hạnh được đón tiếp quý khách tại địa điểm
            </Typography>
            <LocationMap />
          </Box>

          {/* Wishes Section */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              textAlign: 'center',
              mt: 8,
              mb: 4,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                color: '#B8860B',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 1,
              }}
            >
              Lời Chúc
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                fontStyle: 'italic',
                maxWidth: '600px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Gửi lời chúc mừng hạnh phúc đến cô dâu chú rể
            </Typography>
            <Box
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                px: { xs: 2, md: 4 },
              }}
            >
              <WishesWall />
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 2, md: 4 },
              mt: 8,
              mb: 6,
              flexWrap: 'wrap',
            }}
          >
            <Button
              component={motion.button}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(184, 134, 11, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              startIcon={<HowToRegIcon />}
              onClick={() => setOpenRSVP(true)}
              sx={{
                bgcolor: '#B8860B',
                '&:hover': {
                  bgcolor: '#DAA520',
                },
                px: { xs: 3, md: 4 },
                py: 1.5,
                borderRadius: '25px',
                fontSize: { xs: '0.9rem', md: '1rem' },
                textTransform: 'none',
                boxShadow: '0 4px 10px rgba(184, 134, 11, 0.2)',
              }}
            >
              Xác nhận tham dự
            </Button>
            <Button
              component={motion.button}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px rgba(184, 134, 11, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              startIcon={<CardGiftcardIcon />}
              onClick={() => setOpenGift(true)}
              sx={{
                bgcolor: '#B8860B',
                '&:hover': {
                  bgcolor: '#DAA520',
                },
                px: { xs: 3, md: 4 },
                py: 1.5,
                borderRadius: '25px',
                fontSize: { xs: '0.9rem', md: '1rem' },
                textTransform: 'none',
                boxShadow: '0 4px 10px rgba(184, 134, 11, 0.2)',
              }}
            >
              Mừng cưới tới cô dâu & chú rể
            </Button>
          </Box>

          {/* Thank You Section */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              textAlign: 'center',
              mt: 8,
              mb: 4,
              position: 'relative',
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                width: { xs: '80px', md: '120px' },
                height: '1px',
                background: 'linear-gradient(to right, transparent, #B8860B, transparent)',
                top: '50%',
              },
              '&::before': {
                left: { xs: '10%', md: '20%' },
              },
              '&::after': {
                right: { xs: '10%', md: '20%' },
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                color: '#B8860B',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Thank you
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: '#666666',
                fontStyle: 'italic',
                fontSize: { xs: '0.9rem', md: '1rem' },
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.8,
              }}
            >
              Sự hiện diện của bạn trong ngày trọng đại này là niềm vinh hạnh của chúng tôi.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Great Vibes', cursive",
                color: '#B8860B',
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                mt: 3,
              }}
            >
              Hoàng Giáp ❤️ Trần Thảo
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Modals */}
      <Modal
        open={openRSVP}
        onClose={() => setOpenRSVP(false)}
      >
        <Paper sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#B8860B' }}>
              Xác nhận tham dự
            </Typography>
            <IconButton onClick={() => setOpenRSVP(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ mt: 2 }}>
            <RSVPForm />
          </Box>
        </Paper>
      </Modal>

      <Modal
        open={openGift}
        onClose={() => setOpenGift(false)}
      >
        <Paper sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#B8860B' }}>
              Mừng cưới
            </Typography>
            <IconButton onClick={() => setOpenGift(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Chú rể
              </Typography>
              <Typography variant="body1" gutterBottom>
                HOÀNG VĂN GIÁP
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Ngân hàng: Techcombank
              </Typography>
              <Typography variant="body2" color="text.secondary">
                STK: 110383377901
              </Typography>
              <Box sx={{ mt: 2 }}>
                <img 
                  src="/images/qr-code-groom.jpg" 
                  alt="QR Chú rể"
                  style={{ maxWidth: '200px', width: '100%' }}
                />
              </Box>
            </Box>

            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                Cô dâu
              </Typography>
              <Typography variant="body1" gutterBottom>
                TRẦN THỊ THẢO
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Ngân hàng: Vietcombank
              </Typography>
              <Typography variant="body2" color="text.secondary">
                STK: 0341007193757
              </Typography>
              <Box sx={{ mt: 2 }}>
                <img 
                  src="/images/qr-code-bride.jpg" 
                  alt="QR Cô dâu"
                  style={{ maxWidth: '200px', width: '100%' }}
                />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Modal>
      <MusicPlayer />
    </Box>
  );
};

export default Home;
