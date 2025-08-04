import React, { useState, useEffect } from "react";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box,
  ThemeProvider,
  Container,
  Typography,
  useScrollTrigger,
  Slide,
  Fade,
} from "@mui/material";

import theme from './theme';
import SectionFactory from './components/SectionFactory';
import { sectionsConfig } from './config/sections';

// Hide navbar on scroll down, show on scroll up
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Increased offset for better spacing
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const navigation = [
  { id: "history", label: "Our History" },
  { id: "projects", label: "Projects" },
  { id: "numbers", label: "Numbers" },
  { id: "contact", label: "Contact" }
];

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  // Track active section based on scroll position
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = navigation.map(nav => nav.id);
          const scrollPosition = window.scrollY + 100;

          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i]);
            if (element && element.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default' }}>
        {/* Enhanced Navbar */}
        <HideOnScroll>
          <AppBar 
            position="fixed" 
            sx={{
              background: 'linear-gradient(135deg, rgba(139, 115, 85, 0.95) 0%, rgba(139, 115, 85, 0.98) 100%)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              willChange: 'transform',
            }}
          >
            <Container maxWidth="lg">
              <Toolbar sx={{ 
                justifyContent: "space-between", 
                py: 1,
                minHeight: '70px'
              }}>
                {/* Logo/Brand */}
                <Fade in timeout={1000}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '1.2rem'
                    }}
                  >
                    BuildMaster
                  </Typography>
                </Fade>

                {/* Navigation Buttons */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1,
                  alignItems: 'center'
                }}>
                  {navigation.map(({ id, label }) => (
                    <Button 
                      key={id}
                      onClick={() => scrollTo(id)}
                                             sx={{
                         color: activeSection === id ? 'white' : 'rgba(255, 255, 255, 0.8)',
                         fontWeight: activeSection === id ? 'bold' : 'normal',
                         textTransform: 'none',
                         fontSize: '0.95rem',
                         px: 2,
                         py: 1,
                         borderRadius: 2,
                         position: 'relative',
                         transition: 'color 0.2s ease, background-color 0.2s ease, transform 0.2s ease',
                         willChange: 'transform',
                         '&:hover': {
                           color: 'white',
                           backgroundColor: 'rgba(255, 255, 255, 0.1)',
                           transform: 'translateY(-1px)',
                         },
                         '&::after': activeSection === id ? {
                           content: '""',
                           position: 'absolute',
                           bottom: 0,
                           left: '50%',
                           transform: 'translateX(-50%)',
                           width: '60%',
                           height: '2px',
                           backgroundColor: 'white',
                           borderRadius: '1px',
                         } : {},
                       }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>

        {/* Page content using Factory Pattern */}
        <Box sx={{ pt: 12 }}>
          {sectionsConfig.map((section, index) => (
            <SectionFactory
              key={section.content.id}
              type={section.type}
              content={section.content}
            />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
