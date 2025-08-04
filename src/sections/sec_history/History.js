import React from 'react';
import { Box, Typography } from '@mui/material';
import content from './content';

const History = () => (
  <Box
    id={content.id}
    sx={{
      background: content.bg,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      px: 4,
      py: 6,
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
        variant="h3"
        gutterBottom 
        sx={{ 
          fontWeight: "bold",
          mb: 4,
          color: 'primary.main',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}
      >
        {content.title}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          whiteSpace: "pre-line",
          fontSize: '1.1rem',
          lineHeight: 1.8,
          fontWeight: 400,
        }}
      >
        {content.subtitle}
      </Typography>
    </Box>
  </Box>
);

export default History;
