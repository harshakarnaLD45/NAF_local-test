import React, { useState } from 'react';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    FormControlLabel,
    Radio,
} from '@mui/material';
import AnimateButton from '../../Componenets/CommonComponents/AnimateButton';
import CustomTextField from './MantaincePage/CustomTextField';
import Service1 from '../../assets/Machines/Service1.png'
import Service2 from '../../assets/Machines/Service2.png'
import Service3 from '../../assets/Machines/Service3.png'
import Service4 from '../../assets/Machines/Service4.png'
import Service5 from '../../assets/Machines/Service5.png'
import Service6 from '../../assets/Machines/Service6.png'

function PartnersForm() {
    const [tab, setTab] = useState(0);

    const [formTab0, setFormTab0] = useState({
        companyName: '',
        installationAddress: '',
        numberOfEmployees: '',
        purchaseMachine: '',
        cateringPartner: '',
        contactName: '',
        email: '',
        phone: '',
    });

    const [formTab1, setFormTab1] = useState({
        companyName: '',
        installationAddress: '',
        numberOfEmployees: '',
        purchaseMachine: '',
        cateringPartner: '',
        contactName: '',
        email: '',
        phone: '',
    });

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    const handleChange = (e, tabIndex) => {
        const { name, value } = e.target;
        if (tabIndex === 0) {
            setFormTab0({ ...formTab0, [name]: value });
        } else {
            setFormTab1({ ...formTab1, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedData = tab === 0 ? formTab0 : formTab1;
        console.log('Submitted Data:', submittedData);

        // You can add custom validation or API submission here
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 10 }}>
            <Box sx={{ maxWidth: 800, width: '100%', p: { xs: 2, sm: 5, md: 10 }, color: '#FCFCFC', border: '1px solid #525252', borderRadius: '24px' }} component="form" onSubmit={handleSubmit}>
                <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                    Partner with NAF Germany: Two Ways to Join the Vending Revolution
                </Typography>

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
                            mt: { xs: 3, sm: 4, md: 6 }
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

                        <CustomTextField required label="Company Name" name="companyName" value={formTab0.companyName} onChange={handleChange} />
                        <CustomTextField required label="Installation Address" name="installationAddress" value={formTab0.installationAddress} onChange={handleChange} />
                        <CustomTextField required label="Number of Employees" name="numberOfEmployees" type="number" value={formTab0.numberOfEmployees} onChange={handleChange} />
                        <CustomTextField required label="Are you willing to purchase the vending machine?" name="purchaseMachine" value={formTab0.purchaseMachine} onChange={handleChange} />
                        <CustomTextField required label="Would you like us to provide a catering partner?" name="cateringPartner" value={formTab0.cateringPartner} onChange={handleChange} />
                        {/* Contact info */}
                        <CustomTextField required label="Contact Person Full Name" name="contactName" value={formTab0.contactName} onChange={handleChange} />
                        <CustomTextField required label="Email" name="email" type="email" value={formTab0.email} onChange={handleChange} />
                        <CustomTextField label="Phone Number" name="phone" value={formTab0.phone} onChange={handleChange} />

                        <FormControlLabel
                            control={
                                <Radio
                                    name="agreement"
                                    checked={formTab0.agreement}
                                    onChange={(e) =>
                                        setFormTab0({
                                            ...formTab0,
                                            agreement: e.target.checked,
                                        })
                                    }
                                    required
                                    sx={{ color: '#C2C2C4' }}
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

                        <CustomTextField required label="Restaurant or Café Name" name="companyName" value={formTab1.companyName} onChange={handleChange} />
                        <CustomTextField required label="Location Address" name="installationAddress" value={formTab1.installationAddress} onChange={handleChange} />
                        <CustomTextField required label="Daily Footfall" name="numberOfEmployees" type="number" value={formTab1.numberOfEmployees} onChange={handleChange} />
                        <CustomTextField required label="Are you interested in vending solutions?" name="purchaseMachine" value={formTab1.purchaseMachine} onChange={handleChange} />
                        <CustomTextField required label="Do you offer food or beverages?" name="cateringPartner" value={formTab1.cateringPartner} onChange={handleChange} />
                        {/* Contact info */}
                        <CustomTextField required label="Contact Name" name="contactName" value={formTab1.contactName} onChange={handleChange} />
                        <CustomTextField required label="Email" name="email" type="email" value={formTab1.email} onChange={handleChange} />
                        <CustomTextField label="Phone Number" name="phone" value={formTab1.phone} onChange={handleChange} />

                        <FormControlLabel
                            control={
                                <Radio
                                    name="agreement"
                                    checked={formTab1.agreement}
                                    onChange={(e) =>
                                        setFormTab1({
                                            ...formTab1,
                                            agreement: e.target.checked,
                                        })
                                    }
                                    required
                                    sx={{ color: '#C2C2C4' }}
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

                <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
                    <AnimateButton text1="SUBMIT" text2="FORM" />
                </Box>

                <Typography variant="body2" className="bodyRegularText4" align="center" color="#C2C2C4" sx={{ mt: 2 }}>
                    We’ll send you detailed information on how to become a NAF partner – free and without obligation
                </Typography>
            </Box>
        </Box>
    );
}

export default PartnersForm;
