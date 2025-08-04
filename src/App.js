import React from "react";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box,
  ThemeProvider,
} from "@mui/material";

import theme from './theme';
import SectionFactory from './components/SectionFactory';
import { sectionsConfig } from './config/sections';

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 60; // AppBar height (64px) + some padding
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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default' }}>
        {/* Navbar */}
        <AppBar position="fixed" color="primary">
          <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
            {navigation.map(({ id, label }) => (
              <Button 
                key={id}
                color="inherit" 
                onClick={() => scrollTo(id)}
              >
                {label}
              </Button>
            ))}
          </Toolbar>
        </AppBar>

        {/* Page content using Factory Pattern */}
        <Box sx={{ pt: 10 }}>
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
