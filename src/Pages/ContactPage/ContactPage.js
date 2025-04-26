import React, { useEffect, useState } from 'react'
import Calendly from './calendly';
import './ContactPage.css'
import { Alert, Box, Grid, Radio, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { Location, Contactmail, Contactphone } from "../../Componenets/CustomIcons"
import Facebook from '../../assets/Social Icons.png';
import Twitter from '../../assets/Social Icons (1).png';
import Instagram from '../../assets/Social Icons (2).png';
import LinkedIn from '../../assets/Social Icons (3).png';
import YouTube from '../../assets/Social Icons (4).png';
import Button from '@mui/material/Button';
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import { FormControlLabel, Link, } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Picture1 from '../../assets/Contact/Picture1.png'
import Picture2 from '../../assets/Contact/Picture2.png'
import Picture3 from '../../assets/Contact/Picture3.png'
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function ContactPage() {
    const { t } = useTranslation();
    const [active, setActive] = useState('submit');
    const [selectedItems, setSelectedItems] = useState([]);
    const [isSubmitform, setIsSubmitform] = useState(true); // default to showing the form
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [isConsentChecked, setIsConsentChecked] = useState(false);
    const [customCategory, setCustomCategory] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        message: '',
        inquiryType: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCategorySelect = (category) => {
        setFormData((prev) => ({
            ...prev,
            inquiryType: prev.inquiryType === category ? '' : category,
        }));
        setSelectedItems(category)

        if (category !== 'Others') {
            setCustomCategory('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, fullName, message, inquiryType } = formData;

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return setSnackbar({ open: true, message: 'Please enter a valid email.', severity: 'error' });
        }
        if (!fullName.trim()) {
            return setSnackbar({ open: true, message: 'Full name is required.', severity: 'error' });
        }
        if (!message.trim()) {
            return setSnackbar({ open: true, message: 'Message is required.', severity: 'error' });
        }
        if (inquiryType === 'Others' && !customCategory.trim()) {
            return setSnackbar({ open: true, message: 'Please specify your category.', severity: 'error' });
        }

        if (!isConsentChecked) {
            return setSnackbar({ open: true, message: 'You must accept the privacy policy.', severity: 'error' });
        }
        if (!isConsentChecked) {
            return setSnackbar({ open: true, message: 'You must accept the privacy policy.', severity: 'error' });
        }

        try {
            setIsSubmitting(true);
            await axios.post('https://api.naf-cloudsystem.de/api/NAFWebsite/submitForm', formData);
            setSnackbar({ open: true, message: 'Support issue submitted successfully!', severity: 'success' });

            // Clear the form
            setFormData({
                email: '',
                fullName: '',
                message: '',
                inquiryType: '',
            });
            setSelectedItems([]);
            setIsConsentChecked(false);
        } catch (error) {
            setSnackbar({ open: true, message: 'Submission failed. Please try again.', severity: 'error' });
        } finally {
            setIsSubmitting(false); // ✅ Stop loading
        }
    };

    const locations = [
        {
            address: (
                <>
                    {t('contactus.MachineLocation1text1')}<br />
                    {t('contactus.MachineLocation1text2')}<br />
                    {t('contactus.MachineLocation1text3')}
                </>
            )
        },
        {
            address: (
                <>
                    {t('contactus.MachineLocation2text1')}<br />
                    {t('contactus.MachineLocation2text2')}<br />
                    {t('contactus.MachineLocation2text3')}
                </>
            )
        },
        {
            address: (
                <>
                    {t('contactus.MachineLocation2text1')}<br />
                    {t('contactus.MachineLocation2text2')}<br />
                    {t('contactus.MachineLocation2text3')}
                </>
            )
        }
    ];

    const categories = [
        t('contactus.General'),
        t('contactus.DemoRequest'),
        t('contactus.PartnershipInquiry'),
        t('contactus.SalesInquiry'),
        t('contactus.TechnicalSupport'),
        t('contactus.FranchiseEnquiry'),
        t('contactus.Others'),
    ];

    const faqs = {

        'General About NAF': [
            {
                question: 'What is NAF?',
                answer: 'NAF stands for “New Age of Food” – an innovative food and supply concept that combines food vending machines, sustainable reusable packaging, smart software solutions, and intelligent sales strategies.'
            },

            {
                question: 'What is NAF’s goal?',
                answer: 'Our goal is to rethink gastronomy: 24/7 catering without staff shortages, innovative vending machine solutions, healthy meals, and a financially attractive option for businesses, hotels, public institutions, and more.'
            },
            {
                question: 'Who is behind NAF?',
                answer: 'NAF was founded by Abdelilah Lamkhizni – who has many years of experience in gastronomy, hospitality, and technology. The company combines culinary know-how with digital solutions.'
            },

        ],

        'NAF Machines FAQs': [
            {
                question: 'What is NAF and what machines do you offer?',
                answer: 'NAF stands for "New Age of Food" and provides a digital, innovative solution for gastronomy. Our vending machines serve fresh, high-quality meals around the clock — without staff. We offer:',
                list: [
                    "Gourmet vending machine (“3-minute restaurant”)",
                    "Return machine",
                    "Pizza vending machine",
                    "Soft ice cream machine",
                    "Cotton candy machine",
                    "Popcorn machine",
                    "French fries machine",
                    "Beer dispenser (coming soon)",
                    "Food machines for hotels, factories, gas stations, schools, etc.",
                ],
                answerSecond: 'Each machine is equipped with state-of-the-art tech and can be customized. ',

            },

            {
                question: 'How do the NAF machines work?',
                answer: 'Our machines feature smart control systems and can be operated contactlessly via card, app, or voucher. Depending on the type, food is served fresh, stored frozen and reheated, or freshly prepared.'
            },
            {
                question: 'Can machines be individually designed?',
                answer: 'Yes! We offer:'
            },

        ],
        'Design & Customization': [
            {
                question: 'Can the machine be customized?',
                answer: 'Yes:',
                list: [
                    "Standard: With NAF logo, free",
                    "Custom design: €2,000 extra",

                ],
            },

            {
                question: 'Is a digital menu display possible?',
                answer: 'Yes.'
            },


        ],
        'Reusable System & Return Machines': [
            {
                question: 'What reusable solutions does NAF offer?',
                answer: 'We rely on a sustainable system with reusable containers and return machines.',

            },

            {
                question: 'How does the return machine work?',
                answer: 'Customers scan a QR code and return the container. The deposit is automatically assigned via customer card or app.'
            },
            {
                question: 'Are there subsidies for return machines?',
                answer: 'Yes.'
            },


        ],
        'Software & Cloud System': [
            {
                question: 'What does the NAF Cloud System offer?',
                answer: '',
                list: [
                    "Telemetry & live data",
                    "Sales analytics",
                    "Temperature control",
                    "Product management",
                    "Coupon & discount system",
                    "User management & membership cards",

                ],
                answerSecond: '',

            },

            {
                question: 'Is there a mobile app?',
                answer: 'Not yet — but one is in development to allow purchases, coupons, feedback, returns, and payments.'
            },
            {
                question: 'What languages are supported?',
                answer: 'Multilingual support is included — ideal for hotels, gas stations, or international customers.'
            },

        ],
    }

    const contacts = [
        {
            title: t('contactus.personrole1'),
            name: 'Odette Lamkhizni',
            image: Picture1,
            alt: 'Marketing Contact',
        },
        {
            title: t('contactus.personrole2'),
            name: 'Abdelilah Lamkhizni',
            image: Picture2,
            alt: 'Sales Contact',
        },
        {
            title: t('contactus.personrole3'),
            name: 'Sri Satya Sai Kanna Dhulipudi',
            image: Picture3,
            alt: 'Technical Contact',
        },
    ];

    const [activeCategory, setActiveCategory] = useState('General About NAF');
    const toggleForm = (type) => {
        setIsSubmitform(type === 'submit');
        setActive(type);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setExpandedIndex(null);
    }, [activeCategory]);

    const socialIcons = [
        { src: Facebook, name: "Facebook", url: "https://www.facebook.com/yourcompany" },
        { src: Twitter, name: "Twitter", url: "https://twitter.com/yourcompany" },
        { src: Instagram, name: "Instagram", url: "https://www.instagram.com/yourcompany" },
        { src: LinkedIn, name: "LinkedIn", url: "https://www.linkedin.com/company/yourcompany" },
        { src: YouTube, name: "YouTube", url: "https://www.youtube.com/@yourcompany" },
    ];

    return (
        <Box>
            <Box className='section-container contactus-sec' sx={{ pr: 0 }}>
                <Box className='contactus-subsec'>
                    <Typography sx={{ color: '#C2C2C4', mb: 2 }} className='bodyRegularText3'>Contact with us</Typography>
                    <Typography className='headings-h1'>Together, We Can Do Extraordinary Things.</Typography>
                    <Box sx={{ mt: { xs: 3, sm: 4, md: 6 } }}>
                        <Typography sx={{ color: '#C2C2C4', mb: 2 }} className='bodyRegularText3'>Contact</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '12px', sm: '18px', md: '40px' } }}>
                            <Box sx={{ display: 'flex', gap: { xs: '12px', sm: '18px', md: '32px' }, alignItems: 'center' }}>
                                <Box
                                    sx={{
                                        backgroundColor: '#7FEE64', // vibrant green similar to the image
                                        borderRadius: '50%',
                                        width: "56px",
                                        height: "56px",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Contactmail />
                                </Box>
                                <Typography sx={{ color: '#FCFCFC' }} className='bodyRegularText2'>info@naf-halsbach.de</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: { xs: '12px', sm: '18px', md: '32px' }, alignItems: 'center' }}>
                                <Box
                                    sx={{
                                        backgroundColor: '#7FEE64', // vibrant green similar to the image
                                        borderRadius: '50%',
                                        width: "56px",
                                        height: "56px",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Contactphone />
                                </Box>
                                <Typography sx={{ color: '#FCFCFC' }} className='bodyRegularText2'>0152 – 28387141 (Odette Lamkhizni)</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: { xs: '12px', sm: '18px', md: '32px' }, alignItems: 'center' }}>
                                <Box
                                    sx={{
                                        backgroundColor: '#7FEE64', // vibrant green similar to the image
                                        borderRadius: '50%',
                                        width: "56px",
                                        height: "56px",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Contactphone />
                                </Box>
                                <Typography sx={{ color: '#FCFCFC' }} className='bodyRegularText2'>0162 – 1638005  (Technischer Support 24/7)</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: { xs: 3, sm: 4, md: 6 } }}>
                            <Typography sx={{ color: '#C2C2C4', mb: 2 }} className='bodyRegularText3'>{t('contactus.heroSubTitle3')}</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: { xs: '25px', sm: '35px', md: '48px' },
                                alignItems: 'center'
                            }}>
                                {socialIcons.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Box
                                            component="img"
                                            src={social.src}
                                            alt={social.name}
                                            sx={{
                                                width: { xs: 32, md: 40 },
                                                height: { xs: 32, md: 40 },
                                                cursor: "pointer",
                                                objectFit: "contain",
                                                '&:hover': {
                                                    opacity: 0.8,
                                                }
                                            }}
                                        />
                                    </a>
                                ))}</Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='contactus-subsec' sx={{ backgroundColor: '#FA7854', padding: { xs: 1, sm: 2, md: 4 } }}>
                    <Box sx={{ display: 'flex', gap: '50px', width: '100%', justifyContent: 'center', marginBottom: '20px' }}>
                        <Typography
                            variant="body1"
                            className='bodyMediumText1'
                            onClick={() => toggleForm('submit')}
                            sx={{
                                cursor: 'pointer',
                                position: 'relative',
                                color: active === 'submit' ? '#1A1A1A' : '#C2C2C4',
                                transition: 'color 0.3s ease',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: -2,
                                    height: '2px',
                                    width: active === 'submit' ? '100%' : '0%',
                                    backgroundColor: '#1A1A1A',
                                    transition: 'width 0.3s ease',
                                },
                            }}
                        >
                            {t('contactus.SubmitForm')}
                        </Typography>
                        <Typography
                            variant="body1"
                            className='bodyMediumText1'
                            onClick={() => toggleForm('schedule')}
                            sx={{
                                cursor: 'pointer',
                                position: 'relative',
                                color: active === 'schedule' ? '#1A1A1A' : '#C2C2C4',
                                transition: 'color 0.3s ease',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: -2,
                                    height: '2px',
                                    width: active === 'schedule' ? '100%' : '0%',
                                    backgroundColor: '#1A1A1A',
                                    transition: 'width 0.3s ease',
                                },
                            }}
                        >
                            {t('contactus.ScheduleCall')}
                        </Typography>
                    </Box>

                    {isSubmitform ? (
                        <>
                            {/* Default Render Submit Form */}
                            <Box sx={{ width: '100%', marginTop: { xs: '10px', sm: '30px', md: '60px' }, display: 'flex', flexDirection: 'column', gap: { xs: '10px', sm: '30px', md: '50px' } }}>
                                <TextField
                                    className='bodyRegularText3'
                                    label={t('contactus.Email')}
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        style: {
                                            color: '#FCFCFC',
                                            fontSize: {
                                                md: '10px',
                                                lg: '20px',
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        disableUnderline: false,
                                        sx: {
                                            color: '#FCFCFC',
                                            paddingTop: "28px",
                                            '&:before': { borderBottomColor: '#C6C6C6' },
                                            '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#ffffffcc' },
                                            '&:after': { borderBottomColor: '#C6C6C6' },
                                        },
                                    }}
                                />
                                <TextField
                                    className='bodyRegularText3'
                                    label={t('contactus.FullName')}
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        style: {
                                            color: '#FCFCFC', fontSize: {

                                                md: '10px',
                                                lg: '20px',
                                            },
                                        }
                                    }}
                                    InputProps={{
                                        disableUnderline: false,
                                        sx: {
                                            color: '#FCFCFC',
                                            paddingTop: "28px",
                                            '&:before': { borderBottomColor: '#C6C6C6' },
                                            '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#ffffffcc' },
                                            '&:after': { borderBottomColor: '#C6C6C6' },
                                        },
                                    }}
                                />
                            </Box>

                            {/* Categories */}
                            <Box sx={{ marginTop: { xs: '10px', sm: '30px', md: '50px' } }}>
                                <Typography variant="h6" className='bodyRegularText3' sx={{ mb: 3, color: "#FCFCFC" }}>
                                    {t('contactus.typeofHelp')}
                                </Typography>
                                <Stack direction="row" flexWrap="wrap" gap={2}>
                                    {categories.map((label) => {
                                        const isSelected = selectedItems.includes(label);
                                        return (
                                            <Button
                                                className='bodyRegularText4'
                                                onClick={() => handleCategorySelect(label)}
                                                key={label}
                                                variant="outlined"
                                                sx={{
                                                    color: '#FCFCFC',
                                                    borderRadius: '50px',
                                                    textTransform: 'none',
                                                    px: 3,
                                                    py: 1.5,
                                                    fontWeight: 400,
                                                    borderColor: isSelected ? 'transparent' : '#C6C6C6',
                                                    backgroundColor: isSelected ? '#1A1A1A' : 'transparent',
                                                    '&:hover': {
                                                        backgroundColor: isSelected ? '#1A1A1A' : '#ffffff22',
                                                        borderColor: isSelected ? 'transparent' : '#C6C6C6',
                                                    },
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        );
                                    })}
                                </Stack>
                                {formData.inquiryType === 'Others' && (
                                    <TextField
                                        className='bodyRegularText3'
                                        label="Please specify"
                                        variant="standard"
                                        required
                                        fullWidth
                                        name="customCategory"
                                        value={customCategory}
                                        onChange={(e) => setCustomCategory(e.target.value)}
                                        InputLabelProps={{
                                            style: { color: '#FCFCFC' },
                                        }}
                                        InputProps={{
                                            disableUnderline: false,
                                            sx: {
                                                color: '#FCFCFC',
                                                paddingTop: '28px',
                                                '&:before': { borderBottomColor: '#C6C6C6' },
                                                '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#ffffff' },
                                                '&:after': { borderBottomColor: '#C6C6C6' },
                                            },
                                        }}
                                    />
                                )}

                            </Box>

                            {/* Message + Consent + Submit */}
                            <Box sx={{ width: '100%', marginTop: { xs: '10px', sm: '30px', md: '60px' }, display: 'flex', flexDirection: 'column', gap: { xs: '10px', sm: '30px', md: '60px' } }}>
                                <TextField
                                    className='bodyRegularText3'
                                    label="Message"
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        style: {
                                            color: '#FCFCFC', fontSize: {

                                                md: '10px',
                                                lg: '20px',
                                                xl: "24px"
                                            },
                                        }
                                    }}
                                    InputProps={{
                                        disableUnderline: false,
                                        sx: {
                                            color: '#FCFCFC',
                                            paddingTop: "28px",
                                            '&:before': { borderBottomColor: '#C6C6C6' },
                                            '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#ffffffcc' },
                                            '&:after': { borderBottomColor: '#C6C6C6' },
                                        },
                                    }}
                                />
                                <Box><FormControlLabel
                                    control={
                                        <Radio
                                            checked={isConsentChecked}
                                            onChange={(e) => setIsConsentChecked(e.target.checked)}
                                            sx={{
                                                color: '#E0E0E0',
                                                '&.Mui-checked': {
                                                    color: '#7FEE64', // green when checked
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <Typography variant="body2" className="bodyRegularText5" sx={{ color: '#FCFCFC' }}>
                                            {t('contactus.privacypolicy1')}{' '}
                                            <Link
                                                href="/privacy-policy"
                                                underline="hover"
                                                sx={{ color: '#161616', textDecorationColor: '#161616', textDecoration: 'underline' }}
                                            >
                                                {t('contactus.privacypolicy2')}
                                            </Link>
                                        </Typography>
                                    }
                                />
                                </Box>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mx: "auto",
                                    position: "relative",
                                    zIndex: 1,
                                    marginBottom: { xs: "1rem", sm: "1rem", md: "2rem" }
                                }}>
                                    {isSubmitting ? (
                                        <Button disabled variant="contained" sx={{ borderRadius: '50px', px: 5, py: 1.5 }}>
                                            Submitting...
                                        </Button>
                                    ) : (
                                        <div onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                                            <AnimateButton text1={t('contactus.SUBMIT')} text2={t('contactus.NOW')} />
                                        </div>
                                    )}
                                </Box>
                            </Box>

                            <Snackbar
                                open={snackbar.open}
                                autoHideDuration={4000}
                                onClose={handleSnackbarClose}
                                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            >
                                <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                                    {snackbar.message}
                                </Alert>
                            </Snackbar>
                        </>
                    ) : (
                        <Calendly />
                    )}
                </Box>
            </Box>

            <Box className="section-container" sx={{
                display: 'flex',
                justifyContent: 'center', // Center the items in the container
                gap: 4,
                flexWrap: 'wrap',
            }}>
                {contacts.map((contact, index) => (
                    <Box key={index} sx={{
                        flex: { xs: '0 0 100%', sm: '0 0 100%', md: '0 0 25%' },
                        display: 'flex',
                        flexDirection: 'column',
                        mb: 4,
                    }}>
                        <Typography className='bodyMediumText1' color='#FCFCFC' gutterBottom>
                            {contact.title}
                        </Typography>
                        <img src={contact.image} alt={contact.alt} style={{ width: '100%', borderRadius: 8 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <Typography className='bodyRegularText3' color='#FCFCFC'>
                                {contact.name}
                            </Typography>
                            <Box
                                sx={{
                                    backgroundColor: '#F4F4F4',
                                    borderRadius: '50%',
                                    p: '14px 12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Contactmail color='#FA7854' />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box className="section-container">
                <Typography className='headings-h2' sx={{ width: { xs: '80%', sm: '50%', md: '42%' }, mb: { xs: 2, sm: 3, md: 5 } }}>
                    {t('contactus.reachDirectly')}
                </Typography>
                <Box
                    sx={{
                        borderTop: '1px solid #525252',
                        py: { xs: 3, sm: 3, md: 5 },
                    }}
                >
                    <Grid container spacing={1} alignItems="flex-start">
                        {/* Column 1: Text */}
                        <Grid item xs={6} sm={6} lg={3}>
                            <Typography className='bodyRegularText4' sx={{ color: '#C2C2C4' }}>
                                {t('contactus.location')}
                            </Typography>
                        </Grid>

                        {/* Column 2: Location info */}
                        <Grid item xs={6} sm={6} lg={3}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <Box sx={{ mt: '5px' }}>
                                    <Location />
                                </Box>
                                <Box>
                                    <Typography className='bodyRegularText3' sx={{ color: '#C2C2C4', m: 0, p: 0 }}>
                                        Obere Straße 3,<br />
                                        09599 Freiberg,<br />
                                        OT Halsbach
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        {/* Column 3 & 4: Styled box */}
                        <Grid item xs={12} lg={6}>
                            <Box
                                sx={{
                                    borderRadius: "24px",
                                    backgroundColor: "#525252",
                                    width: '100%',
                                    height: '200px',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box
                    sx={{
                        borderTop: '1px solid #525252',
                        py: { xs: 3, sm: 3, md: 5 },
                    }}
                >
                    <Grid container spacing={1}>
                        {/* First column: Title */}
                        <Grid item xs={12} sm={6} lg={3}>
                            <Typography className="bodyRegularText4" sx={{ color: '#C2C2C4' }}>
                                {t('contactus.MachineLocation')}
                            </Typography>
                        </Grid>

                        {/* Remaining columns: Location cards */}
                        {locations.map((item, index) => (
                            <Grid item xs={12} sm={6} lg={3} key={index}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                    <Box sx={{ mt: '5px' }}>
                                        <Location />
                                    </Box>
                                    <Typography className="bodyRegularText3" sx={{ color: '#C2C2C4' }}>
                                        {item.address}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Box className='section-container' sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, justifyContent: 'space-between', gap: { xs: 3, sm: 6, md: 8 } }}>
                {/* Left Column - Categories */}
                <Box sx={{ width: { xs: '95%', sm: '35%', md: '35%' } }}>
                    <Typography className='headings-h2' sx={{ color: '#FCFCFC', mb: 4 }}>
                        {t('contactus.Curious')}
                    </Typography>
                    <Box sx={{ maxWidth: '365px' }}>
                        <Box sx={{ borderBottom: '0.5px dashed #525252', my: 1 }} />
                        {Object.keys(faqs).map((category, index) => (
                            <Box key={category}>
                                <Typography
                                    onClick={() => setActiveCategory(category)}
                                    className='bodyRegularText3'
                                    sx={{
                                        cursor: 'pointer',
                                        py: { xs: 1, sm: 2, md: 2 },
                                        color: activeCategory === category ? '#7FEE64' : '#C2C2C4',
                                        fontWeight: activeCategory === category ? 600 : 400,
                                        '&:hover': {
                                            color: 'white',
                                        },
                                    }}
                                >
                                    {category}
                                </Typography>
                                <Box sx={{ borderBottom: '0.5px dashed #525252', my: 1 }} />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right Column - FAQs */}
                <Box sx={{ width: { xs: '95%', sm: '50%', md: '50%' } }}>
                    {faqs[activeCategory].map((faq, idx) => (
                        <Accordion
                            key={idx}
                            expanded={expandedIndex === idx}
                            onChange={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                            sx={{
                                border: '1px solid #393939',
                                backgroundColor: 'transparent',
                                color: '#C2C2C4',
                                borderRadius: '12px',
                                boxShadow: 'none',
                                mb: 2,
                                p: 2,
                                '&::before': { display: 'none' },
                            }}
                        >
                            <AccordionSummary expandIcon={<ArrowDropDownIcon sx={{ color: '#C2C2C4' }} />}>
                                <Typography className="bodyRegularText3" sx={{ color: '#C2C2C4' }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {faq.answer && (
                                    <Typography variant="body2" className="bodyRegularText3" sx={{ color: '#C2C2C4' }}>
                                        {faq.answer}
                                    </Typography>
                                )}
                                {faq.list && faq.list.length > 0 && (
                                    <ul style={{ margin: '10px 0px', paddingLeft: '20px' }}>
                                        {faq.list.map((item, i) => (
                                            <li key={i} style={{ color: '#C2C2C4' }} className="bodyRegularText3">{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {faq.answerSecond && (
                                    <Typography variant="body2" className="bodyRegularText3" sx={{ color: '#C2C2C4' }}>
                                        {faq.answerSecond}
                                    </Typography>
                                )}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ContactPage