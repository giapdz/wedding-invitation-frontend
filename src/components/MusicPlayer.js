import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, Fade } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PauseIcon from '@mui/icons-material/Pause';
import weddingMusic from '../assets/music/I Do.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(weddingMusic));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Fade in={true}>
      <Box
        sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={togglePlay}
          sx={{
            bgcolor: '#B8860B',
            color: 'white',
            '&:hover': {
              bgcolor: '#DAA520',
            },
            width: '50px',
            height: '50px',
            boxShadow: '0 4px 10px rgba(184, 134, 11, 0.2)',
            animation: isPlaying ? 'rotate 4s linear infinite' : 'none',
            '@keyframes rotate': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(360deg)',
              },
            },
          }}
        >
          {isPlaying ? <PauseIcon /> : <MusicNoteIcon />}
        </IconButton>
      </Box>
    </Fade>
  );
};

export default MusicPlayer;
