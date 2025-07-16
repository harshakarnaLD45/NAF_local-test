import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import whatarrow from "../../assets/Arrow 2.svg";
import "../../Pages/HomePage/HomePage.css";

const BlogHover = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const blogRefs = useRef([]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('https://blog.vendinaf.com/de/rss.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        const items = Array.from(xml.querySelectorAll('item'));

        const blogs = items.slice(0, 5).map((item, i) => {
          const title = item.querySelector('title')?.textContent.trim() || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const date = pubDate ? new Date(pubDate).toLocaleDateString('de-DE') : '';
          const contentEncoded = item.getElementsByTagName('content:encoded')[0]?.textContent || '';
          const doc = new DOMParser().parseFromString(contentEncoded, 'text/html');
          const imgEl = doc.querySelector('img');
          const imageUrl = imgEl?.src || '';
          const link = item.querySelector('link')?.textContent.trim() || '';
          return { id: i + 1, title, date, imageUrl, link };
        });

        setBlogPosts(blogs);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchRSS();
  }, []);

  const handleBlogClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {/* Blog Posts Mapping */}
      {blogPosts.map((post, index) => (
        <Box
          key={post.id}
          ref={el => blogRefs.current[index] = el}
          sx={{
            position: "relative",
            mb: { xs: 0, sm: 0, md: 0, lg: 4 },
            cursor: "pointer",
            // By default (all sizes): show image
            "& .hoverImg": {
              display: "block",
              opacity: 1,
              transition: "opacity 0.3s ease",
            },
            // On desktop only, hide it until hover
            "@media (min-width:1024px)": {
              "& .hoverImg": {
                display: "none",
                opacity: 0,
              },
              "&:hover .hoverImg": {
                display: "block",
                opacity: 1,
              },
            },
          }}
          onClick={() => handleBlogClick(post.link)}
        >
          <Divider sx={{ borderColor: "#6F6F6F" }} />

          <Box
            sx={{
              py: { xs: 3, sm: 3, md: 5 },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              gap: 1,
              width: '100%'
            }}
          >
            {/* images sections */}
            <Box className="imagestaticwhatssmallscreen"
              sx={{
                marginRight: 1
              }}
            >
              <img
                style={{
                  borderRadius: '1.608px',
                  width: "110px",
                  height: "77px",
                  alignItems: 'center',
                }}
                src={post.imageUrl}
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
                src={post.imageUrl}
                alt={post.title}
              />
            </Box>

            {/* images sections */}
            <Box
              className="Whatimage-container bigimagecontaiter hoverImg"
              sx={{
                display: "none", // default hidden
                position: "absolute",
                left: "11%",
                zIndex: 10,
                borderRadius: '10px',
                "@media (min-width: 1024px)": {
                  display: "none", // still hidden unless hover
                },
                ".MuiBox-root:hover &": {
                  display: "block",
                },
                "@media (min-width: 1024px)": {
                  ".MuiBox-root:hover &": {
                    display: "block", // show only on hover above 1024px
                  },
                }
              }}
            >
              <img
                style={{
                  borderRadius: '10px',
                  width: "450px",
                }}
                src={post.imageUrl}
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
              <Typography className="bodyRegularText4" sx={{ color: '#444444' }}>
                Blog
              </Typography>
            </Typography>
            <Box
              component="img"
              src={whatarrow}
              onClick={() => handleBlogClick(post.link)}
              alt="Arrow Icon"
              className="arrow arrowtabscreen arrowbigscreen"
              sx={{
                width: 28,
                height: 28,
                cursor: 'pointer'
              }}
            />

            <Box
              className="blog-containerss"
              sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}
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
                  src={post.imageUrl}
                  alt={post.title}
                />
              </Box>

              {/* Image - Hover effect for above 1024px */}

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
                onClick={() => handleBlogClick(post.link)}
                alt="Arrow Icon"
                className="arrow arrowtabscreen"
                sx={{
                  width: 28,
                  height: 28,
                  cursor: 'pointer'
                }}
              />
            </Box>

            <Box
              component="img"
              src={whatarrow}
              onClick={() => handleBlogClick(post.link)}
              alt="Arrow Icon"
              className="arrow arrowbig"
              sx={{
                width: 28,
                height: 28,
                cursor: 'pointer'
              }}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default BlogHover;