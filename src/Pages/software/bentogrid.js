import './software.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import DemoFrame from "../../assets/software/demoframe.svg";

const bentogrid = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#1A2027',
        color: '#fff',
        padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }));

    return (
        <div className="bentogrid-container" style= {{ padding: '0px',  }}>
            <Grid container spacing={1} sx={{ width: '100%' }}>
                <Grid item xs={12} sm={4} md={4}>
                    <Item className='bentogrid-item'>
                            <Box className="bentogrid-image-sec " >
                                <img className='bentogrid-image' src={DemoFrame} alt="Software Hero Image"/>
                            </Box>
                            <Box className="bentogrid-text-sec">

                                <Typography className=' headings-h4' sx={{textAlign:'left'}} >Real-Time Sales Analytics</Typography>
                                <Typography className=' bodyRegularText3 'sx={{color:'#C2C2C4',textAlign:'left'}}>Track sales performance by product, location, and time period through intuitive charts and graphs.</Typography>
                            </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <Item className='bentogrid-item'>
                    <Box className="bentogrid-image-sec " >
                                <img className='bentogrid-image' src={DemoFrame} alt="Software Hero Image"/>
                            </Box>
                            <Box className="bentogrid-text-sec">

                            <Typography className=' headings-h4' sx={{textAlign:'left'}} >Intelligent Inventory Management</Typography>
                            <Typography className=' bodyRegularText3 'sx={{color:'#C2C2C4',textAlign:'left',
                                maxWidth: '720px'}}>Optimize stock levels and minimize downtime with real-time inventory tracking and automated restocking alerts.</Typography>
                            </Box>
                            </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <Item className='bentogrid-item'>
                    <Box className="bentogrid-image-sec " >
                                <img className='bentogrid-image' src={DemoFrame} alt="Software Hero Image"/>
                            </Box>
                            <Box className="bentogrid-text-sec">

                            <Typography className=' headings-h4' sx={{textAlign:'left'}} >Targeted Advertising Capabilities</Typography>
                            <Typography className=' bodyRegularText3 'sx={{color:'#C2C2C4',textAlign:'left',
                                maxWidth: '720px'}}>Create and deploy engaging advertisements to vending machine screens to drive sales.</Typography>
                            </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                    <Item className='bentogrid-item'>
                    <Box className="bentogrid-image-sec " >
                                <img className='bentogrid-image' src={DemoFrame} alt="Software Hero Image"/>
                            </Box>
                            <Box className="bentogrid-text-sec">

                            <Typography className=' headings-h4' sx={{textAlign:'left'}} >Remote Machine Monitoring</Typography>
                            <Typography className=' bodyRegularText3 'sx={{color:'#C2C2C4',textAlign:'left',
                                maxWidth: '720px'}}>Monitor machine status, schedule maintenance, and address technical issues remotely.</Typography>
                            </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Item className='bentogrid-item'>
                    <Box className="bentogrid-image-sec " >
                                <img className='bentogrid-image' src={DemoFrame} alt="Software Hero Image"/>
                            </Box>
                            <Box className="bentogrid-text-sec">

                            <Typography className=' headings-h4' sx={{textAlign:'left'}} >Customer Relationship Management (CRM)</Typography>
                            <Typography className=' bodyRegularText3 'sx={{color:'#C2C2C4',textAlign:'left'}}>Manage customer memberships, discounts, and coupons to enhance customer loyalty.</Typography>
                            </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item className='bentogrid-item'>
                    <Box className="bentogrid-image-sec " >
                                <img className='bentogrid-image' src={DemoFrame} alt="Software Hero Image"/>
                            </Box>
                            <Box className="bentogrid-text-sec">

                            <Typography className=' headings-h4' sx={{textAlign:'left'}} >Automated Tax Reporting</Typography>
                            <Typography className=' bodyRegularText3 'sx={{color:'#C2C2C4',textAlign:'left',
                                maxWidth: '720px'}}>Generate accurate monthly tax reports for simplified compliance.</Typography>
                            </Box>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item className='bentogrid-item'>
                    <Box className="bentogrid-image-sec " >
                                <img className='bentogrid-image' src={DemoFrame} alt="Software Hero Image"/>
                            </Box>
                            <Box className="bentogrid-text-sec">

                            <Typography className=' headings-h4' sx={{textAlign:'left'}} >Secure Infrastructure</Typography>
                            <Typography  className='  bodyRegularText3 'sx={{
                                color:'#C2C2C4',
                                textAlign:'left',
                                maxWidth: '720px'
                                
                                }}>Benefit from a secure and reliable AWS-hosted system, ensuring data protection and business continuity.</Typography>
                            </Box>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
};

export default bentogrid;