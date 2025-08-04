import React from 'react';
import { Box, Typography } from '@mui/material';

const Hero = () => {
  const content = {
    id: "company-name",
    bg: "linear-gradient(rgba(139, 115, 85, 0.9), rgba(109, 90, 67, 0.85)), url('/images/hero-bg.jpg')",
    title: "BuildMaster Construction",
    subtitle: "Building Tomorrow's Legacy Today",
    variant: "hero"
  };

  return (
    <Box
      id={content.id}
      sx={{
        minHeight: '80vh',
        maxHeight: '800px',
        background: content.bg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'primary.dark',
        backgroundAttachment: 'fixed',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 4,
        py: 8,
        mt: '-64px', // Compensate for AppBar height
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography 
          variant="h1"
          gutterBottom 
          sx={{ 
            fontWeight: "bold",
            mb: 4,
            color: '#ffffff',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {content.title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            whiteSpace: "pre-line",
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 500,
          }}
        >
          {content.subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
