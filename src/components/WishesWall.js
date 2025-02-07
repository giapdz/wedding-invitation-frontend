import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import API_URL from '../config/api';

const WishesWall = () => {
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState('');
  const [senderName, setSenderName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/wishes`);
        setWishes(response.data.reverse());
      } catch (error) {
        console.error('Error fetching wishes:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchWishes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newWish.trim() || !senderName.trim()) return;

    try {
      setSubmitting(true);
      await axios.post(`${API_URL}/api/wishes`, {
        content: newWish.trim(),
        sender: senderName.trim(),
      });
      setNewWish('');
      setSenderName('');
      const fetchWishes = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/wishes`);
          setWishes(response.data.reverse());
        } catch (error) {
          console.error('Error fetching wishes:', error);
        }
      };
      fetchWishes();
    } catch (error) {
      console.error('Error submitting wish:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const getRandomDelay = () => Math.random() * 0.5;
  const getRandomRotate = () => Math.random() * 6 - 3;

  return (
    <Box>
      {/* Form để gửi lời chúc */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '600px',
          mx: 'auto',
          mb: 6,
          px: { xs: 2, md: 0 },
        }}
      >
        <TextField
          multiline
          rows={3}
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
          placeholder="Nhập lời chúc của bạn..."
          variant="outlined"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
              '& fieldset': {
                borderColor: '#917545',
              },
              '&:hover fieldset': {
                borderColor: '#765c38',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#917545',
              },
            },
          }}
        />
        <TextField
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="Tên của bạn"
          variant="outlined"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
              '& fieldset': {
                borderColor: '#917545',
              },
              '&:hover fieldset': {
                borderColor: '#765c38',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#917545',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={submitting}
          sx={{
            bgcolor: '#917545',
            color: 'white',
            '&:hover': {
              bgcolor: '#765c38',
            },
            borderRadius: '25px',
            py: 1.5,
            fontSize: '1rem',
            textTransform: 'none',
          }}
        >
          {submitting ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            'Gửi lời chúc'
          )}
        </Button>
      </Box>

      {/* Hiển thị danh sách lời chúc */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3,
          px: { xs: 2, md: 0 },
        }}
      >
        <AnimatePresence>
          {loading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gridColumn: '1 / -1',
                py: 4,
              }}
            >
              <CircularProgress sx={{ color: '#917545' }} />
            </Box>
          ) : (
            wishes.map((wish, index) => (
              <motion.div
                key={wish._id}
                initial={{ opacity: 0, scale: 0.8, rotate: getRandomRotate() }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: getRandomDelay(),
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: 0,
                  transition: { duration: 0.2 },
                }}
              >
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    borderRadius: '16px',
                    position: 'relative',
                    overflow: 'visible',
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(145, 117, 69, 0.15)',
                    },
                  }}
                >
                  <IconButton
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: -12,
                      bgcolor: '#917545',
                      color: 'white',
                      '&:hover': {
                        bgcolor: '#765c38',
                      },
                    }}
                  >
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ position: 'relative', mb: 2 }}>
                      <FormatQuoteIcon
                        sx={{
                          position: 'absolute',
                          top: -10,
                          left: -10,
                          color: 'rgba(145, 117, 69, 0.2)',
                          transform: 'scale(1.5)',
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#65544D',
                          fontStyle: 'italic',
                          lineHeight: 1.6,
                          minHeight: '80px',
                        }}
                      >
                        {wish.content}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: '#917545',
                        fontWeight: 600,
                        textAlign: 'right',
                        fontFamily: "'Great Vibes', cursive",
                        fontSize: '1.2rem',
                      }}
                    >
                      - {wish.sender}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default WishesWall;
