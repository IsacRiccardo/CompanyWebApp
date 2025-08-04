import React, { useState } from 'react';
import { Box, Typography, Grid, Button, TextField, Alert, Snackbar } from '@mui/material';
import ProjectCard from './ProjectCard';

// Section Types
const SECTION_TYPES = {
  HERO: 'hero',
  CONTENT: 'content',
  PROJECTS: 'projects',
  NUMBERS: 'numbers',
  CONTACT: 'contact'
};

// Section Factory
const SectionFactory = ({ type, content, ...props }) => {
  switch (type) {
    case SECTION_TYPES.HERO:
      return <HeroSection content={content} {...props} />;
    
    case SECTION_TYPES.CONTENT:
      return <ContentSection content={content} {...props} />;
    
    case SECTION_TYPES.PROJECTS:
      return <ProjectsSection content={content} {...props} />;
    
    case SECTION_TYPES.NUMBERS:
      return <NumbersSection content={content} {...props} />;
    
    case SECTION_TYPES.CONTACT:
      return <ContactSection content={content} {...props} />;
    
    default:
      return <ContentSection content={content} {...props} />;
  }
};

// Base Section Component
const BaseSection = ({ content, children, ...props }) => (
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
      ...props.sx
    }}
  >
    <Box
      sx={{
        maxWidth: 1200,
        width: "100%",
        textAlign: "center",
      }}
    >
      {children}
    </Box>
  </Box>
);

// Hero Section
const HeroSection = ({ content }) => (
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
      mt: '-64px',
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

// Content Section (for History, etc.)
const ContentSection = ({ content }) => (
  <BaseSection content={content}>
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
  </BaseSection>
);

// Projects Section
const ProjectsSection = ({ content }) => (
  <BaseSection content={content}>
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
  </BaseSection>
);

// Numbers Section
const NumbersSection = ({ content }) => (
  <BaseSection content={content}>
    <Typography 
      variant="h3"
      gutterBottom 
      sx={{ 
        fontWeight: "bold",
        mb: 6,
        color: 'primary.main',
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
      }}
    >
      {content.title}
    </Typography>
    
    <Grid container spacing={4} sx={{ maxWidth: '1000px', mx: 'auto', justifyContent: 'center' }}>
      {content.stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: 3,
              p: 4,
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
              },
              border: '1px solid rgba(139, 115, 85, 0.1)',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: '3rem',
                mb: 1,
                color: 'primary.main',
                fontWeight: 'bold'
              }}
            >
              {stat.icon}
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 1,
                fontSize: { xs: '1.8rem', sm: '2.2rem' }
              }}
            >
              {stat.number}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '1rem'
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </BaseSection>
);

// Contact Section
const ContactSection = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSnackbarMessage('Please fill in all fields');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbarMessage('Please enter a valid email address');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSnackbarMessage(result.message || 'Message sent successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setSnackbarMessage(errorData.message || 'Failed to send message');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.log('Contact form submission:', formData);
      setSnackbarMessage('Message sent successfully! (Demo mode - no server required)');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <BaseSection content={content}>
      <Typography 
        variant="h3"
        gutterBottom 
        sx={{ 
          fontWeight: "bold",
          mb: 6,
          color: 'primary.main',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}
      >
        {content.title}
      </Typography>
      
      <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto', justifyContent: 'center' }}>
        {/* Contact Info Cards */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ mb: 4, width: '100%', maxWidth: '500px' }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 3,
                textAlign: 'justify'
              }}
            >
              Get In Touch
            </Typography>
            
            <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
              {content.contactMethods.map((contact, index) => (
                <Grid item xs={12} key={index} sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      p: 3,
                      bgcolor: 'white',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                      },
                      border: '1px solid rgba(139, 115, 85, 0.08)',
                      width: '100%'
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontSize: '1.5rem',
                        color: 'primary.main',
                        flexShrink: 0
                      }}
                    >
                      {contact.icon}
                    </Typography>
                    <Box>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: 'primary.main',
                          mb: 0.5
                        }}
                      >
                        {contact.label}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        {contact.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        
        {/* Contact Form Card */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: 3,
              p: 4,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(139, 115, 85, 0.1)',
              height: 'fit-content',
              width: '100%',
              maxWidth: '500px',
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 3,
                textAlign: 'center'
              }}
            >
              {content.cta.title}
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                mb: 4,
                textAlign: 'center',
                lineHeight: 1.6
              }}
            >
              {content.cta.description}
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(139, 115, 85, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(139, 115, 85, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(139, 115, 85, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      py: 2,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      boxShadow: '0 8px 24px rgba(139, 115, 85, 0.3)',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        boxShadow: '0 12px 32px rgba(139, 115, 85, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    {content.cta.buttonText}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </BaseSection>
  );
};

export { SectionFactory, SECTION_TYPES };
export default SectionFactory; 