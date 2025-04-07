import { Box, Typography } from '@mui/material'
import React from 'react'

function Specifications() {
    return (
        <Box className="section-container">
            <Typography className='headings-h2'
                variant="h4"
                sx={{ color: '#FCFCFC', marginBottom: '20px', textAlign: 'left' }}
            >
                Specifications
            </Typography>
            <hr className='software-hr' style={{ margin: '50px 0', width: '100%' }} />
            <Box className='software-specifications-items' >
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
            <hr className='software-hr' style={{ margin: '50px 0' }} />
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
            <hr className='software-hr' style={{ margin: '50px 0' }} />
            <Box className='software-specifications-items'>
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
            <hr className='software-hr' style={{ margin: '50px 0' }} />
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
        </Box>
    )
}

export default Specifications