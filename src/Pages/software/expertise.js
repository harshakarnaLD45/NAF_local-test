import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import CloudMigration from '../../assets/software/cloudMigration.svg'
import CloudSecurity from '../../assets/software/Cloud_Security.svg'
import CustomCloudSolutions from '../../assets/software/Custom_CloudSolutions.svg'
import CloudOptimization from '../../assets/software/Cloud_Optimization.svg'
import ManagedCloudServices from '../../assets/software/Managed_CloudServices.svg'
import zIndex from '@mui/material/styles/zIndex';


const expertise = () => {
    const expertiseData = [
        {
            title: 'Cloud Migration',
            description: 'Seamlessly transition your infrastructure to the cloud, minimizing downtime and maximizing efficiency.',
            icon: CloudMigration, // Replace with an actual icon if available
        },
        {
            title: 'Cloud Optimization',
            description: 'We fine-tune your cloud environment for optimal performance and cost-effectiveness, reducing expenses and improving resource utilization.',
            icon: '✖', // Replace with an actual icon if available
        },
        {
            title: 'Cloud Security',
            description: 'Protect your sensitive data with robust security measures, ensuring compliance and peace of mind.',
            icon: '✹', // Replace with an actual icon if available
        },
        {
            title: 'Managed Cloud Services',
            description: 'We provide ongoing maintenance and proactive support, freeing up your IT team to focus on strategic initiatives.',
            icon: '▦', // Replace with an actual icon if available
        },
        {
            title: 'Custom Cloud Solutions',
            description: 'We design and implement tailored cloud solutions to meet your unique business requirements, providing the flexibility and scalability you need to grow.',
            icon: '⚪', // Replace with an actual icon if available
        },
    ];

    return (
        <Box className="expertise-main-section" sx={{ position: 'relative'}}>
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: -1000,
                    py: 2,
                    marginTop: '200px',
                    marginBottom: '100px',
                }}
            >
                <Typography className='expertise-title headings-h2' sx={{position:'relative',bottom:'-50px'}} variant="h4" align="center" gutterBottom>
                    Our Expertise
                </Typography>
            </Box>
            <Box  className="expertise-maincards-container" style={{ padding: '0px',zIndex:'5' }}>

                <Box class name="expertise-sub-cards-container" style={{ padding: '0px', }}>
                    <Box className='expertise-sub-cards'>
                        <Box className="" >
                            <img className='' src={CloudMigration} alt="Software Hero Image" />
                        </Box>
                        <Box className=" expertise-text-sec">

                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Remote Machine Monitoring</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>Monitor machine status, schedule maintenance, and address technical issues remotely.</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="" >
                            <img className='' src={CloudSecurity} alt="Software Hero Image" />
                        </Box>
                        <Box className=" expertise-text-sec">

                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Cloud Security</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>Protect your sensitive data with robust security measures, ensuring compliance and peace of mind.</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="" >
                            <img className='' src={CustomCloudSolutions} alt="Software Hero Image" />
                        </Box>
                        <Box className=" expertise-text-sec">

                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Custom Cloud Solutions</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>We design and implement tailored cloud solutions to meet your unique business requirements, providing the flexibility and scalability you need to grow.</Typography>
                        </Box>
                    </Box>




                </Box>
                <Box className="expertise-sub-cards-container2" style={{ }}>
                    <Box className='expertise-sub-cards'>
                        <Box className="" >
                            <img className='' src={CloudOptimization} alt="Software Hero Image" />
                        </Box>
                        <Box className=" expertise-text-sec">

                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Cloud Optimization</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>We fine-tune your cloud environment for optimal performance and cost-effectiveness, reducing expenses and improving resource utilization.</Typography>
                        </Box>
                    </Box>
                    <Box className='expertise-sub-cards'>
                        <Box className="" >
                            <img className='' src={ManagedCloudServices} alt="Software Hero Image" />
                        </Box>
                        <Box className=" expertise-text-sec">

                            <Typography className=' headings-h4' sx={{ textAlign: 'left' }} >Managed Cloud Services</Typography>
                            <Typography className=' bodyRegularText3 ' sx={{
                                color: '#C2C2C4', textAlign: 'left',
                                maxWidth: '720px'
                            }}>We provide ongoing maintenance and proactive support, freeing up your IT team to focus on strategic initiatives.</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </Box>
    );
};

export default expertise;