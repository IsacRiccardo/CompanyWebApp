import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './components/ProjectCard';
import content from './content';

const Projects = () => (
  <Box
    id={content.id}
    sx={{
      background: content.bg,
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
      <Box sx={{ mt: 6, width: '100%' }}>
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ 
            maxWidth: '1400px',
            margin: '0 auto',
            px: { xs: 2, md: 4 }
          }}
        >
          {content.projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </Box>
);

export default Projects;
