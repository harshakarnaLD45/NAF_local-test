import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import './Insights.css'
import Blogfilter from './Blogfilter'
import BlogHover from './BlogHover'


const Insights = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
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
