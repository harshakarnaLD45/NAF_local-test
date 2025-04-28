import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import './Insights.css'
import Blogfilter from './Blogfilter'
import BlogHover from './BlogHover'
import { Helmet } from 'react-helmet'

const Insights = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Helmet>
        <title>NAF Vending - Insights</title>
        <link rel="canonical" href="https://vendinaf.com/en/Insights" />
        <meta name='description'
          content="Discover NAF’s AI-powered food vending machines near you. Enjoy fresh, sustainable NAF solutions with smart technology and cloud management. Partner today!" />
        <meta name="keywords"
          content="Pizza vending machine, Fries vending machine, NAF food vending, NAF sustainable vending, Soft ice cream vending, Cotton candy vending, Beer vending machine, Return vending system, Gourmet vending machine, Vending maintenance support, NAF cloud system, Real-time vending analytics, Inventory management vending, Targeted vending ads, Remote machine monitoring, Vending machine leasing, Vending machine partnerships, Germany vending solutions, Innovative vending technology, Food waste reduction vending, Reusable packaging vending, Vending for hotels/universities, Fresh food vending machine, Local food vending, AI vending machines, Smart vending solutions, Automated vending systems, Sustainable vending, Cloud-based vending, Custom vending machines, High-performance vending, Vending machine management, Eco-friendly vending, AI gastronomy, NAF AI vending, NAF vending machines, Near food vending machine, Food vending near me" />
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <Box className='section-container' sx={{ py: { xs: 3, sm: 5, md: 7 } }}>
        <Typography variant='h1' className='headings-h1'>
          Blogs & Insights
        </Typography>
      </Box>
      {/* <Blogfilter /> */}
      <BlogHover />
    </Box>
  )
}

export default Insights
