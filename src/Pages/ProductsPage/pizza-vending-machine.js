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
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  ExpandMore,
  CheckCircle,
  Warning,
  Settings,
  LocalShipping,
  Build,
  Restaurant,
  Thermostat,
  CreditCard,
  Monitor,
  Error,
  Security,
  CleaningServices,
  SupportAgent
} from '@mui/icons-material';

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

function PizzaVendingMachineContent() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  
  // Media query hooks for comprehensive responsive design
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // 0-599px
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600-899px
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900-1199px
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl')); // 1200-1535px
  const isXl = useMediaQuery(theme.breakpoints.up('xl')); // 1536px+
  const isUltraLarge = useMediaQuery('(min-width: 1920px)');
  const isSuperLarge = useMediaQuery('(min-width: 2560px)');

  // Responsive values function
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
    { label: 'Height', value: '2400 mm' },
    { label: 'Width', value: '1120 mm' },
    { label: 'Depth', value: '1800 mm' },
    { label: 'Net Weight', value: '~600 kg' },
    { label: 'Storage Capacity', value: '60 Pizzas' },
    { label: 'Pizza Sizes', value: '25 cm or 30 cm' },
    { label: 'Temperature Range', value: 'Cooling: +2°C to +6°C' },
    { label: 'Power', value: '7500W, 50/60 Hz' },
    { label: 'Screen', value: '32-inch & 55-inch LCD' },
    { label: 'Payment Methods', value: 'Credit Card, EC Card, Mobile Payment, QR Code' },
    { label: 'Voltage', value: '400/230V' },
    { label: 'Circuit Protection', value: 'C32 A' }
  ];

  const features = [
    { 
      icon: <Restaurant />, 
      title: '24/7 Availability', 
      description: 'Fresh pizza available anytime with automated heating system' 
    },
    { 
      icon: <Thermostat />, 
      title: 'Integrated Oven', 
      description: 'Built-in heating system for fresh, hot pizza on demand' 
    },
    { 
      icon: <CheckCircle />, 
      title: 'Compact Design', 
      description: 'Only 2 m² space requirement, ideal for high-traffic locations' 
    },
    { 
      icon: <LocalShipping />, 
      title: 'Large Capacity', 
      description: 'Stores up to 60 pizza boxes with efficient cooling system' 
    }
  ];

  const safetyRequirements = [
    'Only use recommended pizza box sizes (25cm or 30cm)',
    'Maintain minimum 30cm clearance around machine for ventilation',
    'Wait 24 hours after delivery before first operation',
    'Only qualified technicians should perform repairs',
    'Disconnect from power before cleaning or maintenance'
  ];

  const installationRequirements = [
    { 
      title: 'Floor Requirements', 
      desc: 'Must be level and solid concrete floor with no slope or water accumulation' 
    },
    { 
      title: 'Location', 
      desc: 'Ideal for airports, train stations, shopping malls. Outdoor installations require shaded areas' 
    },
    { 
      title: 'Electrical Requirements', 
      desc: '7500W capacity required - 2 sockets on 2 separate circuits with proper grounding' 
    },
    { 
      title: 'Ventilation', 
      desc: 'Minimum 30cm clearance on all sides for proper airflow and compressor function' 
    },
    { 
      title: 'Weather Protection', 
      desc: 'Outdoor installations require rain shelter extending 40cm above machine' 
    }
  ];

  const preStartChecklist = [
    { primary: 'Remove Anti-Movement Device', secondary: 'Remove transport security device from overhead crane' },
    { primary: 'Install Oven Tray', secondary: 'Place baking tray holder and align tray with oven holes' },
    { primary: '24-Hour Rest Period', secondary: 'Wait 24 hours after delivery before first operation' }
  ];

  const maintenanceTasks = [
    { task: 'Clean external surfaces', frequency: 'Daily' },
    { task: 'Clean internal components and sensors', frequency: 'Weekly' },
    { task: 'Check and clean ventilation slots', frequency: 'Monthly' },
    { task: 'Inspect product channels for blockages', frequency: 'Weekly' },
    { task: 'Compressor maintenance and cleaning', frequency: 'Every 6 months' },
    { task: 'Electrical system inspection', frequency: 'Annual' },
    { task: 'Lubricate mechanical components', frequency: 'Every 3 months' }
  ];

  const adminFunctions = [
    'Tap upper right corner of screen to access admin menu',
    'Default password: 123456',
    'Configure product information (name, price, stock)',
    'Set temperature controls and heating parameters',
    'Test dispensing mechanisms and cargo paths',
    'Configure payment methods and language settings',
    'Monitor machine status and error logs'
  ];

  const purchaseFlowSteps = ['Select Pizza', 'Choose Payment', 'Complete Payment', 'Automatic Heating', 'Collect Pizza'];

  const serviceInfo = [
    { type: 'Phone Support (German)', contact: '0162/1638005' },
    { type: 'Phone Support (English)', contact: '0152/23805013' },
    { type: 'Email', contact: 'info@naf-halsbach.de' },
    { type: 'Service Hours', contact: 'Mon-Sat: 08:00 - 18:00' },
    { type: 'Emergency Support', contact: 'Mobile support available' }
  ];

  const warrantyInfo = [
    '1 year warranty on material and workmanship',
    'Free parts and service during warranty period',
    'Excludes wear parts and damage from improper use',
    'Warranty void if machine disassembled by unauthorized personnel',
    'Contact for warranty claims: info@naf-kundendienst.de'
  ];

  const serviceTypes = [
    { 
      title: 'Remote Support', 
      description: 'Phone and WhatsApp support for quick issue resolution. Our team will guide you through troubleshooting steps.',
      bgcolor: '#e8f5e9'
    },
    { 
      title: 'On-Site Service', 
      description: 'Technician dispatch for complex issues. Costs agreed with customer in advance.',
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
          mt: getValue({ xs: 12 ,sm: 12, md: 18, lg: 18, xl: 22 }),
          px: getValue({ xs: 2, sm: 3, md: 4, lg: 4, xl: 6 }),
         
          width: '100%',
          maxWidth: 'none !important',
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
            CYJ-Pizza-P08 Pizza Vending Machine
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
            NAF Automated Pizza Machine with Integrated Oven
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
              label="60 Pizza Capacity" 
              sx={{ 
                mr: getValue({ xs: 0, sm: 1 }),
                mb: getValue({ xs: 1, sm: 0 }),
                bgcolor: 'white', 
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
              label="7500W Power" 
              sx={{ 
                mr: getValue({ xs: 0, sm: 1 }),
                mb: getValue({ xs: 1, sm: 0 }),
                bgcolor: 'white', 
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
              label="55-inch LCD" 
              sx={{ 
                bgcolor: 'white', 
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
        <Paper sx={{ mb: getValue({ xs: 2, sm: 3, md: 3, lg: 3, xl: 4 }), bgcolor: '#262626' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            variant={getValue({ xs: "scrollable", sm: "scrollable", md: "standard" })}
            scrollButtons={getValue({ xs: true, sm: true, md: "auto" })}
            aria-label="pizza machine tabs"
            
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
                 backgroundColor: '#262626',   
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
            <Card sx={{ mb: 4,mt:12 }}>
              <CardContent sx={{ 
                p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,bgcolor:'#262626'
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
                          color:'#ffffff'
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
              p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,bgcolor:'#262626'
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
              <Grid container spacing={getValue({ xs: 1, sm: 1, md: 2, lg: 2, xl: 3 })} sx={{ mt: 2, mb:4 }}>
                {specifications.map((spec, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
                    <Paper sx={{ 
                      p: getValue({ xs: 1.5, sm: 2, md: 2, lg: 2, xl: 3 }), 
                      bgcolor: '#1d1d16',
                      height: '100%',border:'1px Solid #ffffff'
                    }}>
                      <Typography 
                        variant={getValue({ xs: "caption", sm: "body2", md: "body2", lg: "body2", xl: "body1" })}
                        color="#ffffff" 
                        sx={{
                          fontSize: getValue({
                            xs: '0.7rem',
                            sm: '0.75rem',
                            md: '0.8rem',
                            lg: '0.85rem',
                            xl: '0.9rem'
                          }),
                          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"'
                        }}
                      >
                        {spec.label}
                      </Typography>
                      <Typography 
                        variant={getValue({ xs: "body2", sm: "h6", md: "h6", lg: "h6", xl: "h6" })}
                        fontWeight="medium"
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
            <Card sx={{ mb: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,bgcolor:'#262626'}}>
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
                  <Accordion key={index} sx={{ mb: getValue({ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }), bgcolor:'#1d1d1f',color:'#ffffff' }}>
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
                p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }),
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
                          color:'#ffffff'
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
                          color:'#ffffff'
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
          <Card>
            <CardContent sx={{ 
              p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }) ,
              color:'#ffffff',bgcolor:'#262626'
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
                Operating Instructions
              </Typography>
              
              <Typography 
                variant={getValue({ xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h5" })} 
                fontWeight="bold" 
                sx={{ 
                  mt: 3, 
                  mb: 2,
                  fontSize: getValue({
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem',
                    lg: '1.2rem',
                    xl: '1.3rem'
                  }),
                  fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
                }}
              >
                Customer Purchase Flow
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                flexWrap: getValue({ xs: 'wrap', sm: 'wrap', md: 'nowrap' }),
                gap: getValue({ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }),
                justifyContent: getValue({ xs: 'center', sm: 'flex-start' }),
                flexDirection: getValue({ xs: 'column', sm: 'row' })
              }}>
                {purchaseFlowSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <Chip 
                      label={`${index + 1}. ${step}`} 
                      sx={{ 
                        bgcolor: '#ffffff', 
                        color: '#1d1d1f', 
                        px: getValue({ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }),
                        py: getValue({ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }),
                        fontSize: getValue({
                          xs: '0.7rem',
                          sm: '0.75rem',
                          md: '0.8rem',
                          lg: '0.9rem',
                          xl: '1rem'
                        }),
                        height: getValue({ xs: 32, sm: 40, md: 48, lg: 48, xl: 56 }),
                        '& .MuiChip-label': {
                          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
                        }
                      }}
                    />
                    {index < purchaseFlowSteps.length - 1 && (
                      <Typography 
                        variant="h6"
                        sx={{
                          fontSize: getValue({
                            xs: '1rem',
                            sm: '1.25rem',
                            md: '1.5rem',
                            lg: '1.5rem',
                            xl: '1.75rem'
                          }),
                          display: getValue({ xs: 'none', sm: 'block' }),
                          fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
                        }}
                      >
                        →
                      </Typography>
                    )}
                  </React.Fragment>
                ))}
              </Box>

              <Divider sx={{ 
                my: getValue({ xs: 3, sm: 3, md: 4, lg: 4, xl: 5 }) , borderLine:'#ffffff'
              }} />

              <Typography 
                variant={getValue({ xs: "h6", sm: "h6", md: "h6", lg: "h6", xl: "h5" })} 
                fontWeight="bold" 
                sx={{ 
                  mb: 2,
                  fontSize: getValue({
                    xs: '0.9rem',
                    sm: '1rem',
                    md: '1.1rem',
                    lg: '1.2rem',
                    xl: '1.3rem'
                  }),
                  fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
                }}
              >
                Admin System Access
              </Typography>
              <List sx={{ mt: 2 }}>
                {adminFunctions.map((func, index) => (
                  <ListItem key={index} sx={{
                    px: getValue({ xs: 1, sm: 2, md: 2, lg: 2, xl: 3 }),
                    py: getValue({ xs: 0.5, sm: 1, md: 1, lg: 1, xl: 1.5 })
                  }}>
                    <ListItemIcon sx={{
                      minWidth: getValue({ xs: 32, sm: 40, md: 40, lg: 48, xl: 56 })
                    }}>
                      <Monitor sx={{ 
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
                      primary={func}
                      primaryTypographyProps={{
                        fontSize: getValue({
                          xs: '0.8rem',
                          sm: '0.85rem',
                          md: '0.9rem',
                          lg: '1rem',
                          xl: '1.1rem'
                        }),
                        fontFamily: '"SatoshiRegular", "Arial", "sans-serif"'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        )}

        {tabValue === 4 && (
          <Card>
            <CardContent sx={{ 
              p: getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }), backgroundColor: '#262626', color: '#ffffff'
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
                        <CleaningServices sx={{ 
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
                          fontFamily: '"SatoshiRegular", "Arial", "sans-serif"'
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
                          color:'#ffffff'
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
                    fontFamily: '"SatoshiMedium", "Arial", "sans-serif"'
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
                  Compressor Safety
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
                    fontFamily: '"SatoshiRegular", "Arial", "sans-serif"'
                  }}
                >
                  Ensure compressor ventilation slots are never blocked. Regular cleaning prevents overheating and extends machine lifespan.
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
                color:'#ffffff',backgroundColor:'#262626'
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
                <Grid container spacing={getValue({ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 })} sx={{ mt: 2,mb:6 }}>
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
                          color:'#ffffff'
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
                            color:'#ffffff'
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
                          color:'#ffffff'
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
                              color:'#ffffff'
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
                bgcolor:'#262626',color:'#ffffff'
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
                        bgcolor: "#1d1d1f"
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
                            color:'#ffffff'
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
                            color:'#ffffff'
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
export default function PizzaVendingMachinePage() {
  return (
    <ThemeProvider theme={customTheme}>
      <PizzaVendingMachineContent />
    </ThemeProvider>
  );
}