import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import whatarrow from "../../assets/Vector (2).png";
import gsap from "gsap";
import blogimage from '../../assets/representations-user-experience-interface-design 1.png';
import "../../Pages/HomePage/HomePage.css";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";

const WhatsNew = () => {
  const blogPosts = [
    {
      id: 1,
      date: "11 March 2025",
      title: "How UI/UX Design Can Boost Your Vending Machine Sales",
      image: blogimage,
    },
    {
      id: 2,
      date: "11 March 2025",
      title: "How UI/UX Design Can Boost Your Vending Machine Sales",
      image: blogimage,
    },
    {
      id: 3,
      date: "11 March 2025",
      title: "How UI/UX Design Can Boost Your Vending Machine Sales",
      image: blogimage,
    },
    {
      id: 4,
      date: "11 March 2025",
      title: "How UI/UX Design Can Boost Your Vending Machine Sales",
      image: blogimage,
    },
  ];

  const blogRefs = useRef([]);

  useEffect(() => {
    blogRefs.current.forEach((blog, index) => {
      if (!blog) return;

      const date = blog.querySelector(".date");
      const arrow = blog.querySelector(".arrowbig"); // Targeting the big arrow
      const image = blog.querySelector(".blog-image");

      // Apply hover animation only for screens >= 1024px
      if (window.innerWidth >= 1024) {
        gsap.set(image, {
          display: "none",
          opacity: 0,
          immediateRender: true
        });
        gsap.set(arrow, { x: 0 });
        gsap.set(date, { x: 0 });

        const tl = gsap.timeline({ paused: true })
          .to(date, {
            x: 20,
            duration: 0.3,
            ease: "power2.out"
          })
          .to(arrow, {
            x: -30, // Arrow moves back (to the left) on hover
            duration: 0.3,
            ease: "power2.out"
          }, 0)
          .to(image, {
            display: "block",
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          }, 0);

        const handleMouseEnter = () => tl.play();
        const handleMouseLeave = () => {
          tl.reverse().then(() => {
            gsap.set(image, { display: "none", opacity: 0 });
          });
        };

        blog.addEventListener("mouseenter", handleMouseEnter);
        blog.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          blog.removeEventListener("mouseenter", handleMouseEnter);
          blog.removeEventListener("mouseleave", handleMouseLeave);
          tl.kill();
        };
      }
    });
  }, []);

  return (
    <Box sx={{ position: "relative" }} className='section-container'>
      {/* Title Section */}
      <Box className='explore-container whatsnewcontainer' sx={{ mb: 3 }}>
        <Typography variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
          What's New
        </Typography>
        <Box>
          <AnimateButton text1="VIEW" text2="MORE" />
        </Box>
      </Box>

      {/* Blog Posts Mapping */}
      {blogPosts.map((post, index) => (
        <Box
          key={post.id}
          ref={el => blogRefs.current[index] = el}
          sx={{ position: "relative", width: '100%' }}
        >
          <Divider sx={{ borderColor: "#6F6F6F" }} />

          <Box
            sx={{
              py: {
                xs: 2,  // Small padding for mobile (extra-small screens)
                sm: 3,  // Medium padding for tablet (small screens)
                md: 5,  // Larger padding for desktop (medium screens)
              },
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Box className="imagestaticwhatssmallscreen"
              sx={{
                marginRight: 2
              }}
            >
              <img
                style={{
                  borderRadius: '1.608px',
                  width: "110px",
                  height: "77px",
                  alignItems: 'center',
                }}
                src={post.image}
                alt={post.title}
              />
            </Box>
            <Typography className="bodyRegularText4 date  datebig" sx={{ color: "#C2C2C4" }}>
              {post.date}
            </Typography>


            <Box className="imagestaticwhats bigimage"
              sx={{
                mx: 2,
              }}
            >
              <img
                style={{
                  borderRadius: '1.608px',
                  width: "201px",
                  height: "140px",
                  alignItems: 'center',
                }}
                src={post.image}
                alt={post.title}
              />
            </Box>


            <Box
              className="Whatimage-container bigimagecontaiter"
              sx={{
                position: "absolute",
                left: "11%",
                "@media (min-width: 2000px)": {
                  left: `15%`,
                },
                bottom: "-50px",
                zIndex: 10,
                borderRadius: '10px',
                overflow: "hidden",
              }}
            >
              <img

                style={{
                  borderRadius: '10px',
                  width: "450px",
                  height: "100%",
                }}
                src={post.image}
                alt={post.title}
                className="blog-image bigimage"
              />
            </Box>


            <Typography
              className="bodyMediumText1 whatsmiddletext bigtitle"
              sx={{
                color: "#FCFCFC",
                width: "35%",
                marginLeft: { xs: 0, lg: '20%' },
              }}
            >
              {post.title}
            </Typography>
            <Box
              component="img"
              src={whatarrow}
              alt="Arrow Icon"
              className="arrow arrowtabscreen arrowbigscreen"
              sx={{
                width: 28,
                height: 28,
              }}
            />

            <Box
              className="blog-containerss"
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Typography className="bodyRegularText4 date" sx={{ color: "#C2C2C4" }}>
                {post.date}
              </Typography>

              {/* Image - Static below 1024px */}
              <Box className="imagestaticwhats"
                sx={{
                  mx: 2,
                }}
              >
                <img
                  style={{
                    borderRadius: '1.608px',
                    width: "201px",
                    height: "140px",
                    alignItems: 'center',
                  }}
                  src={post.image}
                  alt={post.title}
                />
              </Box>

              {/* Image - Hover effect for 1024px and above */}
              {/* Title */}
              <Typography
                className="bodyMediumText1 whatsmiddletext"
                sx={{
                  color: "#FCFCFC",
                  width: "35%",
                  marginLeft: { xs: 0, lg: '20%' },
                }}
              >
                {post.title}
              </Typography>
              <Box
                component="img"
                src={whatarrow}
                alt="Arrow Icon"
                className="arrow arrowtabscreen"
                sx={{
                  width: 28,
                  height: 28,
                }}
              />
            </Box>

            {/* Arrow */}
            <Box
              component="img"
              src={whatarrow}
              alt="Arrow Icon"
              className="arrow arrowbig"
              sx={{
                width: 28,
                height: 28,
                mt:2,
              }}
            />
          </Box>
        </Box>
      ))
      }
    </Box >
  );
};

export default WhatsNew;