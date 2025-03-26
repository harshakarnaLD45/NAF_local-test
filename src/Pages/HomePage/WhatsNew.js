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
      const arrow = blog.querySelector(".arrow");
      const image = blog.querySelector(".blog-image");


      gsap.set(image, {
        display: "none",
        opacity: 0,
        immediateRender: true
      });
      gsap.set(arrow, { x: 0 });
      gsap.set(date, { x: 0 });

      // Create timeline
      const tl = gsap.timeline({ paused: true })
        .to(date, {
          x: 20,
          duration: 0.3,
          ease: "power2.out"
        })
        .to(arrow, {
          x: -30,
          duration: 0.3,
          ease: "power2.out"
        }, 0)
        .to(image, {
          display: "block",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        }, 0);

      // Event listeners
      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => {
        tl.reverse().then(() => {

          gsap.set(image, { display: "none", opacity: 0 });
        });
      };

      blog.addEventListener("mouseenter", handleMouseEnter);
      blog.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        blog.removeEventListener("mouseenter", handleMouseEnter);
        blog.removeEventListener("mouseleave", handleMouseLeave);
        tl.kill(); // Kill the timeline to prevent memory leaks
      };
    });
  }, []);

  return (
    <Box sx={{ position: "relative" }} className='section-container'>
      {/* Title Section */}
      <Box className='explore-container' sx={{ mb: 3 }}>
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
          sx={{ position: "relative", width: '100%', }}
        >
          <Divider sx={{ borderColor: "#6F6F6F" }} />
          <Box
            sx={{
              py: 5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Date */}
            <Typography className="bodyRegularText4" sx={{ color: "#C2C2C4" }}>
              {post.date}
            </Typography>

            <Box sx={{
              position: "absolute",
              left: "11%",
              "@media (min-width: 2000px)": {
                left: `15%`,
              },
              bottom: "-50px",
              zIndex: 10,
              borderRadius: '10px',
              overflow: "hidden",
            }}>

              <img style={{
                borderRadius: '10px',
                width: "450px",
                height: "100%",
              }}
                src={post.image}
                alt={post.title}

                className="blog-image"
              />

            </Box>

            {/* Title */}
            <Typography
              className="bodyMediumText1"
              sx={{
                color: "#FCFCFC",
                width: "35%",
                marginLeft: '20%',
              }}
            >
              {post.title}
            </Typography>

            {/* Arrow */}
            <Box
              component="img"
              src={whatarrow}
              alt="Arrow Icon"
              className="arrow"
              sx={{
                width: 28,
                height: 28,
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default WhatsNew;