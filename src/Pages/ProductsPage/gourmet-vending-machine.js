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
  colors
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

export default function GourmetVendingMachinePage() {
  const [tabValue, setTabValue] = useState(0);
  const { t } = useTranslation();

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

  // From PDF Page 3 - MISSING DATA
  const productSideSpecs = {
    front: ['30', '40', '50', '100', '150', '200', '250'],
    back: ['240', 'CBD', '60', '80', '100', '150', '200', '250']
  };

  const productParameters = {
    dimensions: '2320mm × 1700mm × 1028mm',
    brand: '3 MIN RESTAURANT',
    otherParams: '10:28MM 2320MM 2320MM 2320MM'
  };

  // From PDF Page 3
  const machineComponents = t('products.gourmetMachine.data.machineComponents', { returnObjects: true });

  // From PDF Page 5
  const features = [
    {
      icon: <img src={Vector} alt="Multi-Product Support" style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.multiProductSupport.title'),
      description: t('products.gourmetMachine.overview.features.multiProductSupport.description')
    },
    {
      icon: <img src={HighHeating} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.highPerformanceHeating.title'),
      description: t('products.gourmetMachine.overview.features.highPerformanceHeating.description')
    },
    {
      icon: <img src={safetyfeature} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.safetyFeatures.title'),
      description: t('products.gourmetMachine.overview.features.safetyFeatures.description')
    },
    {
      icon: <img src={TransportVehical} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.transportMechanism.title'),
      description: t('products.gourmetMachine.overview.features.transportMechanism.description')
    },
    {
      icon: <img src={cloudService} style={{ height: '60px' }} />,
      title: t('products.gourmetMachine.overview.features.cloudServicePlatform.title'),
      description: t('products.gourmetMachine.overview.features.cloudServicePlatform.description')
    },
    {
      icon: <img src={BackgroundControl} style={{ height: '60px' }} />,
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
      icon: <img src={Floor} style={{ height: '60px' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.location.title'),
      desc: t('products.gourmetMachine.installation.requirements.location.desc'),
      icon: <img src={Location} style={{ height: '60px' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.weatherProtection.title'),
      desc: t('products.gourmetMachine.installation.requirements.weatherProtection.desc'),
      icon: <img src={Weather} style={{ height: '60px' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.simCardSelection.title'),
      desc: t('products.gourmetMachine.installation.requirements.simCardSelection.desc'),
      icon: <img src={Network} style={{ height: '60px' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.electricalRequirements.title'),
      desc: t('products.gourmetMachine.installation.requirements.electricalRequirements.desc'),
      icon: <img src={Electrical} style={{ height: '60px' }} />,
    },
    {
      title: t('products.gourmetMachine.installation.requirements.ventilation.title'),
      desc: t('products.gourmetMachine.installation.requirements.ventilation.desc'),
      icon: <img src={Ventilation} style={{ height: '60px' }} />,
    }
  ];

  // From PDF Page 9 - Installation Steps
  const installationSteps = t('products.gourmetMachine.data.installationSteps', { returnObjects: true });

  // From PDF Page 10 - Background System Operation
  const adminOperations = [
    'Open NAF sales interface, tap upper right corner of screen multiple times',
    'Enter password (Administrator password: 123456) to access background system',
    'Set up terminal network connection',
    'Add product catalog',
    'Add advertisements',
    'Set temperature control',
    'Test product dispensing channels functionality',
    'Open machine door with key and place products in designated compartments'
  ];

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

  const warrantyCard = {
    productName: '---',
    modelNumber: '---',
    serialNumber: '---',
    purchaseDate: '---',
    installationDate: '---',
    installationLocation: '---',
    customerName: '---',
    customerAddress: '---',
    customerPhone: '---',
    customerEmail: '---',
    terms: '1 year warranty against material and manufacturing defects under normal use. Damage from improper use/maintenance excluded.',
    note: 'Keep warranty card safe for claims. Inform us of address changes promptly.'
  };



  return (
    <div className="section-container main-container" style={{ height: '100%', display: 'block', flexDirection: ' column' }}>

      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",

          display: "flex",
          justifyContent: "space-between",

          boxSizing: "border-box",
        }}
      >
        {/* LEFT SIDE CONTENT */}
        <Box sx={{ color: "#fff", width: '50%',pt: 10 }}>

          <h1 className='headings-h1 gourmate_Heading ' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' }, letterSpacing: '-0.84px', margin: "10px 0px !important", width: '60%' }}>
            {t('products.gourmetMachine.title')}
          </h1>


          <Typography
            sx={{

              fontSize: "16px",
              color: "#C2C2C4",

              lineHeight: 1.6,
            }} className='bodyRegularText3'
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
        <Paper sx={{ mb: 3, mt: 6, backgroundColor: '#444', color: '#9D9EA1' }}>
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
            <Tab label={t('products.gourmetMachine.tabs.overview')} />
            <Tab label={t('products.gourmetMachine.tabs.specifications')} />

            <Tab label={t('products.gourmetMachine.tabs.installation')} />
            <Tab label={t('products.gourmetMachine.tabs.operation')} />
            <Tab label={t('products.gourmetMachine.tabs.maintenance')} />
            <Tab label={t('products.gourmetMachine.tabs.troubleshooting')} />
            <Tab label={t('products.gourmetMachine.tabs.errorCodes')} />

            <Tab label={t('products.gourmetMachine.tabs.serviceWarranty')} />
          </Tabs>
        </Paper>

        {/* Tab 0: Overview - PDF Page 2, 5 */}
        {tabValue === 0 && (
          <Box >
            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <Card sx={{

                    gap: '90px',

                    height: 250,
                    backgroundColor: '#161616',
                    border: 'solid 1px #393939',
                    borderRadius: '24px',
                    color: '#9D9EA1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '32px'
                  }}>
                    <Box  >
                      {feature.icon}
                    </Box>
                    <Box sx={{ minHeight: '120px' }}>
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
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Machine Components - PDF Page 3 */}
            <Card sx={{ mb: 4, mt: 12, background: '#1D1D1F', border: 'none', boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h5" className='headings-h2' fontWeight="bold" gutterBottom sx={{ color: "#fcfcfc" }}>
                  {t('products.gourmetMachine.overview.machineComponents')}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: 3,
                  }}
                >
                  {machineComponents.map((component, index) => (
                    <Box
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
                    >
                      {component}
                    </Box>
                  ))}
                </Box>

              </CardContent>
            </Card>

            {/* Product Requirements - PDF Page 7 */}
            <Grid container spacing={3} sx={{ mt: 4 }}>

              {/* LEFT CARD */}
              <Grid item xs={12} md={6}>

                <Card sx={{ padding: '32px', backgroundColor: '#161616', height: '528px', backgroundColor: '#161616', border: 'solid 1px #393939', borderRadius: '24px' }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      className="headings-h4"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: '#fcfcfc' }}
                    >
                      {t('products.gourmetMachine.overview.productRequirements')}
                    </Typography>
                  </CardContent>

                  <Box sx={{ mx: "-32px" }}>
                    <Divider sx={{ borderColor: "#393939" }} />
                  </Box>

                  <CardContent>
                    <List>
                      {productRequirements.map((req, index) => (
                        <ListItem
                          key={index}
                          sx={{ color: '#c2c2c4' }}
                          className="bodyRegularText4"
                        >
                          <Box sx={{ fontSize: '22px', color: '#c2c2c4', mr: 2 }}>•</Box>
                          <ListItemText primary={req} sx={{ fontSize: '22px', color: '#c2c2c4' }} className='bodyRegularText4' />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              {/* RIGHT CARD */}
              <Grid item xs={12} md={6}>
                <Card sx={{ padding: '32px', backgroundColor: '#161616', height: '528px', backgroundColor: '#161616', border: 'solid 1px #393939', borderRadius: '24px' }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ color: '#fcfcfc', display: 'flex', alignItems: 'center' }}
                      className='headings-h4'
                    >

                      {t('products.gourmetMachine.overview.heatingSystemSafety')}
                    </Typography>
                  </CardContent>
                  <Box sx={{ mx: "-32px" }}>
                    <Divider sx={{ borderColor: "#393939" }} />
                  </Box>
                  <CardContent>
                    <List>
                      {heatingSafety.map((safety, index) => (
                        <ListItem key={index} className="bodyRegularText4" sx={{ color: '#c2c2c4', fontSize: '22px' }} >
                          <Box sx={{ fontSize: '22px', color: '#c2c2c4', mr: 2 }}>•</Box>
                          <ListItemText primary={safety} className='bodyRegularText4' />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
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
                        <Box sx={{ fontSize: "40px", mb: 2, color: "#ff6f3c" }}>
                          {req.icon} {/* Replace with your SVG */}
                        </Box>
                        <Box >

                          {/* Title */}
                          <Typography
                            fontWeight="bold"
                            sx={{ color: "#fcfcfc", mb: 1 }}
                            className="bodyRegularText2"
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
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', }}>

              {/* Installation Steps - Stays the Same */}
              <Card sx={{ width: '48%', mb: 4, mt: 12, backgroundColor: '#161616', borderRadius: '24px' }}>
                <CardContent sx={{ m: '-10px' }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: '#fcfcfc', borderBottom: '1px solid #393939', padding: '15px 25px ' }}

                    className="headings-h4"
                  >
                    {t('products.gourmetMachine.installation.installationProcedure')}
                  </Typography>
                  <Box sx={{ p: " 10px 20px", }} >
                    <List sx={{
                      p: " 0px 25px",
                    }} >
                      {installationSteps.map((step, index) => (
                        <ListItem key={index} className="bodyRegularText4" sx={{
                          color: "#c2c2c4",
                          display: "list-item",
                          listStyleType: "disc",
                        }}>
                          <ListItemText primary={step} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>

              {/* Child Safety Guidelines */}


              <Card sx={{ width: '48%', mb: 4, mt: 12, backgroundColor: '#161616', borderRadius: '24px' }}>
                <CardContent sx={{ p: '0px' }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom

                    sx={{ color: '#fcfcfc', borderBottom: '1px solid #393939', padding: '15px 25px ' }}
                    className="headings-h4"
                  >
                    {t('products.gourmetMachine.installation.childSafetyGuidelines')}
                  </Typography>
                  <Box sx={{ p: " 10px 20px", }} >

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
                          <ListItemText primary={safety} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
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
                <Box sx={{ gap: 4, }}>

                  {/* Left Column - Product Selection */}
                  <Box sx={{ width: '100%', mb: 5 }}>
                    {purchaseFlow.map((step, index) => (
                      <Box
                        key={index}
                        sx={{
                          mt: 3,
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: "10px",
                          borderTop: '1px solid #6F6F6F',
                          p: "30px 0px"
                        }}
                      >
                        <Box sx={{ width: '33%' }}>
                          <Typography
                            className='bodyRegularText4'
                            sx={{ color: '#9D9EA1', mb: 1 }}
                          >
                            {step.number}
                          </Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
                          <Typography
                            className='bodyRegularText3'
                            sx={{ color: '#c2c2c4' }}
                          >
                            {step.title}
                          </Typography>
                        </Box>
                        <Box sx={{ width: '33%' }}>
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

                {/* Down Column - Admin System Access & Member Card */}
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 4, mt: 20 }}>

                  {/* Admin System Access */}
                  <Card sx={{ width: '48%', mb: 4, backgroundColor: '#161616', borderRadius: '24px' }}>
                    <CardContent sx={{ p: '0px' }}>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: '#fcfcfc', borderBottom: '1px solid #393939', padding: '15px 25px' }}
                        className="headings-h4"
                      >
                        {safetyGuidelines.adminSystemAccess.title}
                      </Typography>
                      <Box sx={{ p: "10px 20px" }}>
                        <List sx={{ p: "0px 25px" }}>
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
                              <ListItemText primary={point} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </CardContent>
                  </Card>

                  {/* Member Card System */}
                  <Card sx={{ width: '48%', mb: 4, backgroundColor: '#161616', borderRadius: '24px' }}>
                    <CardContent sx={{ p: '0px' }}>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: '#fcfcfc', borderBottom: '1px solid #393939', padding: '15px 25px' }}
                        className="headings-h4"
                      >
                        {safetyGuidelines.memberCardSystem.title}
                      </Typography>
                      <Box sx={{ p: "10px 20px" }}>
                        <List sx={{ p: "0px 25px" }}>
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
                              <ListItemText primary={point} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>

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
                          <p
                            style={{
                              color: "#c2c2c4",
                              marginRight: "8px",
                              marginTop: "4px",

                            }} className="bodyRegulartext4"
                          >
                            • {t('products.gourmetMachine.maintenance.frequency')}: {task.frequency}
                          </p>


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

                <Typography sx={{ color: "#c2c2c4" }} className='bodyRegularText4'>
                  • {t('products.gourmetMachine.maintenance.safetyPoints.point1')}
                  <br />
                  • {t('products.gourmetMachine.maintenance.safetyPoints.point2')}
                  <br />
                  • {t('products.gourmetMachine.maintenance.safetyPoints.point3')}
                  <br />
                  • {t('products.gourmetMachine.maintenance.safetyPoints.point4')}
                </Typography>
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
                      <Box
                        sx={{
                          backgroundColor: "#161616",
                          borderRadius: "18px",
                          padding: "22px",
                          border: "1px solid #2d2d2f",
                          // height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap:"10px !important",
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
              <Box sx={{ mb: 4,mt:6 ,backgroundColor: 'transparent', boxShadow: 'none', }}>
                <Box sx={{ }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#fcfcfc', mb: 2 }} className='headings-h3'>
                    {t('products.gourmetMachine.errorCodes.title')}
                  </Typography>
                  <Grid container spacing={2} alignItems="stretch">
                    {errorCodes.map((error, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', margin: '2px 0px' }}>
                        <Paper
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
          tabValue === 7 && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 4, mt: 8 }}>

              {/* Contact Information */}
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

              {/* Service Hours */}
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
            </Box>
          )
        }




      </div>
    // </div>
  );
}