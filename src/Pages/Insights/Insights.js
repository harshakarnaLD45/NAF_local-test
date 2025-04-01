import { Box, Typography } from '@mui/material'
import React from 'react'
import './Insights.css'
import Blogfilter from './Blogfilter'
import BlogHover from './BlogHover'


const Insights = () => {
  return (
    <Box>
        <Box>
            <Typography variant='h1' className='headings-h1 section-container  Insightscontainer ' >
            Blogs & Insights
            </Typography>
        </Box>
        <Blogfilter/>
        <BlogHover/>
     
    </Box>
  )
}

export default Insights
