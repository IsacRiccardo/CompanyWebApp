import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  Chip
} from '@mui/material';
import ProjectDialog from './ProjectDialog';

const ProjectCardMedia = ({ image, title, year, isHovered }) => (
  <Box sx={{ 
    position: 'relative', 
    overflow: 'hidden',
    borderRadius: '12px 12px 0 0',
  }}>
    <CardMedia
      component="img"
      height="300"
      image={image}
      alt={title}
      sx={{
        transition: 'all 0.5s ease-in-out',
        transform: isHovered ? 'scale(1.1)' : 'scale(1.01)',
        filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        px: 2,
        py: 1,
        borderRadius: 2,
        backdropFilter: 'blur(4px)',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        letterSpacing: '0.05em',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease-in-out',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {year}
    </Box>
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
        opacity: isHovered ? 1 : 0.8,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  </Box>
);

const ProjectCardContent = ({ title, specs, shortDescription }) => (
  <CardContent sx={{ 
    flexGrow: 1, 
    pt: 3,
    pb: '24px !important',
    px: 3,
  }}>
    <Typography 
      gutterBottom 
      variant="h5" 
      component="h2"
      sx={{ 
        fontWeight: '600',
        color: 'text.primary',
        minHeight: '64px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        fontSize: '1.5rem',
        letterSpacing: '-0.01em',
        mb: 2,
      }}
    >
      {title}
    </Typography>
    <Typography 
      variant="body1"
      sx={{
        color: 'text.secondary',
        minHeight: '48px',
        mb: 3,
        lineHeight: 1.6,
      }}
    >
      {shortDescription}
    </Typography>
    <Box sx={{ 
      display: 'flex', 
      gap: 1.5, 
      flexWrap: 'wrap',
      mt: 'auto',
    }}>
      {Object.entries(specs).slice(0, 2).map(([key, value]) => (
        <Chip
          key={key}
          label={`${value}`}
          size="medium"
          sx={{ 
            bgcolor: 'rgba(25, 118, 210, 0.08)',
            color: 'primary.main',
            fontWeight: 500,
            '&:hover': {
              bgcolor: 'rgba(25, 118, 210, 0.12)',
            }
          }}
        />
      ))}
    </Box>
  </CardContent>
);

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-12px)',
            boxShadow: '0 22px 45px rgba(0, 0, 0, 0.1)',
          },
          position: 'relative',
          overflow: 'visible',
          borderRadius: '12px',
          bgcolor: 'white',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.07)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ProjectCardMedia {...project} isHovered={isHovered} />
        <ProjectCardContent {...project} />
        <CardActions sx={{ p: 3, pt: 0 }}>
          <Button 
            fullWidth
            variant="contained" 
            color="primary" 
            onClick={() => setOpen(true)}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              py: 1.5,
              fontWeight: 600,
              letterSpacing: '0.01em',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)'
              }
            }}
          >
            View Project Details
          </Button>
        </CardActions>
      </Card>

      <ProjectDialog 
        open={open} 
        onClose={() => setOpen(false)} 
        project={project} 
      />
    </>
  );
};

export default ProjectCard;