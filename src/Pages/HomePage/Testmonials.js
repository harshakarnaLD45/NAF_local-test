import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import image from '../../assets/Vector (3).png';

const testimonialDataColumn1 = [
  {
    text: "We were impressed by [Your Company Name]'s expertise in cloud-based solutions. Their team helped us migrate our infrastructure to the cloud seamlessly, improving security and reducing our IT costs significantly.",
    author: "David Lee, CIO, Gamma Industries.",
  },
  {
    text: "Working with NAF Germany was a game-changer for our business. Their UI/UX designs are not only aesthetically pleasing but also incredibly user-friendly, resulting in a significant increase in customer engagement.",
    author: "John Smith, CEO, Acme Corp",
  },
  {
    text: "NAF Germany's end-to-end development services were exceptional. They delivered a high-quality software solution ahead of schedule and within budget. Their team was professional, responsive, and a pleasure to work with.",
    author: "Jane Doe, CTO, Beta Solutions",
  },
  {
    text: "Our restaurant's inventory management has never been so efficient! [Your Company Name]'s software has dramatically reduced food waste and improved our bottom line. We highly recommend their services.",
    author: "Jane Doe, CTO, Beta Solutions",
  },
];

const testimonialDataColumn2 = [
  {
    text: "We were impressed by [Your Company Name]'s expertise in cloud-based solutions. Their team helped us migrate our infrastructure to the cloud seamlessly, improving security and reducing our IT costs significantly.",
    author: "David Lee, CIO, Gamma Industries.",
  },
  {
    text: "Working with NAF Germany was a game-changer for our business. Their UI/UX designs are not only aesthetically pleasing but also incredibly user-friendly, resulting in a significant increase in customer engagement.",
    author: "John Smith, CEO, Acme Corp",
  },
  {
    text: "NAF Germany's end-to-end development services were exceptional. They delivered a high-quality software solution ahead of schedule and within budget. Their team was professional, responsive, and a pleasure to work with.",
    author: "Jane Doe, CTO, Beta Solutions",
  },
  {
    text: "Our restaurant's inventory management has never been so efficient! [Your Company Name]'s software has dramatically reduced food waste and improved our bottom line. We highly recommend their services.",
    author: "Jane Doe, CTO, Beta Solutions",
  },
];

const TestimonialCard = ({ text, author }) => (
  <Paper
    elevation={0}
    sx={{
      bgcolor: "#161616",
      borderRadius: 2,
      p: 2.5,
      display: "flex",
      flexDirection: "column",
      gap: 1,
      mb: 3,
      height: "auto",
    }}
  >
    <Typography variant="body1" color="#C2C2C4" className="bodyRegularText4">
      {text}
    </Typography>
    <Typography
      className="bodyMediumText3"
      variant="body2"
      color="#C2C2C4"
      align="right"
    >
      {author}
    </Typography>
  </Paper>
);

const Testimonials = () => {
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);

  useEffect(() => {
    const scrollSpeed = 1;
    let animationFrameId;

    const scrollColumns = () => {
      if (column1Ref.current && column2Ref.current) {
        // Column 1 scrolls up
        column1Ref.current.scrollTop += scrollSpeed;
        if (column1Ref.current.scrollTop >= column1Ref.current.scrollHeight - column1Ref.current.clientHeight) {
          column1Ref.current.scrollTop = 0;
        }

        // Column 2 scrolls down
        column2Ref.current.scrollTop -= scrollSpeed;
        if (column2Ref.current.scrollTop <= 0) {
          column2Ref.current.scrollTop = column2Ref.current.scrollHeight - column2Ref.current.clientHeight;
        }
      }
      animationFrameId = requestAnimationFrame(scrollColumns);
    };

    animationFrameId = requestAnimationFrame(scrollColumns);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  const extendedColumn1 = [...testimonialDataColumn1, ...testimonialDataColumn1];
  const extendedColumn2 = [...testimonialDataColumn2, ...testimonialDataColumn2];

  return (
    <Box sx={{
      // paddingX: '2rem', paddingTop: '10rem', 
    }}
      className='section-container'
    >
      <Box className="testimonials-section"
        sx={{
          bgcolor: "#262626",
          py: 0,
          position: "relative",
          px: "2rem",
          borderRadius: '24px',
          overflow: "hidden", // Ensure no overflow outside the section
        }}
      >
        <Grid container alignItems= "center" >
          {/* Left Section */}
          <Grid item xs={12} md={5} className="left-section">
            <Box
              className='left-sections'
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", md: "flex-start" },
                gap: { xs: 5, md: 10 },
                height: "100%",
                justifyContent: "space-between",
                paddingRight: { xs: "0rem", md: "2rem" },
                paddingTop: { xs: "3rem" },
                paddingBottom: { xs: "3rem", md: "0rem" }
              }}
            >
              <Typography
                className="headings-h2"
                variant="h2"
                color="#FCFCFC"
              >
                What's Our Clients Are Saying
              </Typography>
              {/* <Box className="testmonialimage"
                component="img"
                src={image}
                alt="Vector"
                sx={{width:'377px',height:'308px'}}
              /> */}

              <Box
                className="testmonialimage"
                component="img"
                src={image}
                alt="Vector"
                sx={{
                  width: '377px',
                  height: '308px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  textAlign: 'left',

                  '@media (max-width: 1200px)': {
                    width: '320px',
                    height: '261px',
                  },
                  '@media (max-width: 900px)': {
                    width: '249px',
                    height: '204px',
                    // paddingLeft:'0rem'
                  },
                  '@media (max-width: 600px)': {
                    width: '249px',
                    height: '204px',
                  },
                  '@media (max-width: 480px)': {
                    width: '119px',
                    height: '98px',
                  }
                }}
              />
            </Box>
          </Grid>


          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {/* Column 1 - Scrolls Up */}
              <Grid item xs={12} sm={6} sx={{ paddingTop: '0px' }}>
                <Box
                  ref={column1Ref} className="column-container"
                  sx={{
                    height: '670px',
                    overflow: 'hidden',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                  }}
                >
                  {extendedColumn1.map((item, index) => (
                    <TestimonialCard
                      key={`col1-${index}`}
                      text={item.text}
                      author={item.author}
                    />
                  ))}
                </Box>
              </Grid>

              {/* Column 2 - Scrolls Down */}
              <Grid item xs={12} sm={6}
                sx={{
                  paddingTop: '0px',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Box className="testimonial-cards-sec"
                  ref={column2Ref}
                  sx={{
                    height: '670px',
                    overflow: 'hidden',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                  }}
                >
                  {extendedColumn2.map((item, index) => (
                    <TestimonialCard

                      key={`col2-${index}`}
                      text={item.text}
                      author={item.author}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;