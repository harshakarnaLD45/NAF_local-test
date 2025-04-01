import React from 'react'
import './software.css'
import softwareHeroImg from '../../assets/software/software_hero-svg.svg'

import { Box, Divider, Grid, Typography } from '@mui/material'
import Bentogrid from './bentogrid'
import Expertise from './expertise'
import Ready from './Ready'
import Ready1 from './Ready1'
const software = () => {
    return (





        <div className='software-container section-container'>
            <Box className='software-hero-sec'>
                <Box className='software-hero-text-sec'>
                    <Typography className="herotitle headings-h1" variant="h1" sx={{ color: "#FCFCFC" }}>
                        Smart Vending, Powered by the NAF Cloud System
                    </Typography>
                    <Typography className=" software-herosubtitle bodyRegularText3" variant="body1" sx={{ color: "#C2C2C4" }} >
                        Cutting-edge technology for efficient, scalable, and secure global vending operations.
                    </Typography>
                </Box>
                <Box className='software-hero-img-sec'>
                    <img className='software-hero-img' src={softwareHeroImg} alt="Software Hero Image" />
                </Box>


            </Box>
            <Box className='software-hero-sec software-hero-section2'>
                <Box className='software-hero-text-sec2'>
                    <Typography className="herotitle headings-h2" variant="h1" sx={{ color: "#FCFCFC" }}>
                        Introducing the NAF Cloud System
                    </Typography>
                    <Typography className=" software-herosubtitle2 bodyRegularText3 bodyMediumText2" variant="body1" sx={{ color: "#C2C2C4" }} >
                        The NAF Cloud System is a comprehensive web-based dashboard designed to provide real-time insights and complete control over your vending machine operations. This centralized platform streamlines management and enhances business efficiency.
                    </Typography>
                </Box>
                {/* <Box className='software-hero-img-sec'>
                    <img className='software-hero-img' src={softwareHeroImg} alt="Software Hero Image"/>
                </Box> */}
            </Box>
            <Bentogrid />



{/* specifications */}
            <Box className="software-specifications-sec" sx={{ marginTop: '250px',  }}>
                <Typography className='headings-h2'
                    variant="h4"
                    sx={{ color: '#FCFCFC', marginBottom: '20px', fontWeight: 'bold', textAlign: 'left' }}
                >
                    Specifications
                </Typography>
                <hr className='software-hr' style={{margin:'50px 0',width:'100%'}}  />
                {/* <Grid container> */}
                    <Box  className='software-specifications-items' >
                        <Box sx={{ display: 'flex' }}>
                            <Box className="spec-title-sec">
                                <Typography className='headings-h4' variant="h6" sx={{ color: '#FCFCFC', marginBottom: '10px' }}>
                                    Sales & Performance
                                </Typography>
                            </Box>
                            <Box className='spec-text-sec'>

                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                    Sales Reporting (daily, weekly, monthly, yearly)
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                    Performance Analytics (product, category, machine)
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                    Error Notifications
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                    User Permissions
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <hr className='software-hr' style={{margin:'50px 0'}}  />
                    <Box className='software-specifications-items' >
                        <Box sx={{ display: 'flex' }}>
                            <Box className="spec-title-sec">
                                <Typography className='headings-h4' variant="h6" sx={{ color: '#FCFCFC', marginBottom: '10px' }}>
                                Machines
                                </Typography>
                            </Box>
                            <Box className='spec-text-sec'>

                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Real-Time Machine Status
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Track Order History
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Manage Ad Campaigns
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Access Reports
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                View Inventory Levels
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Analyze Sales Data
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Organize Machines
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <hr className='software-hr' style={{margin:'50px 0'}}  />
                    <Box  className='software-specifications-items'>
                        <Box sx={{ display: 'flex' }}>
                            <Box className="spec-title-sec">
                                <Typography className='headings-h4' variant="h6" sx={{ color: '#FCFCFC', marginBottom: '10px' }}>
                                Products
                                </Typography>
                            </Box>
                            <Box className='spec-text-sec'>

                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Easy Product Setup
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Flexible Product Organization
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Precise Inventory Control
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Dynamic Pricing
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                View Inventory Levels
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Targeted Promotions
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Nutritional Info Management
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Precise Temperature Control
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <hr className='software-hr' style={{margin:'50px 0'}}  />
                    <Box className='software-specifications-items' >
                        <Box sx={{ display: 'flex' }}>
                            <Box className="spec-title-sec">
                                <Typography className='headings-h4' variant="h6" sx={{ color: '#FCFCFC', marginBottom: '10px' }}>
                                Users
                                </Typography>
                            </Box>
                            <Box className='spec-text-sec'>

                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                User Profile Management
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Role-Based Access Control
                                </Typography>
                                <Typography className='bodyRegularText3' variant="body2" sx={{ color: '#C2C2C4' }}>
                                Customizable Company Segmentation
                                </Typography>
                               
                            </Box>
                        </Box>
                    </Box>
                {/* </Grid> */}
            </Box>
            {/* expertise */}
<Expertise/>
<Ready/>
<Ready1/>




        </div>
    )
}

export default software