import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dateimage from "../../assets/Vector (2).svg";
import arrowback from "../../assets/Vector (4).png";
import arrowforward from "../../assets/Vector (5).png";
import {
  Box,
  Button,
 
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import blogimage from "../../assets/representations-user-experience-interface-design 1.png";
import { useNavigate, useParams } from "react-router-dom";
import BlogDetailPage2 from "./BlogDetailPage2";

const BlogDetailPage1 = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(1);
  

  // Table of contents data
  const tableOfContents = [
    { id: 1, title: "Intuitive User Interface", active: true },
    { id: 2, title: "Engaging Visuals and Branding", active: false },
    { id: 3, title: "Seamless User Experience", active: false },
    { id: 4, title: "Accessibility Considerations", active: false },
    { id: 5, title: "Personalization and Adaptability", active: false },
    { id: 6, title: "Building Trust through Security", active: false },
    { id: 7, title: "Conclusion" },
  ];

  // Blog content sections data
  const blogSections = [
    {
        id: 1,
      title: "1. Intuitive User Interface",
      content:
        "One of the most significant ways UI design affects vending machine sales is through an intuitive interface. A confusing layout or unclear instructions can frustrate users, leading them to abandon their purchase. A well-designed UI simplifies the process, making it easy for customers to understand how to make selections, complete payments, and receive their products. Simple elements like a responsive touchscreen with clear buttons and prompts can drastically improve user interaction.",
    },
    {
        id: 2,
      title: "2. Engaging Visuals and Branding",
      content:
        "First impressions count, and the visual design of a vending machine plays a crucial role in attracting potential customers. A modern, sleek appearance can draw attention, especially if it aligns with your brand's identity. Vibrant colors, cohesive branding, and high-quality graphics can create a machine that captivates and retains customers' interest. Well-placed promotional content on the display can also entice users with special offers or new product lines.",
    },
    {
        id: 3,
      title: "3. Seamless User Experience",
      content:
        "Beyond aesthetics, a seamless user experience is paramount. The process should be fast and straightforward from start to finish, minimizing friction at every step. This involves optimizing the layout for quick navigation, offering multiple payment options, and ensuring quick product dispensation. Consider adding feedback mechanisms, such as thank-you messages, or receipt options, to leave a positive impression.",
    },
    {
        id: 4,
      title: "4. Accessibility Considerations",
      content:
        "Incorporating accessibility into your vending machine design is not only a moral and legal obligation but also a strategic advantage. By designing for inclusivity, you ensure that all potential customers, including those with disabilities, can use your machines with ease. Features like height-adjustable interfaces, voice commands, Braille instructions, or larger text can make a significant difference.",
    },
    {
        id: 5,
      title: "5. Personalization and Adaptability",
      content:
        "Modern consumers appreciate personalized experiences. Advanced vending machines can incorporate AI and data analytics to adapt their offerings based on user preferences and past purchase history. Employing these technologies within your UI/UX design can provide a customized experience, increasing the likelihood of repeat customers. Additionally, adaptability in the interface allows for easy integration of new products and features as trends evolve.",
    },
    {
        id: 6,
      title: "6. Building Trust through Security",
      content:
        "Security features in vending machines are vital for building trust. A robust UX includes demonstrating the safety of transactions, particularly with digital payments. Display security credentials prominently and provide an option for digital receipts. Ensuring customers that their data is secure builds confidence and encourages usage.",
    },
    {
        id: 7,
      title: "Conclusion",
      content:
        "Investing in UI/UX design for vending machines isn't just about creating a visually appealing product—it's about enhancing the overall customer experience. By prioritizing intuitive design, engaging visuals, seamless interactions, inclusivity, personalization, and security, you can significantly increase customer satisfaction and, consequently, boost your vending machine sales. As consumer expectations continue to rise, leveraging impactful design becomes essential in staying competitive and driving growth in the vending industry.",
    },
  ];

  const handleSectionClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" }); 
    }
  };


   const introText =
    "In today's fast-paced world, convenience is king. As consumers increasingly seek quick and seamless purchasing experiences, vending machines are becoming more popular than ever. However, the true potential of vending machines is often untapped due to poor user interfaces (UI) and user experiences (UX). Investing in excellent UI/UX design can significantly enhance customer satisfaction and drive sales. Here, we explore how thoughtful design can transform your vending machine business.";


  return (
    <Box sx={{ minHeight: "100vh", width: "100%" }}>
      <Box sx={{ position: "relative" }} className="section-container blogdetailedcontainer">
        <Stack direction="row" justifyContent="space-between" >
          <Button
            onClick={() => navigate("/Insights")}
            sx={{ color: "#FCFCFC", textTransform: "none", padding:'0px',  "&:hover": {
                backgroundColor: "transparent",  }}}
            className="bodyRegularText2"
          >
            <img
              src={arrowback}
              alt="Back Arrow"
              style={{
                width: 18,
                height: 14,
                marginRight: 8,
              }}
            />
            Back
          </Button>
          <Button
            onClick={() => navigate("/blog/power-ui-ux-vending")}
            sx={{ color: "#FCFCFC", textTransform: "none", padding:'0px',  "&:hover": {
                backgroundColor: "transparent",  }}}
            className="bodyRegularText2"
          >
            Next
            <img
              src={arrowforward}
              alt="Next Arrow"
              style={{
                width: 18,
                height: 14,
                marginLeft: 8,
                aspectRatio: 3 / 4,
              }}
            />
          </Button>
        </Stack>
        <Typography
          variant="h2"
          className="headings-h2"
          sx={{
            color: "#fcfcfc",
            mt: 8,
            mb: 3,
            maxWidth: "1513px",
          }}
        >
          The Ultimate Guide to Choosing the Right Vending Machine for Your Business
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 3,
            mb: 3,
          }}
        >
          <Typography className="bodyRegularText4" sx={{ color: "#C2C2C4" }}>
            8 Min Read
          </Typography>
          <img src={dateimage} alt="Blog Featured Image" />
          <Typography className="bodyRegularText4" sx={{ color: "#C2C2C4" }}>
            11 March 2025
          </Typography>
        </Box>
        {/* Divider */}
        <Divider sx={{ bgcolor: "#525252", my: 3 }} />
        {/* Main content */}
        <Grid container spacing={6} sx={{ paddingTop: "2rem" }}>
          {/* Table of contents */}
          <Grid item xs={12} md={3} spacing={10}>
            <Box
              sx={{
                position: "sticky", // Make the table of contents sticky
                top: 20, // Offset from the top of the viewport
                alignSelf: "flex-start", // Align to the top of the container
              }}
            >
              <Typography
                variant="caption"
                className="bodyRegularText5"
                sx={{ color: "#C2C2C4", display: "block", mb: 2 }}
              >
                Table of Contents
              </Typography>
              <List sx={{ p: 0 }}>
                {tableOfContents.map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => handleSectionClick(item.id)} // Click handler using ID
                    sx={{
                      borderTop: index === 0 ? "0.5px dashed #606060" : "none",
                      borderBottom: "0.5px dashed #606060",
                      height: 80,
                      px: 0,
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      className="bodyRegularText3"
                      sx={{
                        color: activeSection === item.id ? "#7FEE64" : "#FCFCFC", // Active styling
                        fontWeight: activeSection === item.id ? 500 : 400,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          {/* Article content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              marginLeft: "15rem",
              "@media (min-width: 2000px)": {
                marginLeft: "25rem",
              },
              "@media (max-width: 1400px)": {
                marginLeft: "10rem",
              },
              "@media (max-width: 900px)": {
                marginLeft: "0rem",
              },
            }}
          >
            {/* Featured image */}
            <img
  src={blogimage}
  alt="Blog Featured Image"
  style={{
    width: "100%", // Ensures the image spans the full width of its container
    height: "auto", // Automatically adjusts height to maintain aspect ratio
    maxHeight: "60vh", // Limits height to 60% of the viewport height for larger screens
    borderRadius: "24px",
    objectFit: "cover",
    marginBottom: "48px",
  }}
/>
            {/* Introduction */}
            <Typography
              className="bodyRegularText3"
              sx={{
                color: "#C2C2C4",
                mb: 6,
                lineHeight: 1.6,
              }}
            >
              {introText}
            </Typography>
            {/* Blog sections */}
            <Stack spacing={6}>
              {blogSections.map((section, index) => (
                <Box key={index} id={`section-${section.id}`}> {/* Unique ID for each section */}
                  <Typography
                    className="bodyMediumText1"
                    sx={{
                      color: "#FCFCFC",
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    className="bodyRegularText3"
                    sx={{
                      color: "#C2C2C4",
                      lineHeight: 1.6,
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BlogDetailPage1;