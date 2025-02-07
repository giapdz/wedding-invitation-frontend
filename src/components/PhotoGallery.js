import React, { useState, useEffect } from 'react';
import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import API_URL from '../config/api';

const PHOTOS_PER_PAGE = 9; // 3x3 grid for desktop

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalPhotos, setTotalPhotos] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/photos?page=1&limit=${PHOTOS_PER_PAGE}`);
        const { photos: newPhotos, total, totalPages } = response.data;
        
        setPhotos(newPhotos);
        setTotalPhotos(total);
        setHasMore(1 < totalPages);
        setPage(1);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  const fetchPhotos = async (pageNum) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/photos?page=${pageNum}&limit=${PHOTOS_PER_PAGE}`);
      const { photos: newPhotos, total, totalPages } = response.data;
      
      if (pageNum === 1) {
        setPhotos(newPhotos);
      } else {
        setPhotos(prev => [...prev, ...newPhotos]);
      }
      
      setTotalPhotos(total);
      setHasMore(pageNum < totalPages);
      setPage(pageNum);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePhotos = () => {
    if (!loading && hasMore) {
      fetchPhotos(page + 1);
    }
  };

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  const handlePrevious = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
      setSelectedPhoto(photos[currentPhotoIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
      setSelectedPhoto(photos[currentPhotoIndex + 1]);
    }
  };

  const getColumnCount = () => {
    if (isMobile) return 2;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <Box 
      sx={{ 
        width: '100%',
        overflowY: 'hidden',
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "'Great Vibes', cursive",
            color: '#917545',
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 1,
          }}
        >
          Album Hình Cưới
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#65544D',
            fontStyle: 'italic',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Những khoảnh khắc đẹp nhất của chúng tôi
        </Typography>
      </Box>

      <AnimatePresence mode="popLayout">
        <ImageList
          variant="masonry"
          cols={getColumnCount()}
          gap={16}
          sx={{
            mb: 2,
            '& .MuiImageListItem-root': {
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              },
            },
          }}
        >
          {photos.map((photo, index) => (
            <ImageListItem
              key={photo}
              component={motion.div}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                layout: { duration: 0.3 }
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              onClick={() => handlePhotoClick(photo, index)}
              sx={{ cursor: 'pointer' }}
            >
              <motion.img
                src={`${API_URL}/api${photo}`}
                alt={`Wedding photo ${index + 1}`}
                loading="lazy"
                style={{ 
                  borderRadius: '12px',
                  width: '100%',
                  height: 'auto',
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </AnimatePresence>

      {(hasMore || loading) && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            mt: 4,
            mb: 2,
          }}
        >
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variant="outlined"
            onClick={loadMorePhotos}
            disabled={loading}
            sx={{
              color: '#917545',
              borderColor: '#917545',
              '&:hover': {
                borderColor: '#765c38',
                backgroundColor: 'rgba(145, 117, 69, 0.04)',
              },
              borderRadius: '25px',
              px: 4,
              py: 1.5,
              minWidth: '200px',
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: '#917545' }} />
            ) : (
              'Xem thêm ảnh cưới'
            )}
          </Button>
          <Typography
            variant="body2"
            sx={{ 
              color: '#917545',
              fontStyle: 'italic',
              opacity: 0.8,
            }}
          >
            {photos.length} / {totalPhotos} ảnh
          </Typography>
        </Box>
      )}

      <Modal
        open={Boolean(selectedPhoto)}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          bgcolor: 'rgba(0, 0, 0, 0.9)',
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: -40,
              top: -40,
              color: 'white',
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          {currentPhotoIndex > 0 && (
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: -50,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          )}

          {currentPhotoIndex < photos.length - 1 && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: -50,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          )}

          {selectedPhoto && (
            <motion.img
              src={`${API_URL}/api${selectedPhoto}`}
              alt="Selected wedding photo"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '12px',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default PhotoGallery;
