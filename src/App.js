import React from "react";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box,
  ThemeProvider,
} from "@mui/material";

import theme from './theme';
import { Hero, History, Projects, Numbers, Contact } from './sections'; 


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

        {/* Page content */}
        <Box sx={{ pt: 10 }}>
          <Hero />
          <History />
          <Projects />
          <Numbers />
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
