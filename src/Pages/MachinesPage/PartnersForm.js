import React, { useState } from 'react';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    FormControlLabel,
    Radio,
    Snackbar,
    Alert,
    Button,
} from '@mui/material';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import CustomTextField from './MantaincePage/CustomTextField';
import Service1 from '../../assets/Machines/Service1.png'
import Service2 from '../../assets/Machines/Service2.png'
import Service3 from '../../assets/Machines/Service3.png'
import Service4 from '../../assets/Machines/Service4.png'
import Service5 from '../../assets/Machines/Service5.png'
import Service6 from '../../assets/Machines/Service6.png'
import CustomSelect from './MantaincePage/CustomSelect';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function PartnersForm() {
    const { t } = useTranslation();
    const [tab, setTab] = useState(0);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success', // or 'error'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const [formTab0, setFormTab0] = useState({
        companyName: '',
        installationAddress: '',
        numberOfEmployees: '',
        willingToPurchaseMachine: '',
        provideCateringPermit: '',
        contactPersonName: '',
        email: '',
        phoneNumber: '',
        agreement: false,
    });

    const [formTab1, setFormTab1] = useState({
        businessName: '',
        contactPersonName: '',
        position: '',
        email: '',
        phoneNumber: '',
        specialization: '',
        agreement: false,
    });
    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const handleTabChange = (_, newValue) => setTab(newValue);

    const handleChange = (e, tabIndex) => {
        const { name, value } = e.target;
        const updater = tabIndex === 0 ? setFormTab0 : setFormTab1;
        updater((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e, tabIndex) => {
        const { name, checked } = e.target;
        const updater = tabIndex === 0 ? setFormTab0 : setFormTab1;
        updater((prev) => ({ ...prev, [name]: checked }));
    };

    const validateTab0 = () => {
        if (!formTab0.companyName.trim()) {
            showSnackbar('Company name is required.', 'error');
            return false;
        }
        if (!formTab0.installationAddress.trim()) {
            showSnackbar('Installation address is required.', 'error');
            return false;
        }
        if (!formTab0.numberOfEmployees.trim()) {
            showSnackbar('Number of employees is required.', 'error');
            return false;
        }
        if (!formTab0.willingToPurchaseMachine) {
            showSnackbar('Please select willingness to purchase.', 'error');
            return false;
        }
        if (!formTab0.provideCateringPermit) {
            showSnackbar('Please select catering partner option.', 'error');
            return false;
        }
        if (!formTab0.contactPersonName.trim()) {
            showSnackbar('Contact person name is required.', 'error');
            return false;
        }
        if (!formTab0.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formTab0.email)) {
            showSnackbar('Please enter a valid email.', 'error');
            return false;
        }
        if (!formTab0.agreement) {
            showSnackbar('You must agree to the privacy policy.', 'error');
            return false;
        }
        return true;
    };
    const validateTab1 = () => {
        if (!formTab1.businessName.trim()) {
            showSnackbar('Business name is required.', 'error');
            return false;
        }
        if (!formTab1.contactPersonName.trim()) {
            showSnackbar('Contact person name is required.', 'error');
            return false;
        }
        if (!formTab1.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formTab1.email)) {
            showSnackbar('Please enter a valid email.', 'error');
            return false;
        }
        if (!formTab1.agreement) {
            showSnackbar('You must agree to the privacy policy.', 'error');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = tab === 0 ? validateTab0() : validateTab1();
        if (!isValid) return;

        // const { agreement, ...submittedData } = tab === 0 ? formTab0 : formTab1;
        const { agreement, ...rawData } = tab === 0 ? formTab0 : formTab1;
        const submittedData = tab === 0
            ? {
                ...rawData,
                numberOfEmployees: parseInt(rawData.numberOfEmployees || '0'),
                willingToPurchaseMachine: rawData.willingToPurchaseMachine === 'yes',
                provideCateringPermit: rawData.provideCateringPermit === 'yes',
            }
            : rawData;
        console.log('Submitted Data:', submittedData);

        try {
            setIsSubmitting(true);  // Determine the endpoint
            const endpoint =
                tab === 0
                    ? 'https://api.naf-cloudsystem.de/api/NAFWebsite/company-installations'
                    : 'https://api.naf-cloudsystem.de/api/NAFWebsite/gastronomy-partners';
            await axios.post(endpoint, submittedData);

            showSnackbar('Form submitted successfully!', 'success');
            // Reset
            if (tab === 0) {
                setFormTab0({
                    companyName: '',
                    installationAddress: '',
                    numberOfEmployees: '',
                    willingToPurchaseMachine: '',
                    provideCateringPermit: '',
                    contactPersonName: '',
                    email: '',
                    phoneNumber: '',
                    agreement: false,
                });
            } else {
                setFormTab1({
                    businessName: '',
                    contactPersonName: '',
                    position: '',
                    email: '',
                    phoneNumber: '',
                    specialization: '',
                    agreement: false,
                });
            }
        } catch (error) {
            setSnackbar({ open: true, message: 'Submission failed. Please try again.', severity: 'error' });
        } finally {
            setIsSubmitting(false); // ✅ Stop loading
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 10 }}>
            <Box sx={{ maxWidth: 800, width: '100%', p: { xs: 2, sm: 5, md: 10 }, color: '#FCFCFC', border: '1px solid #525252', borderRadius: '24px' }}>
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    centered
                    className='bodyMediumText1'
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#7FEE64", // ✅ Green underline
                            height: 1,
                            textTransform: 'none'
                        },
                    }}
                    sx={{
                        '& .MuiTab-root': {
                            color: '#C2C2C4 !important', // ❌ Inactive tab text color
                            fontWeight: 500,
                            fontSize: { xs: '12px', sm: '15px', md: '18px' },
                            textTransform: 'none',
                        },
                        '& .Mui-selected': {
                            color: '#FCFCFC !important', // ✅ Active tab text color
                            textTransform: 'none'
                        },
                    }}
                >
                    <Tab label="Companies & Installation Locations" />
                    <Tab label="Gastronomy Partners" />
                </Tabs>

                {tab === 0 ? (
                    // Installation Locations Form
                    <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
                        <Typography className='bodyRegularText3' sx={{ my: 4 }} color='#C2C2C4'>
                            Suggest your location now! Our innovative food vending machines provide 24/7 fresh meals right at your site – perfect for companies with more than 200 employees.
                        </Typography>
                        <Typography className='bodyMediumText1' sx={{ my: 4 }} color='#FCFCFC'>
                            How it Works
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                gap: 2,
                                mb: 10,
                                maxWidth: '100%',
                            }}
                        >
                            {[Service1, Service2, Service3].map((img, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)' }, // ✅ 3 per row on sm+, full width on xs
                                    }}
                                >
                                    <img src={img} alt='service' style={{ maxWidth: '100%', height: 'auto' }} />
                                    <Typography className='bodyRegularText3' color='#C2C2C4'>
                                        {[
                                            'You pick the place that works best for you',
                                            'We handle the machine and help pick your caterer',
                                            'Or buy a machine and use your caterer'
                                        ][index]}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography color='#FCFCFC' className='bodyMediumText1' align='center'>Fill up the Form</Typography>

                        <CustomTextField required label="Company Name" name="companyName" value={formTab0.companyName} onChange={(e) => handleChange(e, 0)} />
                        <CustomTextField required label="Installation Address" name="installationAddress" value={formTab0.installationAddress} onChange={(e) => handleChange(e, 0)} />
                        <CustomTextField required label="Number of Employees" name="numberOfEmployees" type="number" value={formTab0.numberOfEmployees} onChange={(e) => handleChange(e, 0)} />

                        <CustomSelect
                            required
                            label="Are you willing to purchase the vending machine?"
                            name="willingToPurchaseMachine"
                            value={formTab0.willingToPurchaseMachine}
                            onChange={(e) => handleChange(e, 0)}
                            options={[
                                { value: 'yes', label: 'Yes' },
                                { value: 'no', label: 'No' },
                            ]}
                        />
                        <CustomSelect
                            required
                            label="Would you like us to provide a catering partner?"
                            name="provideCateringPermit"
                            value={formTab0.provideCateringPermit}
                            onChange={(e) => handleChange(e, 0)}
                            options={[
                                { value: 'yes', label: 'Yes' },
                                { value: 'no', label: 'No' },
                            ]}
                        />
                        {/* Contact info */}
                        <CustomTextField required label="Contact Person Full Name" name="contactPersonName" value={formTab0.contactPersonName} onChange={(e) => handleChange(e, 0)} />
                        <CustomTextField required label="Email" name="email" type="email" value={formTab0.email} onChange={(e) => handleChange(e, 0)} />
                        <CustomTextField label="Phone Number" name="phoneNumber" value={formTab0.phoneNumber} onChange={(e) => handleChange(e, 0)} />

                        <FormControlLabel
                            control={
                                <Radio
                                    name="agreement"
                                    checked={formTab0.agreement}
                                    onChange={(e) => handleCheckboxChange(e, 0)} // or 1 for second tab
                                    required
                                    sx={{
                                        color: '#C2C2C4',
                                        '&.Mui-checked': {
                                            color: '#7FEE64', // green when checked
                                        },
                                    }}
                                />
                            }
                            className="bodyRegularText4"
                            label={
                                <span>
                                    I Understand that NAF Germany will securely hold my data in accordance with their{' '}
                                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                        privacy policy
                                    </span>
                                </span>
                            }
                            sx={{ mt: 2, color: '#C2C2C4' }}
                        />
                    </Box>
                ) : (
                    // Gastronomy Partner Form
                    <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
                        <Typography className='bodyRegularText3' sx={{ my: 4 }} color='#C2C2C4'>
                            Become a catering partner today! Whether you serve regional dishes, vegan bowls, or hearty meals – as a catering partner, you deliver fresh meals to our smart vending machines and reach new customers effortlessly.
                        </Typography>
                        <Typography className='bodyMediumText1' sx={{ my: 4 }} color='#FCFCFC'>
                            What’s in it for you
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap', // ✅ allows wrapping on smaller screens
                                justifyContent: 'space-between',
                                gap: 2,
                                mb: 10,
                                maxWidth: '100%', // ✅ keep it inside its container
                            }}
                        >
                            {[Service4, Service5, Service6].map((img, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)' }, // ✅ 3 per row on sm+, full width on xs
                                    }}
                                >
                                    <img src={img} alt='service' style={{ maxWidth: '100%', height: 'auto' }} />
                                    <Typography className='bodyRegularText3' color='#C2C2C4'>
                                        {[
                                            'New revenue streams and broader reach',
                                            'Flexible delivery on your schedule',
                                            'Automated sales and reporting through our cloud system'
                                        ][index]}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography color='#FCFCFC' className='bodyMediumText1' align='center'>Fill up the Form</Typography>

                        <CustomTextField required label="Restaurant / Business Name" name="businessName" value={formTab1.businessName} onChange={(e) => handleChange(e, 1)} />
                        <CustomTextField required label="Contact Person Full Name*" name="contactPersonName" value={formTab1.contactPersonName} onChange={(e) => handleChange(e, 1)} />
                        <CustomTextField label="Position" name="position" value={formTab1.position} onChange={(e) => handleChange(e, 1)} />

                        {/* Contact info */}
                        <CustomTextField required label="Email" name="email" type="email" value={formTab1.email} onChange={(e) => handleChange(e, 1)} />
                        <CustomTextField label="Phone Number" name="phoneNumber" value={formTab1.phoneNumber} onChange={(e) => handleChange(e, 1)} />
                        <CustomTextField label="Your Specialization" name="specialization" value={formTab1.specialization} onChange={(e) => handleChange(e, 1)} />

                        <FormControlLabel
                            control={
                                <Radio
                                    name="agreement"
                                    checked={formTab1.agreement}
                                    onChange={(e) => handleCheckboxChange(e, 1)}
                                    required
                                    sx={{
                                        color: '#C2C2C4',
                                        '&.Mui-checked': {
                                            color: '#7FEE64', // green when checked
                                        },
                                    }}
                                />
                            }
                            className="bodyRegularText4"
                            label={
                                <span>
                                    I Understand that NAF Germany will securely hold my data in accordance with their{' '}
                                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                        privacy policy
                                    </span>
                                </span>
                            }
                            sx={{ mt: 2, color: '#C2C2C4' }}
                        />
                    </Box>
                )}
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={4000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={handleSnackbarClose}
                        severity={snackbar.severity}
                        sx={{ width: '100%' }}
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>

                <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
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

                <Typography variant="body2" className="bodyRegularText4" align="center" color="#C2C2C4" sx={{ mt: 2 }}>
                    We’ll send you detailed information on how to become a NAF partner – free and without obligation
                </Typography>
            </Box>
        </Box>
    );
}

export default PartnersForm;
