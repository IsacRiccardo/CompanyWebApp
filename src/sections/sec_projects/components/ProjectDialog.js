import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
  Grid
} from '@mui/material';

const ProjectSpecs = ({ specs }) => (
  <>
    <Typography 
      variant="h6" 
      gutterBottom 
      sx={{ 
        color: 'primary.main',
        fontWeight: 'bold',
        mb: 3
      }}
    >
      Project Specifications
    </Typography>
    <Grid container spacing={2} sx={{ mb: 4 }}>
      {Object.entries(specs).map(([key, value]) => (
        <Grid item xs={12} sm={6} key={key}>
          <Box
            sx={{
              bgcolor: 'grey.50',
              p: 2,
              borderRadius: 2,
              height: '100%'
            }}
          >
            <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
              {key}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 0.5 }}>
              {value}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </>
);

const ProjectOverview = ({ fullDescription }) => (
  <>
    <Typography 
      variant="h6" 
      gutterBottom 
      sx={{ 
        color: 'primary.main',
        fontWeight: 'bold',
        mb: 3
      }}
    >
      Project Overview
    </Typography>
    <Typography 
      variant="body1" 
      sx={{ 
        whiteSpace: 'pre-line',
        mb: 4,
        lineHeight: 1.8
      }}
    >
      {fullDescription}
    </Typography>
  </>
);

const ProjectDialog = ({ open, onClose, project }) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="lg"
    fullWidth
    sx={{
      '& .MuiDialog-paper': {
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      }
    }}
    PaperProps={{
      sx: {
        borderRadius: 2,
        overflow: 'hidden'
      }
    }}
  >
    <DialogTitle
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        px: 4,
        py: 3,
      }}
    >
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
        {project.title}
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.9 }}>
        Completed in {project.year}
      </Typography>
    </DialogTitle>
    <DialogContent sx={{ p: 0 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'sticky', top: 0 }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4 }}>
            <ProjectOverview fullDescription={project.fullDescription} />
            <ProjectSpecs specs={project.specs} />
          </Box>
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions sx={{ p: 3, bgcolor: 'grey.50' }}>
      <Button 
        onClick={onClose}
        variant="outlined"
        sx={{ 
          borderRadius: 2,
          px: 4,
          textTransform: 'none'
        }}
      >
        Close Project Details
      </Button>
    </DialogActions>
  </Dialog>
);

export default ProjectDialog;
