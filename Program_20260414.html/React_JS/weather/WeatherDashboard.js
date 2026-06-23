import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Grid,
  Button,
  Divider
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import { weatherDatabase } from './weatherdata';

// 1. Setting up the MUI Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a1929', // Dark deep blue/grey background
      paper: '#132f4c',
    },
    primary: {
      main: '#3399ff',
    },
  },
});

const WeatherDashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [selectedCity, setSelectedCity] = useState(weatherDatabase["USA"].cities[0]);

  const countries = Object.keys(weatherDatabase);
  // Use optional chaining and a fallback object to prevent crashes during state transitions
  const currentWeatherData = weatherDatabase[selectedCountry]?.data[selectedCity] || {};

//   const getWeatherIcon = (condition) => {
//     // Add a safety check for condition
//     switch (condition?.toLowerCase()) {
//       case 'sunny': return <WbSunnyIcon sx={{ fontSize: 60, color: '#ffeb3b' }} />;
//       case 'cloudy':
//       case 'overcast': return <CloudIcon sx={{ fontSize: 60, color: '#90a4ae' }} />;
//       case 'rain':
//       case 'drizzle': return <GrainIcon sx={{ fontSize: 60, color: '#4fc3f7' }} />;
//       default: return <CloudIcon sx={{ fontSize: 60, color: '#90a4ae' }} />;
//     }
//   };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedCity(weatherDatabase[country].cities[0]);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        {/* Navbar with Heading, Countries, and City Dropdown */}
        <AppBar position="static" sx={{ bgcolor: 'background.paper', backgroundImage: 'none' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Weather Information Dashboard
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mr: 4 }}>
              {countries.map((country) => (
                <Button 
                  key={country} 
                  color="inherit" 
                  onClick={() => handleCountryChange(country)}
                  sx={{ borderBottom: selectedCountry === country ? '2px solid white' : 'none', borderRadius: 0 }}
                >
                  {country}
                </Button>
              ))}
            </Box>

            <FormControl variant="filled" size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="city-select-label">City</InputLabel>
              <Select
                labelId="city-select-label"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {weatherDatabase[selectedCountry].cities.map((city) => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 6 }}>
          <Grid container spacing={3} direction="column" alignItems="center">
            {/* Header Card: Temp and Condition */}
            <Grid item xs={12} sx={{ width: '100%', maxWidth: 450 }}>
              <Card elevation={4} sx={{ textAlign: 'center', py: 2, border: '1px solid', borderColor: 'primary.main' }}>
                <CardContent>
                  {getWeatherIcon(currentWeatherData.condition)}
                  <Typography variant="h2" color="primary">{currentWeatherData.temp}</Typography>
                  <Typography variant="h4">{currentWeatherData.condition}</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Details Card: Humidity, Wind, and Updated Time */}
            <Grid item xs={12} sx={{ width: '100%', maxWidth: 450 }}>
              <Card elevation={4}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="body1" color="text.secondary">Humidity</Typography>
                    <Typography variant="body1" fontWeight="bold">{currentWeatherData.humidity}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="body1" color="text.secondary">Wind Speed</Typography>
                    <Typography variant="body1" fontWeight="bold">{currentWeatherData.wind}</Typography>
                  </Box>
                  
                  <Divider sx={{ mb: 3 }} />
                  
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h4">
                      Last Updated: {currentWeatherData.updated}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default WeatherDashboard;