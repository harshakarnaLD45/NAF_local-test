import React, { useState } from 'react';
import VendImg from '../../assets/Home/Gourmet-machine.webp';
import Vector from '../../assets/Machines/Vector.svg';

import HighHeating from '../../assets/Machines/HighHeating.svg';
import safetyfeature from '../../assets/Machines/safetyfeature.svg';
import TransportVehical from '../../assets/Machines/TransportVehical.svg';
import cloudService from '../../assets/Machines/cloudService.svg';
import BackgroundControl from '../../assets/Machines/BackgroundControl.svg';

import Floor from '../../assets/Machines/Floor.svg';
import Location from '../../assets/Machines/Location.svg';
import Weather from '../../assets/Machines/Weather.svg';
import Electrical from '../../assets/Machines/Electrical.svg';
import Network from '../../assets/Machines/Network.svg';
import Ventilation from '../../assets/Machines/Ventilation.svg';

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

  Stepper,
  Step,
  StepLabel,
  StepContent,
  colors,
  Button
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
  Cloud,
  Wifi,
  AcUnit,
  TouchApp,
  QrCode,
  AccountBalanceWallet,
  Phone,
  Email,
  Home,
  Business,
  Straighten,
  Scale,
  ElectricBolt,
  SafetyDivider,
  Visibility,
  VolumeUp,
  Print,
  Language,
  Storage,
  SimCard,
  Cable,

  Language as LanguageIcon,

  VolumeUp as VolumeUpIcon,



  Code as CodeIcon,

  CreditCard as CreditCardIcon,
  Crop as CropIcon,
  Crop169 as Crop169Icon,
  Crop32 as Crop32Icon,
  Crop54 as Crop54Icon,
  Crop75 as Crop75Icon,
  CropDin as CropDinIcon,
  CropFree as CropFreeIcon,
  CropLandscape as CropLandscapeIcon,
  CropOriginal as CropOriginalIcon,
  CropPortrait as CropPortraitIcon,
  CropRotate as CropRotateIcon,
  CropSquare as CropSquareIcon,

  Directions as DirectionsIcon,

  Filter as FilterIcon,
  Filter1 as Filter1Icon,
  Filter2 as Filter2Icon,
  Filter3 as Filter3Icon,
  Filter4 as Filter4Icon,
  Filter5 as Filter5Icon,
  Filter6 as Filter6Icon,
  Filter7 as Filter7Icon,
  Filter8 as Filter8Icon,
  Filter9 as Filter9Icon,
  Filter9Plus as Filter9PlusIcon,
  FilterBAndW as FilterBAndWIcon,
  FilterCenterFocus as FilterCenterFocusIcon2,
  FilterDrama as FilterDramaIcon,
  FilterFrames as FilterFramesIcon,
  FilterHdr as FilterHdrIcon,
  FilterList,
  FilterNone as FilterNoneIcon,
  FilterTiltShift as FilterTiltShiftIcon,
  FilterVintage as FilterVintageIcon,

  Flip as FlipIcon,



  FormatItalic as FormatItalicIcon,

  FormatListBulleted as FormatListBulletedIcon,
  FormatListNumbered as FormatListNumberedIcon,
  FormatPaint,
  FormatQuote as FormatQuoteIcon,
  FormatShapes,
  FormatSize as FormatSizeIcon,
  FormatStrikethrough,
  FormatTextdirectionLToR,
  FormatTextdirectionRToL,
  FormatUnderlined as FormatUnderlinedIcon,


  InsertDriveFile as InsertDriveFileIcon,
  InsertEmoticon as InsertEmoticonIcon,


  Link as LinkIcon,
  LinkedCamera,

  LocalShipping as LocalShippingIcon,

  LocationOn as LocationOnIcon,
  LocationSearching,
  Lock as LockIcon,
  LockClock,
  LockOpen as LockOpenIcon,

  Memory as MemoryIcon,

  Smartphone,
  Margin
} from '@mui/icons-material';
import '../../App.css';
import './products.css';
import { useTranslation } from 'react-i18next';
import { Type } from 'lucide-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function GourmetVendingMachinePage() {
  const [tabValue, setTabValue] = useState(0);
  const { t, i18n, ready } = useTranslation();
  
 
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // From PDF Page 4
  const specifications = [
    { label: t('products.gourmetMachine.specifications.height'), value: t('products.gourmetMachine.specifications.heightValue') },
    { label: t('products.gourmetMachine.specifications.width'), value: t('products.gourmetMachine.specifications.widthValue') },
    { label: t('products.gourmetMachine.specifications.depth'), value: t('products.gourmetMachine.specifications.depthValue') },
    { label: t('products.gourmetMachine.specifications.netWeight'), value: t('products.gourmetMachine.specifications.netWeightValue') },
    { label: t('products.gourmetMachine.specifications.maxProductTypes'), value: t('products.gourmetMachine.specifications.maxProductTypesValue') },
    { label: t('products.gourmetMachine.specifications.storageCapacity'), value: t('products.gourmetMachine.specifications.storageCapacityValue') },
    { label: t('products.gourmetMachine.specifications.temperatureRange'), value: t('products.gourmetMachine.specifications.temperatureRangeValue') },
    { label: t('products.gourmetMachine.specifications.power'), value: t('products.gourmetMachine.specifications.powerValue') },
    { label: t('products.gourmetMachine.specifications.screen'), value: t('products.gourmetMachine.specifications.screenValue') },
    { label: t('products.gourmetMachine.specifications.paymentMethods'), value: t('products.gourmetMachine.specifications.paymentMethodsValue') },
    { label: t('products.gourmetMachine.specifications.standardLevels'), value: t('products.gourmetMachine.specifications.standardLevelsValue') },
    { label: t('products.gourmetMachine.specifications.expandableTo'), value: t('products.gourmetMachine.specifications.expandableToValue') },
    { label: t('products.gourmetMachine.specifications.machineColor'), value: t('products.gourmetMachine.specifications.machineColorValue') },
    { label: t('products.gourmetMachine.specifications.powerRequirements'), value: t('products.gourmetMachine.specifications.powerRequirementsValue') }
  ];



  // From PDF Page 3
  const machineComponents = t('products.gourmetMachine.data.machineComponents', { returnObjects: true });

  // From PDF Page 5
  const features = [
    {
      icon: <img className="feature_icon" src={Vector} alt="Multi-Product Support" style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.multiProductSupport.title'),
      description: t('products.gourmetMachine.overview.features.multiProductSupport.description')
    },
    {
      icon: <img className="feature_icon" src={HighHeating} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.highPerformanceHeating.title'),
      description: t('products.gourmetMachine.overview.features.highPerformanceHeating.description')
    },
    {
      icon: <img className="feature_icon" src={safetyfeature} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.safetyFeatures.title'),
      description: t('products.gourmetMachine.overview.features.safetyFeatures.description')
    },
    {
      icon: <img className="feature_icon" src={TransportVehical} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.transportMechanism.title'),
      description: t('products.gourmetMachine.overview.features.transportMechanism.description')
    },
    {
      icon: <img className="feature_icon" src={cloudService} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.cloudServicePlatform.title'),
      description: t('products.gourmetMachine.overview.features.cloudServicePlatform.description')
    },
    {
      icon: <img className="feature_icon" src={BackgroundControl} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.backgroundControl.title'),
      description: t('products.gourmetMachine.overview.features.backgroundControl.description')
    }
  ];

  // From PDF Page 7 - UPDATED with missing data
  const productRequirements = t('products.gourmetMachine.data.productRequirements', { returnObjects: true });

  // Electrical Precautions from PDF Page 7 - MISSING DATA
  const electricalPrecautions = [
    'Since the machine has up to 4200W power, the used power cable or power strip must withstand this power. Otherwise, overloads and short circuits may occur.',
    'When the compressor is not used, the heating lines should be disconnected to avoid damage from overheating.',
    'All external outlets must have grounding. The connection diagram for phase conductor, neutral conductor and earth conductor is as follows:'
  ];

  const wiringDiagram = {
    phase: 'Brown/Black',
    neutral: 'Blue',
    ground: 'Green/Yellow'
  };

  // From PDF Page 8 - Heating System Safety
  const heatingSafety = t('products.gourmetMachine.data.heatingSafety', { returnObjects: true });

  // From PDF Page 6, 7 - UPDATED with SIM card details
  const installationRequirements = [
    {
      title: t('products.gourmetMachine.installation.requirements.floorRequirements.title'),
      desc: t('products.gourmetMachine.installation.requirements.floorRequirements.desc'),
      icon: <img className="feature_icon" src={Floor} style={{ height: '100%' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.location.title'),
      desc: t('products.gourmetMachine.installation.requirements.location.desc'),
      icon: <img className="feature_icon" src={Location} style={{ height: '100%' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.weatherProtection.title'),
      desc: t('products.gourmetMachine.installation.requirements.weatherProtection.desc'),
      icon: <img className="feature_icon" src={Weather} style={{ height: '100%' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.simCardSelection.title'),
      desc: t('products.gourmetMachine.installation.requirements.simCardSelection.desc'),
      icon: <img className="feature_icon" src={Network} style={{ height: '100%' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.electricalRequirements.title'),
      desc: t('products.gourmetMachine.installation.requirements.electricalRequirements.desc'),
      icon: <img className="feature_icon" src={Electrical} style={{ height: '100%' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.ventilation.title'),
      desc: t('products.gourmetMachine.installation.requirements.ventilation.desc'),
      icon: <img className="feature_icon" src={Ventilation} style={{ height: '100%' }} />,
    }
  ];

  // From PDF Page 9 - Installation Steps
  const installationSteps = t('products.gourmetMachine.data.installationSteps', { returnObjects: true });

 

  // From PDF Page 11 - App Purchase Instructions

  const purchaseFlow = [
    { number: '01', title: t('products.gourmetMachine.operation.purchaseFlow.step1.title'), description: t('products.gourmetMachine.operation.purchaseFlow.step1.description') },
    { number: '02', title: t('products.gourmetMachine.operation.purchaseFlow.step2.title'), description: t('products.gourmetMachine.operation.purchaseFlow.step2.description') },
    { number: '03', title: t('products.gourmetMachine.operation.purchaseFlow.step3.title'), description: t('products.gourmetMachine.operation.purchaseFlow.step3.description') },
    { number: '04', title: t('products.gourmetMachine.operation.purchaseFlow.step4.title'), description: t('products.gourmetMachine.operation.purchaseFlow.step4.description') },
    { number: '05', title: t('products.gourmetMachine.operation.purchaseFlow.step5.title'), description: t('products.gourmetMachine.operation.purchaseFlow.step5.description') },



  ];

  // From PDF Page 11 - MISSING: Complete order flow diagram
  const completeOrderFlow = [
    'Press the "Select" option',
    'Choose the desired dish',
    'Click on purchase button',
    'Choose option "cold" or "hot"',
    'Confirm selection',
    'Choose payment method: Member card, Credit/EC card, or mobile device',
    'Complete payment',
    'Receive product'
  ];

  // From PDF Page 11 - Member Card System
  const memberCardInfo = [
    'Customers can purchase member card by contacting us directly',
    'Card can be recharged via PayPal by sending money to specified PayPal ID',
    'NAF team will recharge card once transaction is confirmed',
    'Members receive email notification when card balance falls below €20'
  ];

  const paymentMethods = [
    { method: 'Member Card', icon: <AccountBalanceWallet /> },
    { method: 'Credit Card / EC Card', icon: <CreditCard /> },
    { method: 'Mobile Devices', icon: <Smartphone /> }
  ];

  // From PDF Page 12, 13, 14, 15, 26
  const maintenanceTasks = t('products.gourmetMachine.data.maintenanceTasks', { returnObjects: true });
  const safetyGuidelines = t('products.gourmetMachine.data.safetyGuidelines', { returnObjects: true });
  const supportDetails = t('products.gourmetMachine.data.supportDetails', { returnObjects: true });
  // From PDF Page 11 - App Purchase Instructions

  // From PDF Page 16-18 - Common Errors
  const commonErrors = t('products.gourmetMachine.data.commonErrors', { returnObjects: true });

  // From PDF Page 20-23 - Error Codes
  const errorCodes = t('products.gourmetMachine.data.errorCodes', { returnObjects: true });

  // From PDF Page 19 - Child Safety
  const childSafety = t('products.gourmetMachine.data.childSafety', { returnObjects: true });

  // From PDF Page 24-27 - Service & Warranty
  const serviceInfo = {
    warranty: '1 year warranty (excluding non-natural damage). Free parts and service during warranty (excluding wear parts)',
    phoneSupport: 'Mon-Sat 08:00-18:00 (except holidays). Emergency mobile support available',
    phoneNumbers: 'German: 0162/1638005, English: 0152/23805013',
    email: 'info@naf-halsbach.de',
    serviceEmail: 'info@naf-kundendienst.de',
    whatsapp: 'Same as phone numbers',
    onSiteService: 'Technicians dispatched when remote support insufficient. Costs agreed in advance'
  };

 
  const safetyPoints = [
    t("products.gourmetMachine.maintenance.safetyPoints.point1"),
    t("products.gourmetMachine.maintenance.safetyPoints.point2"),
    t("products.gourmetMachine.maintenance.safetyPoints.point3"),
    t("products.gourmetMachine.maintenance.safetyPoints.point4"),

  ];
  const faqData = [
    {
      question: t('products.financing.faq1Question'),
      answer: t('products.financing.faq1Answer')
    },
    {
      question: t('products.financing.faq2Question'),
      answer: t('products.financing.faq2Answer')
    },
    {
      question: t('products.financing.faq3Question'),
      answer: t('products.financing.faq3Answer')
    },
    {
      question: t('products.financing.faq4Question'),
      answer: t('products.financing.faq4Answer')
    },
    {
      question: t('products.financing.faq5Question'),
      answer: t('products.financing.faq5Answer')
    },
    {
      question: t('products.financing.faq6Question'),
      answer: t('products.financing.faq6Answer')
    },
    {
      question: t('products.financing.faq7Question'),
      answer: t('products.financing.faq7Answer')
    },
    {
      question: t('products.financing.faq8Question'),
      answer: t('products.financing.faq8Answer')
    },
    {
      question: t('products.financing.faq9Question'),
      answer: t('products.financing.faq9Answer')
    },
    {
      question: t('products.financing.faq10Question'),
      answer: t('products.financing.faq10Answer')
    }
  ];


  const TickIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
      <path d="M17.5 1.41L5.5 13.41L0 7.91L1.41 6.5L5.5 10.58L16.09 0L17.5 1.41Z" fill="#7FEE64" />
    </svg>
  );

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="section-container main-container" style={{ height: '100%', display: 'block', flexDirection: ' column' }}>

      <Box className="hero_sec"
        sx={{
          width: "100%",
          minHeight: "65vh",

          display: "flex",
          justifyContent: "space-between",

          boxSizing: "border-box",
        }}
      >
        {/* LEFT SIDE CONTENT */}
        <Box className="product_hero_text" sx={{ color: "#fff", width: '50%', pt: 10 }}>

          <h1 className='headings-h1 gourmate_Heading ' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' }, letterSpacing: '-0.84px', margin: "10px 0px !important", width: '60%' }}>
            {t('products.gourmetMachine.title')}
          </h1>


          <Typography
            sx={{

              fontSize: "16px",
              color: "#C2C2C4",
              width: { md: '75%', sm: '90%' },

              lineHeight: 1.6,
            }} className='bodyRegularText3 '
          >
            {t('products.gourmetMachine.subtitle')}
          </Typography>
        </Box>


        {/* RIGHT SIDE IMAGE */}
        <Box className='Product_hero_img_sec'
          sx={{
            width: "250px",

            aspectRatio: "169 / 250",
            overflow: "hidden",
            display: { xs: 'none', sm: 'none', md: "flex" },
            justifyContent: "flex-start",

          }}
        >
          <img className='Product_hero_img'
            src={VendImg}
            alt="Gourmet Vending Machine"
            style={{

              width: '100%',
              height: '450px',
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* <div className='section-container'> */}



      {/* Navigation Tabs */}
      <Paper className='machine_header' sx={{ mb: 3, mt: 6, backgroundColor: '#444', color: '#9D9EA1' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            color: '#9D9EA1',
            '& .MuiTab-root': {
              color: '#9D9EA1',
            },
            '& .Mui-selected': {
              color: '#FA7854 !important',
              fontWeight: 'bold'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#FA7854',


            },
          }}
        >
          <Tab className='bodyRegularText4' label={t('products.gourmetMachine.tabs.overview')} />
          <Tab className='bodyRegularText4' label={t('products.gourmetMachine.tabs.specifications')} />
          <Tab className='bodyRegularText4' label={t('products.gourmetMachine.tabs.installation')} />
          <Tab className='bodyRegularText4' label={t('products.gourmetMachine.tabs.operation')} />
          <Tab className='bodyRegularText4' label={t('products.gourmetMachine.tabs.maintenance')} />
          <Tab className='bodyRegularText4' label={t('products.gourmetMachine.tabs.troubleshooting')} />
          <Tab className='bodyRegularText4' label={t('products.gourmetMachine.tabs.errorCodes')} />
          <Tab className='bodyRegularText4' label={t('products.gourmetMachine.tabs.serviceWarranty')} />
        </Tabs>
      </Paper>

      {/* Tab 0: Overview - PDF Page 2, 5 */}
      {tabValue === 0 && (
        <Box >
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Box
                  className="feature_card"
                  sx={{
                    gap: '90px',
                    // height: 250,
                    backgroundColor: '#161616',
                    border: 'solid 1px #393939',
                    borderRadius: '24px',
                    color: '#9D9EA1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '32px'
                  }}>
                  <Box className="feature_icon_sec" sx={{ height: '60px ' }}>
                    {feature.icon}
                  </Box>
                  <Box sx={{ minHeight: { sx: 'none', md: '120px' } }}>
                    <Typography
                      variant="h6"
                      className='bodyRegularText-3'
                      sx={{ mb: 1, color: '#fcfcfc' }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      className='bodyRegularText4'
                      sx={{ color: '#C2C2C4' }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Machine Components - PDF Page 3 */}
          <Card sx={{ mb: 4, mt: 12, background: 'none', border: 'none', boxShadow: 'none' }}>
            <Box>
              <Typography variant="h5" className='headings-h2' fontWeight="bold" gutterBottom sx={{ color: "#fcfcfc" }}>
                {t('products.gourmetMachine.overview.machineComponents')}
              </Typography>

              <Box className="machine_bubbles_sec"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  mt: 3,
                }}
              >
                {machineComponents.map((component, index) => (
                  <Box className="machine_bubbles"
                    key={index}
                    sx={{
                      padding: ' 18px 32px',
                      borderRadius: "50px",
                      border: "1px solid #393939",
                      bgcolor: '#161616',
                      color: "#C2C2C4",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",

                    }}
                  > <Typography className='bodyRegularText4'>

                      {component}
                    </Typography>
                  </Box>
                ))}
              </Box>

            </Box>
          </Card>

          {/* Product Requirements - PDF Page 7 */}
          <Grid className=' Product_Requirements' container spacing={3} sx={{ mt: 4, display: 'flex', }}>

            {/* LEFT CARD */}
            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
              <Box className="products_list_sec" sx={{
                mb: 3,
                height: '100%',
                flex: 1,
                backgroundColor: '#161616',
                border: 'solid 1px #393939',
                borderRadius: '24px',

              }}
              >

                <Box className="product_header" sx={{ borderBottom: '1px solid #393939', padding: '18px 24px', }}>
                  <Typography
                    variant="h5"
                    className="headings-h4"
                    sx={{ color: '#fcfcfc' }}
                  >
                    {t('products.gourmetMachine.overview.productRequirements')}
                  </Typography>
                </Box>



                <Box className="product_points_sec" sx={{ padding: '18px 24px', }}>
                  <List
                    component="ul"
                    sx={{ pl: 4, listStyleType: 'disc', }}>
                    {productRequirements.map((req, index) => (
                      <ListItem key={index} component="li" sx={{ display: 'list-item', color: '#c2c2c4', py: 1, pl: 1, }} className="bodyRegularText4">
                        <Typography

                          className="bodyRegularText4"
                          sx={{ color: '#c2c2c4' }}
                        > {req}  </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Grid>

            {/* RIGHT CARD */}
            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  height: '100%',
                  flex: 1,
                  backgroundColor: '#161616',
                  border: 'solid 1px #393939',
                  borderRadius: '24px',
                }}
              >
                <Box className="product_header" sx={{ borderBottom: '1px solid #393939', padding: '18px 24px', }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: '#fcfcfc', display: 'flex', alignItems: 'center' }}
                    className='headings-h4'
                  >
                    {t('products.gourmetMachine.overview.heatingSystemSafety')}
                  </Typography>
                </Box>



                <Box className="product_points_sec" sx={{ padding: '18px 24px', }}>
                  <List
                    component="ul"
                    sx={{
                      pl: 4,
                      listStyleType: 'disc',
                    }}
                  >
                    {heatingSafety.map((safety, index) => (
                      <ListItem
                        key={index}
                        component="li"
                        sx={{
                          display: 'list-item',
                          color: '#c2c2c4',
                          py: 1,
                        }}
                        className="bodyRegularText4"
                      >
                        <Typography

                          className="bodyRegularText4"
                          sx={{ color: '#c2c2c4' }}
                        > {safety}  </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Card>
            </Grid>

          </Grid>



        </Box>
      )}

      {/* Tab 1: Specifications - PDF Page 4 */}
      {tabValue === 1 && (
        <Card sx={{ mb: 4, backgroundColor: '#1d1d1f', border: 'none', boxShadow: 'none' }}>
          <CardContent id='card_content_sec' sx={{ p: "0px !important" }}>
            <Typography variant="h5" className='headings-h3 Tecnical-specification' fontWeight="bold" gutterBottom sx={{ color: '#fcfcfc' }}>
              {t('products.gourmetMachine.specifications.title')}
            </Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              {specifications.map((spec, index) => (

                <Grid item xs={12} sm={6} md={3} key={index}>

                  <Paper sx={{ bgcolor: '#161616', border: 'solid 1px #393939', borderRadius: '24px', width: '100%', height: '100%' }}>
                    <Box sx={{ padding: '24px' }}>
                      <Typography variant="body2" className='bodyRegularText4' color='#9D9EA1'>
                        {spec.label}
                      </Typography>
                      <Typography variant="h6" fontWeight="bold" color='#FCFCFC' className='bodyRegularText4'>
                        {spec.value}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>

              ))}
            </Grid>


          </CardContent>
        </Card>
      )}

      {/* Tab 3: Installation - PDF Page 6, 7, 9 */}
      {tabValue === 2 && (
        <Box >
          <Box sx={{ mb: 3, backgroundColor: '#1d1d1f' }}>
            <Box sx={{ mt: 6 }}>
              <Typography
                variant="h5"
                className="headings-h3"
                fontWeight="bold"
                gutterBottom
                sx={{ color: '#ffffff', }}
              >
                {t('products.gourmetMachine.installation.title')}
              </Typography>

              {/* === New 3-Column Grid Layout === */}
              <Grid container spacing={2} >
                {installationRequirements.map((req, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: 6 }}>
                    <Paper
                      sx={{
                        backgroundColor: "#161616",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: 3,
                        borderRadius: "24px",
                        border: "1px solid #393939",
                        height: "100%",

                      }}
                    >
                      {/* Icon */}
                      <Box sx={{ fontSize: "40px", color: "#ff6f3c" }}>
                        {req.icon} {/* Replace with your SVG */}
                      </Box>
                      <Box >

                        {/* Title */}
                        <Typography
                          fontWeight="bold"
                          sx={{ color: "#fcfcfc", mb: 1 }}
                          className="bodyRegularText3"
                        >
                          {req.title}
                        </Typography>

                        {/* Description */}
                        <Typography className="bodyRegularText4" sx={{ color: "#c2c2c4", minHeight: '60px', }}>
                          {req.desc}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box className="Installation_Child_Safety_sec " sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', }}>

            {/* Installation Steps - Stays the Same */}
            <Box className="Installation_Child_Safety_card" sx={{ width: '48%', mb: 4, mt: 12, backgroundColor: '#161616', borderRadius: '24px' }}>
              <Box >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#fcfcfc', borderBottom: '1px solid #393939', padding: '15px 25px ' }}

                  className="headings-h4"
                >
                  {t('products.gourmetMachine.installation.installationProcedure')}
                </Typography>
                <Box className="product_points_sec" sx={{ p: " 10px 20px", }} >
                  <List sx={{
                    p: " 0px 25px",
                  }} >
                    {installationSteps.map((step, index) => (
                      <ListItem key={index} className="bodyRegularText4" sx={{
                        color: "#c2c2c4",
                        display: "list-item",
                        listStyleType: "disc",
                      }}>
                        <Typography

                          className="bodyRegularText4"
                          sx={{ color: '#c2c2c4' }}
                        > {step}  </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>

            {/* Child Safety Guidelines */}


            <Box className="Installation_Child_Safety_card" sx={{ width: '48%', mb: 4, mt: 12, backgroundColor: '#161616', borderRadius: '24px' }}>
              <Box sx={{ p: '0px' }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom

                  sx={{ color: '#fcfcfc', borderBottom: '1px solid #393939', padding: '15px 25px ' }}
                  className="headings-h4"
                >
                  {t('products.gourmetMachine.installation.childSafetyGuidelines')}
                </Typography>
                <Box className="product_points_sec" sx={{ p: " 10px 20px", }} >

                  <List sx={{

                    p: " 0px 25px",

                  }} >
                    {childSafety.map((safety, index) => (
                      <ListItem
                        key={index}
                        className="bodyRegularText4"
                        sx={{
                          color: "#c2c2c4",
                          display: "list-item",              // turn it into a real list item
                          listStyleType: "disc",             // use actual bullet
                          // indent bullet
                        }}
                      >
                        <Typography

                          className="bodyRegularText4"
                          sx={{ color: '#c2c2c4' }}
                        > {safety}  </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {/* Tab 4: Operation - PDF Page 10, 11 */}
      {tabValue === 3 && (
        <Box>
          {/* Operating Instructions Title */}
          <Card sx={{ mb: 4, backgroundColor: 'transparent', borderRadius: '24px', boxShadow: 'none', border: 'none' }}>
            <CardContent sx={{ m: '-10px', mt: 2 }} >
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ color: '#fcfcfc', mb: 4 }}
                className='headings-h3'
              >
                {t('products.gourmetMachine.operation.title')}
              </Typography>

              {/* Two Column Layout */}
              {/* Down Column - Admin System Access & Member Card */}
              {/* Left Column - Product Selection */}

              <Box sx={{ gap: 4, }}>

                <Box sx={{ width: '100%', mb: 5 }}>
                  {purchaseFlow.map((step, index) => (
                    <Box
                      key={index}
                      sx={{
                        mt: { sm: 1, md: 3 },
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: "10px",
                        borderTop: '1px solid #6F6F6F',
                        p: "30px 0px",
                        flex: 1
                      }}
                    >
                      <Box className="operationNumber_sec" sx={{ width: '33%' }}>
                        <Typography
                          className='bodyRegularText4'
                          sx={{ color: '#9D9EA1', mb: 1 }}
                        >
                          {step.number}
                        </Typography>
                      </Box>
                      <Box sx={{ width: '33%', }}>
                        <Typography
                          className='bodyRegularText4'
                          sx={{ color: '#c2c2c4', textWrap: 'nowrap', minWidth: '90px' }}
                        >
                          {step.title}
                        </Typography>
                      </Box>
                      <Box className="operationNumber_sec" sx={{ width: '33%' }}>
                        <Typography
                          className='bodyRegularText4'
                          sx={{ color: '#9D9EA1' }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>


              {/* Product Requirements - PDF Page 7 */}
              <Grid className=' Product_Requirements' container spacing={3} sx={{ mt: 4, display: 'flex', }}>

                {/* Admin System Access */}
                {/* LEFT CARD */}
                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                  <Box className="products_list_sec" sx={{
                    mb: 3,
                    height: '100%',
                    flex: 1,
                    backgroundColor: '#161616',
                    border: 'solid 1px #393939',
                    borderRadius: '24px',

                  }}
                  >

                    <Box className="product_header" sx={{ borderBottom: '1px solid #393939', padding: '18px 24px', }}>
                      <Typography
                        variant="h5"
                        className="headings-h4"
                        sx={{ color: '#fcfcfc' }}
                      >
                        {safetyGuidelines.adminSystemAccess.title}
                      </Typography>
                    </Box>



                    <Box className="product_points_sec" sx={{ padding: '18px 24px', }}>
                      <List
                        component="ul"
                        sx={{ pl: 4, listStyleType: 'disc', }}>
                        {safetyGuidelines.adminSystemAccess.points.map((point, index) => (
                          <ListItem
                            key={index}
                            className="bodyRegularText4"
                            sx={{
                              color: "#c2c2c4",
                              display: "list-item",
                              listStyleType: "disc",
                            }}
                          >
                            <Typography className="bodyRegularText4" sx={{ color: '#c2c2c4' }}> {point}  </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Box>
                </Grid>

                {/* RIGHT CARD */}
                {/* Member Card System */}

                <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
                  <Card
                    sx={{
                      height: '100%',
                      flex: 1,
                      backgroundColor: '#161616',
                      border: 'solid 1px #393939',
                      borderRadius: '24px',
                    }}
                  >
                    <Box className="product_header" sx={{ borderBottom: '1px solid #393939', padding: '18px 24px', }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: '#fcfcfc', display: 'flex', alignItems: 'center' }}
                        className='headings-h4'
                      >
                        {safetyGuidelines.memberCardSystem.title}
                      </Typography>
                    </Box>



                    <Box className="product_points_sec" sx={{ padding: '18px 24px', }}>
                      <List
                        component="ul"
                        sx={{
                          pl: 4,
                          listStyleType: 'disc',
                        }}
                      >
                        {safetyGuidelines.memberCardSystem.points.map((point, index) => (
                          <ListItem
                            key={index}
                            className="bodyRegularText4"
                            sx={{
                              color: "#c2c2c4",
                              display: "list-item",
                              listStyleType: "disc",
                            }}
                          >
                            <Typography className="bodyRegularText4" sx={{ color: '#c2c2c4' }}> {point}  </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Card>
                </Grid>

              </Grid>

            </CardContent>
          </Card>
        </Box >
      )
      }
      {/* Tab 5: Maintenance - PDF Page 12-15, 26 */}
      {tabValue === 4 && (

        <Box
          sx={{
            backgroundColor: "#1d1d1f", border: 'none',
            boxShadow: 'none',

            borderRadius: "24px",
          }}
        >
          <Box sx={{ mt: 6 }}>
            {/* MAIN TITLE */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#ffffff" }}
              className="headings-h3"
            >
              {t('products.gourmetMachine.maintenance.title')}
            </Typography>

            {/* SECTIONS */}
            {[
              { key: "Product Channels", label: t('products.gourmetMachine.maintenance.sections.productChannels') },
              { key: "Lifting Platform", label: t('products.gourmetMachine.maintenance.sections.liftingPlatform') },
              { key: "Compressor", label: t('products.gourmetMachine.maintenance.sections.compressor') },
              { key: "Heating System", label: t('products.gourmetMachine.maintenance.sections.heatingSystem') },
              { key: "Electrical", label: t('products.gourmetMachine.maintenance.sections.electrical') },
              { key: "Sensors", label: t('products.gourmetMachine.maintenance.sections.sensors') },
              { key: "General", label: t('products.gourmetMachine.maintenance.sections.general') },
            ].map(({ key: section, label: sectionLabel }) => {
              const sectionTasks = maintenanceTasks.filter(
                (task) => task.section === section
              );
              if (sectionTasks.length === 0) return null;

              return (
                <Box
                  key={section}
                  sx={{
                    backgroundColor: "#111111",
                    border: "1px solid #393939",
                    borderRadius: "16px",
                    padding: "24px",
                    mt: 4,
                  }}
                >
                  {/* SECTION TITLE */}
                  <Typography
                    sx={{ color: "#fcfcfc", mb: 3 }}
                    className="headings-h4"
                  >
                    {sectionLabel}
                  </Typography>

                  {/* FULL WIDTH DIVIDER */}
                  <Divider
                    sx={{
                      borderColor: "#393939",
                      mb: 3,
                      mx: "-24px",
                    }}
                  />

                  {/* TASKS */}
                  <List sx={{ p: 0 }}>
                    {sectionTasks.map((task, index) => (
                      <Box
                        key={index}
                        sx={{ mb: index < sectionTasks.length - 1 ? 3 : 0 }}
                      >
                        {/* Task Title */}
                        <Typography
                          sx={{ color: "#fcfcfc" }}
                          className="bodyRegularText3"
                        >
                          {task.task}
                        </Typography>

                        {/* Frequency */}
                        <Typography
                          style={{
                            color: "#c2c2c4",
                            marginRight: "8px",
                            marginTop: "4px",

                          }} className="bodyRegularText4"
                        >
                          • {t('products.gourmetMachine.maintenance.frequency')}: {task.frequency}
                        </Typography>


                      </Box>
                    ))}
                  </List>
                </Box>
              );
            })}

            {/* SAFETY NOTES SECTION */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                backgroundColor: "#111111",
                borderRadius: "16px",
                border: "1px solid #393939",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#ffffff", mb: 2 }}
                className='headings-h4'
              >
                {t('products.gourmetMachine.maintenance.heatingSafetyNotes')}
              </Typography>

              <Divider
                sx={{
                  borderColor: "#393939",
                  mb: 3,
                  mx: "-24px",
                }}
              />

              <Typography sx={{ color: "#fcfcfc", mb: 2 }} className='bodyRegularText4'>
                {t('products.gourmetMachine.maintenance.heatingSafetyText')}
              </Typography>

              <Box className="bodyRegularText4" sx={{ color: "#c2c2c4" }}>
                <List sx={{ listStyleType: "disc", pl: 3 }}>
                  {safetyPoints.map((point, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        display: "list-item",
                        color: "#c2c2c4",
                        py: 0.5,
                        px: 0,
                      }}
                    >
                      <Typography sx={{ color: "#fcfcfc", }} className='bodyRegularText4'>
                        {point}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Box>

      )}


      {/* Tab 6: Troubleshooting - PDF Page 16-18 */}
      {tabValue === 5 && (
        <Box>
          <Box sx={{ mb: 4, backgroundColor: "#1d1d1f", boxShadow: 'none', border: 'none' }}>
            <Box sx={{ mt: 6 }}>

              {/* Title */}
              <Typography
                variant="h5"
                className='headings-h3'
                sx={{ color: "#fcfcfc", mb: 3 }}
              >
                {t('products.gourmetMachine.troubleshooting.title')}
              </Typography>

              {/* Problems Grid */}
              <Grid container spacing={2} sx={{ width: '100%' }}>

                {commonErrors.map((error, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: "flex", }} >
                    <Box className="Troubleshooting_boxes"
                      sx={{
                        backgroundColor: "#161616",
                        borderRadius: "18px",
                        padding: "22px",
                        border: "1px solid #2d2d2f",
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        gap: "10px !important",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Problem Number */}
                      <Typography
                        sx={{ fontSize: "11px", color: "#8a8a8a", mb: 1 }}
                        className='bodyRegularText4'
                      >
                        {t('products.gourmetMachine.troubleshooting.problem')} {index + 1}
                      </Typography>
                      <Box>

                        {/* Problem Title */}
                        <Typography
                          sx={{

                            color: "#fcfcfc",

                            mb: 1,
                            flexGrow: 1,

                          }}
                          className='bodyRegularText4'
                        >
                          {error.problem}
                        </Typography>

                        {/* Solution */}
                        <Typography
                          className='bodyRegularText4'
                          sx={{
                            color: "#C2C2C4",
                            fontSize: "14px",
                            lineHeight: 1.65
                          }}
                        >
                          {error.solution}
                        </Typography>
                      </Box>

                    </Box>
                  </Grid>
                ))}

              </Grid>
            </Box>
          </Box>
        </Box>
      )}

      {/* Tab 7: Error Codes - PDF Page 20-23 */}
      {
        tabValue === 6 && (
          <Box>
            <Box sx={{ mb: 4, mt: 6, backgroundColor: 'transparent', boxShadow: 'none', }}>
              <Box sx={{}}>
                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#fcfcfc', mb: 2 }} className='headings-h3'>
                  {t('products.gourmetMachine.errorCodes.title')}
                </Typography>
                <Grid container spacing={2} alignItems="stretch">
                  {errorCodes.map((error, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', margin: '2px 0px' }}>
                      <Paper className="Troubleshooting_boxes"
                        sx={{
                          p: "24px",
                          bgcolor: '#161616',
                          border: '1px solid',
                          borderColor: error.status === 'error' ? '#ef5350' : '#66bb6a',
                          borderRadius: '16px',
                          // height: "100%",
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          gap: '20px',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', }}>
                          {error.status === 'error' ?
                            <Error sx={{ color: '#ef5350', mr: 1, fontSize: 40 }} /> :
                            <CheckCircle sx={{ color: '#66bb6a', mr: 1, fontSize: 40 }} />
                          }
                          <Typography variant="h6" fontWeight="bold" sx={{ color: '#fcfcfc' }} className='bodyRegularText3'>
                            {t('products.gourmetMachine.errorCodes.code')} {error.code}
                          </Typography>
                        </Box>
                        <Box >

                          <Typography className='bodyRegularText4' sx={{ color: '#c2c2c4', }}>
                            {error.meaning}
                          </Typography>
                          <Typography
                            className='bodyRegularText4'
                            sx={{
                              color: '#c2c2c4',

                            }}
                          >
                            {t('products.gourmetMachine.errorCodes.status')}: {error.status === 'error' ? t('products.gourmetMachine.errorCodes.statusError') : t('products.gourmetMachine.errorCodes.statusNormal')}
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        )
      }
      {/* Tab 9: Service & Warranty - PDF Page 24-27 */}
      {
        tabValue === 7 && (<>

          {/* Service Hours */}
          {/* Contact Information */}

          {/* <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 4, mt: 8 }}>

            <Card sx={{ width: '48%', mb: 4, backgroundColor: '#161616', borderRadius: '24px' }}>
              <CardContent sx={{ p: '0px' }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#fcfcfc', borderBottom: '1px solid #393939', padding: '15px 25px' }}
                  className="headings-h4"
                >
                  {supportDetails.contactInformation.title}
                </Typography>
                <Box sx={{ p: "10px 20px" }}>
                  <List sx={{ p: "0px 25px" }}>
                    {supportDetails.contactInformation.items.map((item, index) => (
                      <ListItem
                        key={index}
                        className="bodyRegularText4"
                        sx={{
                          color: "#c2c2c4",
                          display: "list-item",
                          listStyleType: "disc",
                        }}
                      >
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ width: '48%', mb: 4, backgroundColor: '#161616', borderRadius: '24px' }}>
              <CardContent sx={{ p: '0px' }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#fcfcfc', borderBottom: '1px solid #393939', padding: '15px 25px' }}
                  className="headings-h4"
                >
                  {supportDetails.serviceHours.title}
                </Typography>
                <Box sx={{ p: "10px 20px" }}>
                  <List sx={{ p: "0px 25px" }}>
                    {supportDetails.serviceHours.items.map((item, index) => (
                      <ListItem
                        key={index}
                        className="bodyRegularText4"
                        sx={{
                          color: "#c2c2c4",
                          display: "list-item",
                          listStyleType: "disc",
                        }}
                      >
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>

          </Box> */}



          <Grid className=' Product_Requirements' container spacing={3} sx={{ mt: 4, display: 'flex', }}>

            {/* LEFT CARD */}
            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
              <Box className="products_list_sec" sx={{
                mb: 3,
                height: '100%',
                width: '100%',
                flex: 1,
                backgroundColor: '#161616',
                border: 'solid 1px #393939',
                borderRadius: '24px',

              }}
              >

                <Box className="product_header" sx={{ borderBottom: '1px solid #393939', padding: '18px 24px', }}>
                  <Typography
                    variant="h5"
                    className="headings-h4"
                    sx={{ color: '#fcfcfc' }}
                  >
                    {supportDetails.contactInformation.title}
                  </Typography>
                </Box>



                <Box className="product_points_sec" sx={{ padding: '18px 24px', }}>
                  <List
                    component="ul"
                    sx={{ pl: 4, listStyleType: 'disc', }}>
                    {supportDetails.contactInformation.items.map((item, index) => (
                      <ListItem key={index} component="li" sx={{ display: 'list-item', color: '#c2c2c4', py: 1, pl: 1, }} className="bodyRegularText4">
                        <Typography

                          className="bodyRegularText4"
                          sx={{ color: '#c2c2c4' }}
                        > {item}  </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Grid>

            {/* RIGHT CARD */}
            <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  backgroundColor: '#161616',
                  border: 'solid 1px #393939',
                  borderRadius: '24px',
                }}
              >
                <Box className="product_header" sx={{ borderBottom: '1px solid #393939', padding: '18px 24px', }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: '#fcfcfc', display: 'flex', alignItems: 'center' }}
                    className='headings-h4'
                  >
                    {supportDetails.serviceHours.title}
                  </Typography>
                </Box>



                <Box className="product_points_sec" sx={{ padding: '18px 24px', }}>
                  <List
                    component="ul"
                    sx={{
                      pl: 4,
                      listStyleType: 'disc',
                    }}
                  >
                    {supportDetails.serviceHours.items.map((item, index) => (
                      <ListItem
                        key={index}
                        component="li"
                        sx={{
                          display: 'list-item',
                          color: '#c2c2c4',
                          py: 1,
                        }}
                        className="bodyRegularText4"
                      >
                        <Typography

                          className="bodyRegularText4"
                          sx={{ color: '#c2c2c4' }}
                        > {item}  </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Card>
            </Grid>

          </Grid>
        </>

        )
      }

      {/* Finance & pricing */}
      <Box sx={{ mt: { xs: 8, md: 16 }, px: { xs: 2, md: 0 } }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: 'center' }}>
          <Typography
            sx={{
              fontWeight: 700,
              mb: 1,
              color: '#fcfcfc',
              textAlign: 'center',
            }}
            className="headings-h2"
          >
            {t('products.financing.title')}
          </Typography>
          <Typography
            sx={{
              color: '#c2c2c4',
              mb: 1,
              textAlign: 'center',
            }}
            className="bodyRegularText3"
          >
            {t('products.financing.subtitle')}
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={{ xs: 8, sm: 8  ,md:3}} justifyContent="center">
          {/* Purchase */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: '#161616',
                border: '1px solid #393939',
                borderRadius: '24px',
                p: { xs: 3, md: 3 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#c2c2c4' }} className="bodyRegularText2">
                {t('products.financing.purchaseTitle')}
              </Typography>
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#FA7854' }} className="headings-h4">
                {t('products.financing.purchasePrice')}
              </Typography>
              <Typography sx={{ textAlign: 'center', color: '#c2c2c4', mb: 1 }}>
                {t('products.financing.purchasePeriod')}
              </Typography>

              <List dense sx={{ p: 0, mt: { xs: 4, md: 6 }, flexGrow: 1 }}>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.purchaseBenefit1')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.purchaseBenefit2')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.purchaseBenefit3')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.purchaseBenefit4')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: { xs: 4, md: 6 } }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.purchaseBenefit5')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
              </List>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: { xs: 4, md: 6 } }}>
                <Button
                  sx={{
                    padding: '20px 32px',
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    borderRadius: '32px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#E56A47' },
                  }}
                  className="bodyRegularText4"
                >
                  {t('products.financing.button')}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Leasing */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: '#161616',
                border: '1px solid #393939',
                borderRadius: '24px',
                p: { xs: 3, md: 3 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#c2c2c4' }} className="bodyRegularText2">
                {t('products.financing.leasingTitle')}
              </Typography>
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#FA7854' }} className="headings-h4">
                {t('products.financing.leasingPrice')}
              </Typography>
              <Typography sx={{ textAlign: 'center', color: '#c2c2c4', mb: 1 }}>
                {t('products.financing.leasingPeriod')}
              </Typography>

              <List dense sx={{ p: 0, mt: { xs: 4, md: 6 }, flexGrow: 1 }}>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.leasingBenefit1')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.leasingBenefit2')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.leasingBenefit3')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.leasingBenefit4')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon sx={{ fontSize: 16 }} />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.leasingBenefit5')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.leasingBenefit6')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
              </List>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: { xs: 4, md: 6 } }}>
                <Button
                  sx={{
                    padding: '20px 32px',
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    borderRadius: '32px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#E56A47' },
                  }}
                  className="bodyRegularText4"
                >
                  {t('products.financing.button')}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Hire-Purchase */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: '#161616',
                border: '1px solid #393939',
                borderRadius: '24px',
                p: { xs: 3, md: 3 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#c2c2c4' }} className="bodyRegularText3">
                {t('products.financing.hirePurchaseTitle')}
              </Typography>
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#FA7854' }} className="headings-h4">
                {t('products.financing.hirePurchasePrice')}
              </Typography>
              <Typography sx={{ textAlign: 'center', color: '#c2c2c4', mb: 1 }} className="bodyRegularText3">
                {t('products.financing.hirePurchasePeriod')}
              </Typography>

              <List dense sx={{ p: 0, mt: { xs: 4, md: 6 }, flexGrow: 1 }}>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.hirePurchaseBenefit1')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.hirePurchaseBenefit2')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.hirePurchaseBenefit3')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.hirePurchaseBenefit4')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
                <ListItem sx={{ p: 0, mb: { xs: 4, md: 6 } }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <TickIcon />
                  </ListItemIcon>
                  <ListItemText primary={t('products.financing.hirePurchaseBenefit5')} primaryTypographyProps={{ sx: { color: '#c2c2c4' } }} className="bodyRegularText3" />
                </ListItem>
              </List>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: { xs: 4, md: 6 } }}>
                <Button
                  sx={{
                    padding: '20px 32px',
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    borderRadius: '32px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#E56A47' },
                  }}
                  className="bodyRegularText4"
                >
                  {t('products.financing.button')}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Seasonal, CTA & FAQ */}
      <Container className="seasonal_container" maxWidth="md" sx={{ mt: { xs: 12, md: 18 } ,p: { xs: 0, md: 2 } ,zIndex:1}}>
        <Typography
          sx={{
            textAlign: 'center',
            color: '#FCFCFC',
            fontWeight: 700,
            fontSize: '40px',
            mb: 4,
          }}
          className="headings-h4"
        >
          {t('products.financing.seasonalTitle')}
        </Typography>

        <Grid container spacing={{ xs: 8, sm: 8 ,md:3}} sx={{ mb: { xs: 8, md: 7 } }}>
          {/* Summer */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#161616',
                border: '1px solid #393939',
                borderRadius: '24px',
                p: { xs: 3, md: 2 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: '#FCFCFC' }} className="bodyRegularText3">
                  {t('products.financing.summerTitle')}
                </Typography>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M2 22H4.22222M22 2V4.22222M39.7778 22H42M22 39.7778V42M7.77778 7.77778L9.33333 9.33333M36.2222 7.77778L34.6667 9.33333M34.6667 34.6667L36.2222 36.2222M9.33333 34.6667L7.77778 36.2222M13.1111 22C13.1111 24.3575 14.0476 26.6184 15.7146 28.2854C17.3816 29.9524 19.6425 30.8889 22 30.8889C24.3575 30.8889 26.6184 29.9524 28.2854 28.2854C29.9524 26.6184 30.8889 24.3575 30.8889 22C30.8889 19.6425 29.9524 17.3816 28.2854 15.7146C26.6184 14.0476 24.3575 13.1111 22 13.1111C19.6425 13.1111 17.3816 14.0476 15.7146 15.7146C14.0476 17.3816 13.1111 19.6425 13.1111 22Z" stroke="#F4F4F4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: '#C2C2C4', mb: 4 }} className="bodyRegularText4">
                  {t('products.financing.summerPeriod')}
                </Typography>
                <Typography sx={{ color: '#FA7854' }} className="bodyRegularText2">
                  {t('products.financing.summerPrice')}
                </Typography>
              </Box>

              <Typography sx={{ color: '#C2C2C4', flexGrow: 1 }} className="bodyRegularText4">
                {t('products.financing.summerDescription')}
              </Typography>

              <Box sx={{ mt: { xs: 3, md: 2 } }}>
                <Button
                  sx={{
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    borderRadius: '32px',
                    padding: '20px 32px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#E56A47' },
                  }}
                  className="bodyRegularText4"
                >
                  {t('products.financing.button')}
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Winter */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#161616',
                border: '1px solid #393939',
                borderRadius: '24px',
                p: { xs: 3, md: 2 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: '#FCFCFC' }} className="bodyRegularText3">
                  {t('products.financing.winterTitle')}
                </Typography>
                <Box sx={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                    <path d="M21.5 12.6111V8.16667M21.5 8.16667V1.5M21.5 8.16667L14.8333 3.72222M21.5 8.16667L28.1667 3.72222M30.3889 21.5H34.8333M34.8333 21.5H41.5M34.8333 21.5L39.2778 14.8333M34.8333 21.5L39.2778 28.1667M21.5 30.3889V34.8333M21.5 34.8333V41.5M21.5 34.8333L14.8333 39.2778M21.5 34.8333L28.1667 39.2778M12.6111 21.5H8.16667M8.16667 21.5H1.5M8.16667 21.5L3.72222 14.8333M8.16667 21.5L3.72222 28.1667M28.1667 21.5C28.1667 25.1819 25.1819 28.1667 21.5 28.1667C17.8181 28.1667 14.8333 25.1819 14.8333 21.5C14.8333 17.8181 17.8181 14.8333 21.5 14.8333C25.1819 14.8333 28.1667 17.8181 28.1667 21.5Z" stroke="#F4F4F4" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </Box>
              </Box>

              <Box sx={{  mb: 2 }}>
                <Typography sx={{ color: '#C2C2C4', mb: 4 }} className="bodyRegularText4">
                  {t('products.financing.winterPeriod')}
                </Typography>
                <Typography sx={{ color: '#E56A47' }} className="bodyRegularText2">
                  {t('products.financing.winterPrice')}
                </Typography>
              </Box>

              <Typography sx={{ color: '#C2C2C4', flexGrow: 1 }} className="bodyRegularText4">
                {t('products.financing.winterDescription')}
              </Typography>

              <Box sx={{ mt: { xs: 4, md: 5 } }}>
                <Button
                  sx={{
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    borderRadius: '34px',
                    padding: '20px 32px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#E56A47' },
                  }}
                  className="bodyRegularText4"
                >
                  {t('products.financing.button')}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Custom Quote CTA */}
        <Box
          sx={{
            backgroundColor: '#161616',
            border: '1px solid #393939',
            borderRadius: '16px',
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'center' },
            justifyContent: 'space-between',
            maxWidth: '800px',
            mx: 'auto',
            gap: { xs: 3, md: 4 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography sx={{ color: '#FCFCFC', flex: 1 }} className="bodyRegularText3">
            {t('products.financing.ctaText')}
          </Typography>
          <Button
            sx={{
              backgroundColor: '#fcfcfc',
              color: '#1a1a1a',
              borderRadius: '32px',
              padding: '20px 32px',
              textTransform: 'none',
              whiteSpace: 'nowrap',
            }}
            className="bodyRegularText4"
          >
            {t('products.financing.ctaButton')}
          </Button>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mt: { xs: 10, md: 12 }, py: { xs: 6, md: 8 },  width: '100%' }}>
          <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
            <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
              {t('products.financing.faqTitle')}
            </Typography>
            <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
              {t('products.financing.faqSubtitle')}
            </Typography>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '80%', md: '70%' }, mx: 'auto' }}>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedIndex === index}
                onChange={() => setExpandedIndex(expandedIndex === index ? null : index)}
                sx={{
                  border: '1px solid #393939',
                  backgroundColor: 'transparent',
                  color: '#C2C2C4',
                  borderRadius: '12px !important',
                  boxShadow: 'none',
                  p:1,
                  mb: 2,
                  '&::before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon sx={{ color: '#C2C2C4' }} />}
                >
                  <Typography className="bodyRegularText4">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="bodyRegularText4">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography className="bodyMediumText2" sx={{ color: '#fcfcfc' }}>
              {t('products.financing.faqContactText')}
            </Typography>
            <Typography className="bodyRegularText3" sx={{ color: '#7FEE64' }}>
              {t('products.financing.faqContactLink')}
            </Typography>
          </Box>
        </Box>
      </Container>



    </div >
    // </div>
  );
}