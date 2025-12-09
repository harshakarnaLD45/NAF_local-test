import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  Warning,
  Settings,
  Build,
  Icecream,
  LocalBar,
  Security,
  SupportAgent,
  Error,
  Kitchen,
  Whatshot,
  CleaningServices
} from '@mui/icons-material';
import { color } from 'framer-motion';

// Create theme with your custom font families
const customTheme = createTheme({
  typography: {
    fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
    h1: {
      fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"',
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"',
      fontWeight: 'bold',
    },
    h3: {
      fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
    },
    body2: {
      fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
    },
    button: {
      fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
          fontWeight: 500,
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
          fontWeight: 500,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
          fontWeight: 500,
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
        },
        secondary: {
          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
          fontWeight: 500,
        }
      }
    }
  },
});

function IceCreamVendingMachineContent() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  
  // Enhanced media query hooks for ultra-large screens
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // 0-599px
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600-899px
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900-1199px
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl')); // 1200-1535px
  const isXl = useMediaQuery(theme.breakpoints.up('xl')); // 1536px+
  const isUltraLarge = useMediaQuery('(min-width: 1920px)');
  const isSuperLarge = useMediaQuery('(min-width: 2560px)');

  // Enhanced responsive values function with ultra-large scaling
  const getValue = (values) => {
    if (isXs) return values.xs || values.sm || values.md || values.lg || values.xl;
    if (isSm) return values.sm || values.md || values.lg || values.xl;
    if (isMd) return values.md || values.lg || values.xl;
    if (isLg) return values.lg || values.xl || values.md;
    if (isXl) return values.xl || values.lg;
    return values.md;
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const specifications = [
    { label: 'Height', value: '240 cm' },
    { label: 'Width', value: '130 cm' },
    { label: 'Depth', value: '146 cm' },
    { label: 'Net Weight', value: '380 kg' },
    { label: 'Voltage', value: '110-250V AC, 50-60 Hz' },
    { label: 'Max Power', value: '3000 W' },
    { label: 'Production Time', value: '15-20 seconds' },
    { label: 'Consumption per Cup', value: '90g - 140g' },
    { label: 'Ambient Temperature', value: '0°C - 40°C' },
    { label: 'Refrigerant', value: 'R290' },
    { label: 'Cup Capacity', value: '200 cups' },
    { label: 'Material Tank', value: '4+ liters' }
  ];

  const features = [
    { 
      icon: <Icecream />, 
      title: 'Fast Production', 
      description: 'Fresh soft ice cream in 15-20 seconds per serving with automated dispensing' 
    },
    { 
      icon: <Kitchen />, 
      title: 'Precise Temperature Control', 
      description: 'Advanced cooling system with compressor protection and consistent freezing' 
    },
    { 
      icon: <LocalBar />, 
      title: 'Multiple Toppings', 
      description: '3 jam flavors and 3 topping options for customized ice cream creations' 
    },
    { 
      icon: <Whatshot />,
      title: 'Hygienic Design', 
      description: 'Easy cleaning with automatic sterilization functions and food-safe materials' 
    }
  ];

  const safetyRequirements = [
    'Wait 24 hours after delivery before first operation to stabilize components',
    'Install in well-ventilated area with minimum 50cm clearance on all sides',
    'Never transport machine tilted or lying down - keep upright at all times',
    'Do not touch electrical components with wet hands or when standing on wet surface',
    'Use only professional loading/unloading equipment for installation',
    'Machine must be properly installed with grounding cable for electrical safety',
    'Maximum ambient temperature: 40°C, avoid direct sunlight exposure'
  ];

  const installationRequirements = [
    { 
      title: 'Floor Requirements', 
      desc: 'Must be level and solid concrete floor with no slope or water accumulation. Minimum load capacity: 500kg' 
    },
    { 
      title: 'Location Requirements', 
      desc: 'Ideal for shopping malls, amusement parks, food courts. Requires stable ambient temperature between 0°C - 40°C' 
    },
    { 
      title: 'Electrical Requirements', 
      desc: '3000W capacity required - dedicated circuit with proper grounding. Voltage: 110-250V AC, 50-60 Hz' 
    },
    { 
      title: 'Ventilation & Clearance', 
      desc: 'Minimum 50cm clearance on all sides for proper airflow and compressor function. Avoid confined spaces' 
    },
    { 
      title: 'Water & Drainage', 
      desc: 'Access to clean water for cleaning. Proper drainage system required for waste water disposal' 
    }
  ];

  const preStartChecklist = [
    { primary: '24-Hour Stabilization Period', secondary: 'Wait 24 hours after delivery before first operation to allow components to settle' },
    { primary: 'Electrical Connection Check', secondary: 'Verify proper grounding and stable power supply before startup' },
    { primary: 'Material Tank Preparation', secondary: 'Clean and prepare milk mixture tank with recommended ingredients' },
    { primary: 'System Initialization', secondary: 'Run initial system checks and calibration procedures' }
  ];

  const operationSteps = [
    {
      title: 'Milk Material Preparation',
      steps: [
        'Pour pre-mixed milk material into material tank (minimum 4 liters required)',
        'Press material pump button once - system stops automatically after 1 minute',
        'Press cleaning button and stir mixture gently for 1 minute to ensure proper consistency',
        'Press valve plug button to remove approximately 500ml of raw material for quality testing',
        'Press preparation button and wait for progress indicator to complete (approx. 5-10 minutes)'
      ]
    },
    {
      title: 'Jam & Toppings Setup',
      steps: [
        'Fill jam bottles with recommended jam flavors (strawberry, chocolate, caramel)',
        'Access backend system, click jam 1, 2, 3 buttons until system detects jam flow (green state)',
        'Return system to white state after successful jam setup completion',
        'Fill toppings container with selected toppings (sprinkles, nuts, cookie crumbs)',
        'Test each topping dispenser until they distribute properly and consistently'
      ]
    },
    {
      title: 'Daily Operation',
      steps: [
        'Ensure material tank has sufficient milk mixture (minimum 2 liters)',
        'Verify cup dispenser is stocked with adequate supply',
        'Check temperature indicators show optimal operating range',
        'Perform quick cleaning cycle if machine was idle for more than 4 hours',
        'Monitor first few servings for quality and consistency'
      ]
    }
  ];

  const maintenanceTasks = [
    { task: 'Daily external cleaning and sanitization', frequency: 'Daily' },
    { task: 'General internal cleaning with food-safe disinfectant', frequency: 'Every 3 days' },
    { task: 'Thorough deep cleaning of all components', frequency: 'Every 6 days' },
    { task: 'Valve seal ring inspection and replacement', frequency: 'Every 3 months' },
    { task: 'Condenser and cooling system cleaning', frequency: 'Monthly' },
    { task: 'Stirring component and motor inspection', frequency: 'Weekly' },
    { task: 'Complete electrical system safety check', frequency: 'Monthly' },
    { task: 'Compressor performance verification', frequency: 'Every 6 months' }
  ];

  const cleaningProcedures = [
    {
      type: 'General Daily Cleaning',
      steps: [
        'Press stop button, then activate cleaning function - system heats and melts residue for 5 minutes',
        'Carefully disconnect feed hose after heating cycle completes',
        'Press cleaning button and valve plug simultaneously to remove remaining mixture from system',
        'Add warm food-safe disinfectant water (50°C) to material tank',
        'Thoroughly clean feed pipe and material tank interior using provided sponge brushes',
        'Repeat cleaning process 3 times with disinfectant, then final rinse with drinking water'
      ]
    },
    {
      type: 'Weekly Deep Cleaning',
      steps: [
        'Perform general cleaning procedure first',
        'Disassemble dispensing nozzles and soak in cleaning solution',
        'Clean and sanitize all jam and topping dispensers',
        'Inspect and clean cup dispensing mechanism',
        'Verify all sensors are clean and functioning properly',
        'Run complete system flush with clean water'
      ]
    }
  ];

  const commonErrors = [
    { 
      error: 'E01 - Overvoltage Protection Alarm', 
      cause: 'Sudden voltage spike in power supply', 
      solution: 'Immediately shut down machine and restart after power stabilizes' 
    },
    { 
      error: 'E02 - Undervoltage Protection Alarm', 
      cause: 'Sudden voltage drop or unstable power source', 
      solution: 'Shut down machine and check power supply before restarting' 
    },
    { 
      error: 'E03 - Frequency Converter Protection', 
      cause: 'Overheating or electrical overload in converter system', 
      solution: 'Turn off frequency converter, unplug for 5 minutes, then restart system' 
    },
    { 
      error: 'E04 - Freezing Cylinder Alarm', 
      cause: 'Material shortage or stirring shaft mechanical issues', 
      solution: 'Turn off machine for 30 minutes, check material levels, use regeneration function if available' 
    },
    { 
      error: 'E05 - Temperature Sensor Error', 
      cause: 'Faulty temperature sensor or connection issue', 
      solution: 'Contact technical support for sensor replacement or recalibration' 
    }
  ];

  const serviceInfo = [
    { type: 'Phone Support (German)', contact: '0162/1638005' },
    { type: 'Phone Support (English)', contact: '0152/23805013' },
    { type: 'Email Support', contact: 'info@naf-halsbach.de' },
    { type: 'Service Hours', contact: 'Mon-Sat: 08:00 - 18:00' },
    { type: 'Emergency Support', contact: 'Mobile technical support available' }
  ];

  const warrantyInfo = [
    '1 year comprehensive warranty on material and workmanship defects',
    'Free replacement parts and technical service during warranty period',
    'Excludes normal wear parts and damage from improper use or maintenance',
    'Warranty becomes void if machine is disassembled by unauthorized personnel',
    'Contact for warranty claims: service@naf-halsbach.de'
  ];

  const serviceTypes = [
    { 
      title: 'Remote Technical Support', 
      description: 'Phone and online support for operational guidance and basic troubleshooting. Our technicians guide you through resolution steps in real-time.',
      bgcolor: '#e8f5e9'
    },
    { 
      title: 'On-Site Service Visits', 
      description: 'Qualified technician dispatch for complex mechanical or electrical issues. Service costs discussed and agreed with customer in advance.',
      bgcolor: '#e3f2fd'
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: '#1d1d1f', 
      minHeight: '100vh', 
      py: getValue({ xs: 2, sm: 3, md: 4, lg: 4, xl: 6 }),
      fontFamily: '"SatoshiRegular", "Arial", "sans-serif"'
    }}>
      
      <Container 
        disableGutters={isXs || isSm} 
        sx={{ 
          mt: getValue({ xs: 12, sm: 12, md: 18, lg: 18, xl: 22 }),
          px: getValue({ xs: 2, sm: 3, md: 4, lg: 4, xl: 6 }),
          width: '100%',
          maxWidth: 'none !important', 
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        
        {/* Header */}
        <Paper elevation={3} sx={{ 
          p: getValue({ xs: 2, sm: 3, md: 4, lg: 4, xl: 6 }), 
          mb: getValue({ xs: 2, sm: 3, md: 4, lg: 4, xl: 6 }), 
          bgcolor: '#ff6b35', 
          color: 'white' 
        }}>
          <Typography 
            variant={getValue({ xs: 'h4', sm: 'h3', md: 'h3', lg: 'h2', xl: 'h2' })} 
            fontWeight="bold" 
            gutterBottom
            sx={{ 
              fontSize: getValue({ 
                xs: '1.5rem', 
                sm: '1.75rem', 
                md: '2rem', 
                lg: '2.5rem', 
                xl: '3rem' 
              }),
              lineHeight: getValue({ xs: 1.3, sm: 1.3, md: 1.2, lg: 1.2, xl: 1.1 }),
              
              fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
            }}
          >
            Eis Automat V-B01 Soft Ice Cream Machine
          </Typography>
          <Typography 
            variant={getValue({ xs: 'body1', sm: 'h6', md: 'h5', lg: 'h5', xl: 'h4' })}
            sx={{
              fontSize: getValue({
                xs: '0.9rem',
                sm: '1rem',
                md: '1.1rem',
                lg: '1.25rem',
                xl: '1.5rem'
              }),
              fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
            }}
          >
            NAF Automated Soft Serve Ice Cream System with Toppings
          </Typography>
          <Box sx={{ 
            mt: 2, 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: getValue({ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }),
            alignItems: getValue({ xs: 'flex-start', sm: 'center' }),
            flexDirection: getValue({ xs: 'column', sm: 'row' })
          }}>
            <Chip 
              label="15-20 Second Production" 
              sx={{ 
                mr: getValue({ xs: 0, sm: 1 }),
                mb: getValue({ xs: 1, sm: 0 }),
                bgcolor: '#ffffff', 
                color: '#1d1d1f',
                fontSize: getValue({ 
                  xs: '0.7rem', 
                  sm: '0.75rem', 
                  md: '0.8rem', 
                  lg: '0.9rem', 
                  xl: '1rem' 
                }),
                height: getValue({ xs: 24, sm: 32, md: 32, lg: 36, xl: 40 }),
                '& .MuiChip-label': {
                  px: getValue({ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }),
                  fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
                }
              }} 
            />
            <Chip 
              label="3000W Power" 
              sx={{ 
                mr: getValue({ xs: 0, sm: 1 }),
                mb: getValue({ xs: 1, sm: 0 }),
                bgcolor: '#ffffff', 
                color: '#1d1d1f',
                fontSize: getValue({ 
                  xs: '0.7rem', 
                  sm: '0.75rem', 
                  md: '0.8rem', 
                  lg: '0.9rem', 
                  xl: '1rem' 
                }),
                height: getValue({ xs: 24, sm: 32, md: 32, lg: 36, xl: 40 }),
                '& .MuiChip-label': {
                  fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
                }
              }} 
            />
            <Chip 
              label="3 Toppings + 3 Jams" 
              sx={{ 
                bgcolor: '#ffffff', 
                color: '#1d1d1f',
                fontSize: getValue({ 
                  xs: '0.7rem', 
                  sm: '0.75rem', 
                  md: '0.8rem', 
                  lg: '0.9rem', 
                  xl: '1rem' 
                }),
                height: getValue({ xs: 24, sm: 32, md: 32, lg: 36, xl: 40 }),
                '& .MuiChip-label': {
                  fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
                }
              }} 
            />
          </Box>
        </Paper>

        {/* Navigation Tabs */}
        <Paper sx={{ mb: getValue({ xs: 2, sm: 3, md: 3, lg: 3, xl: 4 }) ,backgroundColor: '#262626',color:'#ffffff'}}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            variant={getValue({ xs: "scrollable", sm: "scrollable", md: "standard" })}
            scrollButtons={getValue({ xs: true, sm: true, md: "auto" })}
            aria-label="ice cream machine tabs"
            sx={{
              '& .MuiTab-root': {
                fontSize: getValue({ 
                  xs: '0.7rem', 
                  sm: '0.75rem', 
                  md: '0.8rem', 
                  lg: '0.9rem', 
                  xl: '1rem' 
                }),
                minWidth: getValue({ xs: 'auto', sm: 'auto', md: undefined }),
                px: getValue({ xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }),
                py: getValue({ xs: 1, sm: 1.5, md: 2, lg: 2, xl: 2.5 }),
                fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
                color: '#ffffff'
              }
            }}
          >
            <Tab label="Overview" />
            <Tab label="Specifications" />
            <Tab label="Installation" />
            <Tab label="Operation" />
            <Tab label="Maintenance" />
            <Tab label="Service & Support" />
          </Tabs>
        </Paper>

        {/* Tab Content */}
        {tabValue === 0 && (
         <Box sx={{ p: 2}}>
                  <Grid container spacing={4}>
                    {features.map((feature, index) => (
                      <Grid item xs={12} sm={6} lg={3} key={index}>
                        <Card sx={{ 
                          height: 300, 
                          backgroundColor: '#262626', 
                          color: '#ffffff', 
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                          padding: 3
                        }}>
                          {/* Icon at top-left */}
                          <Box sx={{ fontSize: '4rem', mb: 2, color: '#ffffff' }}>
                            {feature.icon}
                          </Box>
                
                          {/* Title below icon */}
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 'bold', fontFamily: '"SatoshiMedium", Arial, sans-serif', mt:4,mb: 2 }}
                          >
                            {feature.title}
                          </Typography>
                
                          {/* Description below title */}
                          <Typography
                            variant="body1"
                            sx={{ fontFamily: '"SatoshiRegular", Arial, sans-serif', fontSize: '1rem' }}
                          >
                            {feature.description}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

            {/* Safety Requirements */}
            <Card sx={{ mb: 4 ,mt:12}}>
              <CardContent sx={{ 
                p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,
              bgcolor: '#262626'
              }}>
                <Typography 
                  variant={getValue({ xs: "h6", sm: "h5", md: "h5", lg: "h5", xl: "h4" })} 
                  fontWeight="bold" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff',
                    fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
                  }}
                >
                  Safety Requirements
                </Typography>
                <List>
                  {safetyRequirements.map((req, index) => (
                    <ListItem key={index} sx={{
                      px: getValue({ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }),
                      py: getValue({ xs: 0.5, sm: 1, md: 1, lg: 1, xl: 1.5 })
                    }}>
                      <ListItemIcon sx={{
                        minWidth: getValue({ xs: 32, sm: 40, md: 40, lg: 48, xl: 56 })
                      }}>
                        <Security sx={{ 
                          color: '#ffffff',
                          fontSize: getValue({ 
                            xs: '1rem', 
                            sm: '1.25rem', 
                            md: '1.5rem', 
                            lg: '1.5rem', 
                            xl: '1.75rem' 
                          })
                        }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={req}
                        primaryTypographyProps={{
                          fontSize: getValue({
                            xs: '0.8rem',
                            sm: '0.85rem',
                            md: '0.9rem',
                            lg: '1rem',
                            xl: '1.1rem'
                          }),
                          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                          color: '#ffffff'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        )}

        {tabValue === 1 && (
          <Card>
            <CardContent sx={{ 
              p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,
            bgcolor: '#262626'
            }}>
              <Typography 
                variant={getValue({ xs: "h6", sm: "h5", md: "h5", lg: "h5", xl: "h4" })} 
                fontWeight="bold" 
                gutterBottom 
                sx={{ 
                  color: '#ffffff',
                  fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
                }}
              >
                Technical Specifications
              </Typography>
              <Grid container spacing={getValue({ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 })} sx={{ mt: 2,mb: 4 }}>
                {specifications.map((spec, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
                    <Paper sx={{ 
                      p: getValue({ xs: 1.5, sm: 2, md: 2, lg: 2, xl: 3 }), 
                      bgcolor: '#1d1d1f',
                      height: '100%'
                    }}>
                      <Typography 
                        variant={getValue({ xs: "caption", sm: "body2", md: "body2", lg: "body2", xl: "body1" })}
                        color="text.secondary"
                        sx={{
                          fontSize: getValue({
                            xs: '0.7rem',
                            sm: '0.75rem',
                            md: '0.8rem',
                            lg: '0.85rem',
                            xl: '0.9rem'
                          }),
                          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                          color:'#ffffff'
                        }}
                      >
                        {spec.label}
                      </Typography>
                      <Typography 
                        variant={getValue({ xs: "body2", sm: "h6", md: "h6", lg: "h6", xl: "h6" })}
                        fontWeight="bold"
                        sx={{
                          fontSize: getValue({
                            xs: '0.8rem',
                            sm: '0.9rem',
                            md: '1rem',
                            lg: '1.1rem',
                            xl: '1.2rem'
                          }),
                          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
                          color:'#ffffff'
                        }}
                      >
                        {spec.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        )}

        {tabValue === 2 && (
          <Box>
            <Card sx={{ mb: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }),bgcolor: '#262626',color:'#ffffff' }}>
              <CardContent sx={{ 
                p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) 
              }}>
                <Typography 
                  variant={getValue({ xs: "h6", sm: "h5", md: "h5", lg: "h5", xl: "h4" })} 
                  fontWeight="bold" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff',
                    fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
                  }}
                >
                  Installation Requirements
                </Typography>
                {installationRequirements.map((req, index) => (
                  <Accordion key={index} sx={{ mb: getValue({ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }),backgroundColor: '#1d1d1f',color:'#ffffff' }}>
                    <AccordionSummary expandIcon={<ExpandMore sx={{ color: '#ffffff' }} />}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Settings sx={{ 
                          mr: 2, 
                          
                          color: '#ffffff',
                          fontSize: getValue({ 
                            xs: '1rem', 
                            sm: '1.25rem', 
                            md: '1.5rem', 
                            lg: '1.5rem', 
                            xl: '1.75rem' 
                          })
                        }} />
                        <Typography 
                          fontWeight="bold"
                          sx={{
                            fontSize: getValue({
                              xs: '0.8rem',
                              sm: '0.9rem',
                              md: '1rem',
                              lg: '1.1rem',
                              xl: '1.2rem'
                            }),
                            fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
                          }}
                        >
                          {req.title}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontSize: getValue({
                            xs: '0.8rem',
                            sm: '0.85rem',
                            md: '0.9rem',
                            lg: '1rem',
                            xl: '1.1rem'
                          }),
                          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"'
                        }}
                      >
                        {req.desc}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={{ 
                p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,
                bgcolor:'#262626'
              }}>
                <Typography 
                  variant={getValue({ xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h5" })} 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    fontSize: getValue({
                      xs: '0.9rem',
                      sm: '1rem',
                      md: '1.1rem',
                      lg: '1.2rem',
                      xl: '1.3rem'
                    }),
                    fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
                    color: '#ffffff'
                  }}
                >
                  <Warning sx={{ 
                    verticalAlign: 'middle', 
                    mr: 1, 
                    color: '#ffffff',
                    fontSize: getValue({ 
                      xs: '1rem', 
                      sm: '1.25rem', 
                      md: '1.5rem', 
                      lg: '1.5rem', 
                      xl: '1.75rem' 
                    })
                  }} />
                  Pre-Start Checklist
                </Typography>
                <List>
                  {preStartChecklist.map((item, index) => (
                    <ListItem key={index} sx={{
                      px: getValue({ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }),
                      py: getValue({ xs: 0.5, sm: 1, md: 1, lg: 1, xl: 1.5 })
                    }}>
                      <ListItemText 
                        primary={item.primary}
                        primaryTypographyProps={{
                          fontSize: getValue({
                            xs: '0.8rem',
                            sm: '0.9rem',
                            md: '1rem',
                            lg: '1.1rem',
                            xl: '1.2rem'
                          }),
                          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
                          color: '#ffffff'
                        }}
                        secondary={item.secondary}
                        secondaryTypographyProps={{
                          fontSize: getValue({
                            xs: '0.7rem',
                            sm: '0.75rem',
                            md: '0.8rem',
                            lg: '0.85rem',
                            xl: '0.9rem'
                          }),
                          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                          color: '#ffffff'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        )}

        {tabValue === 3 && (
          <Box>
            {operationSteps.map((section, sectionIndex) => (
              <Card key={sectionIndex} sx={{ mb: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) }}>
                <CardContent sx={{ 
                  p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,
                  bgcolor: '#262626'
                }}>
                  <Typography 
                    variant={getValue({ xs: "h6", sm: "h5", md: "h5", lg: "h5", xl: "h4" })} 
                    fontWeight="bold" 
                    gutterBottom 
                    sx={{ 
                      color: '#ffffff',
                      fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
                    }}
                  >
                    {section.title}
                  </Typography>
                  <List>
                    {section.steps.map((step, stepIndex) => (
                      <ListItem key={stepIndex} sx={{
                        px: getValue({ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }),
                        py: getValue({ xs: 0.5, sm: 1, md: 1, lg: 1, xl: 1.5 })
                      }}>
                        <ListItemIcon sx={{
                          minWidth: getValue({ xs: 32, sm: 40, md: 40, lg: 48, xl: 56 })
                        }}>
                          <CheckCircle sx={{ 
                            color: '#ffffff',
                            fontSize: getValue({ 
                              xs: '1rem', 
                              sm: '1.25rem', 
                              md: '1.5rem', 
                              lg: '1.5rem', 
                              xl: '1.75rem' 
                            })
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={step}
                          primaryTypographyProps={{
                            fontSize: getValue({
                              xs: '0.8rem',
                              sm: '0.85rem',
                              md: '0.9rem',
                              lg: '1rem',
                              xl: '1.1rem'
                            }),
                            fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                            color: '#ffffff'
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        {tabValue === 4 && (
          <Card>
            <CardContent sx={{ 
              p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,
              bgcolor: '#262626'
            }}>
              <Typography 
                variant={getValue({ xs: "h6", sm: "h5", md: "h5", lg: "h5", xl: "h4" })} 
                fontWeight="bold" 
                gutterBottom 
                sx={{ 
                  color: '#ffffff',
                  fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
                }}
              >
                Maintenance Schedule
              </Typography>
              
              <List>
                {maintenanceTasks.map((task, index) => (
                  <React.Fragment key={index}>
                    <ListItem sx={{
                      px: getValue({ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }),
                      py: getValue({ xs: 0.5, sm: 1, md: 1, lg: 1, xl: 1.5 })
                    }}>
                      <ListItemIcon sx={{
                        minWidth: getValue({ xs: 32, sm: 40, md: 40, lg: 48, xl: 56 })
                      }}>
                        <Build sx={{ 
                          color: '#ffffff',
                          fontSize: getValue({ 
                            xs: '1rem', 
                            sm: '1.25rem', 
                            md: '1.5rem', 
                            lg: '1.5rem', 
                            xl: '1.75rem' 
                          })
                        }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={task.task}
                        primaryTypographyProps={{
                          fontSize: getValue({
                            xs: '0.8rem',
                            sm: '0.85rem',
                            md: '0.9rem',
                            lg: '1rem',
                            xl: '1.1rem'
                          }),
                          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                          color: '#ffffff'
                        }}
                        secondary={`Frequency: ${task.frequency}`}
                        secondaryTypographyProps={{
                          fontSize: getValue({
                            xs: '0.7rem',
                            sm: '0.75rem',
                            md: '0.8rem',
                            lg: '0.85rem',
                            xl: '0.9rem'
                          }),
                          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                          color: '#ffffff'
                        }}
                      />
                    </ListItem>
                    {index < maintenanceTasks.length - 1 && (
                      <Divider sx={{
                        mx: getValue({ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 })
                      }} />
                    )}
                  </React.Fragment>
                ))}
              </List>

              <Box sx={{ 
                mt: getValue({ xs: 3, sm: 3, md: 4, lg: 4, xl: 5 }), 
                p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }), 
                bgcolor: '#1d1d1f', 
                borderRadius: 2 
              }}>
                <Typography 
                  variant={getValue({ xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h5" })} 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    fontSize: getValue({
                      xs: '0.9rem',
                      sm: '1rem',
                      md: '1.1rem',
                      lg: '1.2rem',
                      xl: '1.3rem'
                    }),
                    fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
                    color: '#ffffff'
                  }}
                >
                  <Warning sx={{ 
                    verticalAlign: 'middle', 
                    mr: 1, 
                    color: '#fffff',
                    fontSize: getValue({ 
                      xs: '1rem', 
                      sm: '1.25rem', 
                      md: '1.5rem', 
                      lg: '1.5rem', 
                      xl: '1.75rem' 
                    })
                  }} />
                  Cleaning Importance
                </Typography>
                <Typography
                  sx={{
                    fontSize: getValue({
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem',
                      lg: '1rem',
                      xl: '1.1rem'
                    }),
                    fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                    color: '#ffffff'
                  }}
                >
                  Regular cleaning prevents bacterial growth and ensures food safety. Follow cleaning schedules strictly to maintain machine performance and product quality.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        )}

        {tabValue === 5 && (
          <Box>
            <Card sx={{ mb: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) }}>
              <CardContent sx={{ 
                p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,
                bgcolor: '#262626'
              }}>
                <Typography 
                  variant={getValue({ xs: "h6", sm: "h5", md: "h5", lg: "h5", xl: "h4" })} 
                  fontWeight="bold" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff',
                    fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
                  }}
                >
                  Service & Support
                </Typography>
                <Grid container spacing={getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 })} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ 
                      p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }), 
                      bgcolor: '#1d1d1f' 
                    }}>
                      <Typography 
                        variant={getValue({ xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h5" })} 
                        fontWeight="bold" 
                        gutterBottom
                        sx={{
                          fontSize: getValue({
                            xs: '0.9rem',
                            sm: '1rem',
                            md: '1.1rem',
                            lg: '1.2rem',
                            xl: '1.3rem'
                          }),
                          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
                          color: '#ffffff'
                        }}
                      >
                        <SupportAgent sx={{ 
                          verticalAlign: 'middle', 
                          mr: 1,
                          fontSize: getValue({ 
                            xs: '1rem', 
                            sm: '1.25rem', 
                            md: '1.5rem', 
                            lg: '1.5rem', 
                            xl: '1.75rem' 
                          })
                        }} />
                        Contact Information
                      </Typography>
                      {serviceInfo.map((info, index) => (
                        <Typography 
                          key={index} 
                          sx={{ 
                            mb: 1,
                            fontSize: getValue({
                              xs: '0.8rem',
                              sm: '0.85rem',
                              md: '0.9rem',
                              lg: '1rem',
                              xl: '1.1rem'
                            }),
                            fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                            color: '#ffffff'
                          }}
                        >
                          <strong>{info.type}:</strong> {info.contact}
                        </Typography>
                      ))}
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper sx={{ 
                      p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }), 
                      bgcolor: '#1d1d1f' 
                    }}>
                      <Typography 
                        variant={getValue({ xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h5" })} 
                        fontWeight="bold" 
                        gutterBottom
                        sx={{
                          fontSize: getValue({
                            xs: '0.9rem',
                            sm: '1rem',
                            md: '1.1rem',
                            lg: '1.2rem',
                            xl: '1.3rem'
                          }),
                          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
                          color: '#ffffff'
                        }}
                      >
                        <CheckCircle sx={{ 
                          verticalAlign: 'middle', 
                          mr: 1,
                          fontSize: getValue({ 
                            xs: '1rem', 
                            sm: '1.25rem', 
                            md: '1.5rem', 
                            lg: '1.5rem', 
                            xl: '1.75rem' 
                          })
                        }} />
                        Warranty Information
                      </Typography>
                      {warrantyInfo.map((info, index) => (
                        <ListItem key={index} sx={{ 
                          px: 0,
                          py: getValue({ xs: 0.5, sm: 0.5, md: 1, lg: 1, xl: 1 })
                        }}>
                          <ListItemIcon sx={{ 
                            minWidth: getValue({ xs: 24, sm: 30, md: 30, lg: 36, xl: 40 })
                          }}>
                            <CheckCircle sx={{ 
                              color: '#ffffff', 
                              fontSize: getValue({ 
                                xs: '0.8rem', 
                                sm: '0.9rem', 
                                md: '1rem', 
                                lg: '1rem', 
                                xl: '1.1rem' 
                              })
                            }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={info}
                            primaryTypographyProps={{
                              fontSize: getValue({
                                xs: '0.7rem',
                                sm: '0.75rem',
                                md: '0.8rem',
                                lg: '0.85rem',
                                xl: '0.9rem'
                              }),
                              fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                              color: '#ffffff'
                            }}
                          />
                        </ListItem>
                      ))}
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={{ 
                p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,
                bgcolor:'#262626'
              }}>
                <Typography 
                  variant={getValue({ xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h5" })} 
                  fontWeight="bold" 
                  gutterBottom 
                  sx={{ 
                    color: '#ffffff',
                    fontFamily: '"PowerGroteskTrialBold", "Arial", "sans-serif"'
                  }}
                >
                  Service Types
                </Typography>
                <Grid container spacing={getValue({ xs: 2, sm: 2, md: 2, lg: 2, xl: 3 })}>
                  {serviceTypes.map((service, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Paper sx={{ 
                        p: getValue({ xs: 2, sm: 2, md: 2, lg: 2, xl: 3 }), 
                        bgcolor: '#1d1d1f'
                      }}>
                        <Typography 
                          variant={getValue({ xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h5" })} 
                          gutterBottom
                          sx={{
                            fontSize: getValue({
                              xs: '0.9rem',
                              sm: '1rem',
                              md: '1.1rem',
                              lg: '1.2rem',
                              xl: '1.3rem'
                            }),
                            fontFamily: '"SatoshiMedium", "Arial", "sans-serif"',
                            color: '#ffffff'
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: getValue({
                              xs: '0.8rem',
                              sm: '0.85rem',
                              md: '0.9rem',
                              lg: '1rem',
                              xl: '1.1rem'
                            }),
                            fontFamily: '"SatoshiRegular", "Arial", "sans-serif"',
                            color: '#ffffff'
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        )}

        
      </Container>
    </Box>
  );
}

// Main component with ThemeProvider
export default function IceCreamVendingMachinePage() {
  return (
    <ThemeProvider theme={customTheme}>
      <IceCreamVendingMachineContent />
    </ThemeProvider>
  );
}