import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const BlogPage = ({
  title,
  date,
  readTime,
  introText,
  tableOfContents = [],
  blogSections = [],
  blogImage,
  dateIcon,
}) => {
  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef([]);
  const {t} = useTranslation()

  const handleSectionClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const sectionTop = ref.offsetTop;
          const sectionBottom = sectionTop + ref.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index + 1);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <Typography variant="h2" className="headings-h2" sx={{ width: { xs: '100%', sm: '100%', md: '80%' }, color: "#fcfcfc", mt: 8, mb: 3 }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 3, mb: 3 }}>
        {/* <Typography className="bodyRegularText4" sx={{ color: "#C2C2C4" }}>
          {readTime}
        </Typography> */}
        <img src={dateIcon} alt="Date Icon" />
        <Typography className="bodyRegularText4" sx={{ color: "#C2C2C4" }}>
          {date}
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: "#525252", my: 3 }} />

      <Grid container spacing={6} sx={{ paddingTop: "2rem" }}>
        {/* Table of Contents */}
        <Grid item xs={12} md={3}>
          <Box sx={{ position: "sticky", top: 20 }}>
            <Typography variant="caption" className="bodyRegularText5" sx={{ color: "#C2C2C4", mb: 2 }}>
              {t('insights.tableContent')}
            </Typography>
            <List sx={{ p: 0 }}>
              {tableOfContents.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => handleSectionClick(item.id)}
                  className="tablecontentsection"
                  sx={{
                    borderTop: index === 0 ? "0.5px dashed #606060" : "none",
                    borderBottom: "0.5px dashed #606060",
                    height: 80,
                    px: 0,
                    py: 0,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Typography
                    className="bodyRegularText3"
                    sx={{
                      color: activeSection === item.id ? "#7FEE64" : "#FCFCFC",
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

        {/* Blog Content */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            marginLeft: "15rem",
            "@media (min-width: 2000px)": { marginLeft: "25rem" },
            "@media (max-width: 1400px)": { marginLeft: "10rem" },
            "@media (max-width: 900px)": { marginLeft: "0rem" },
          }}
        >
          {blogImage && (
            <img
              src={blogImage}
              alt="Blog"
              style={{
                width: "100%",
                maxHeight: "60vh",
                borderRadius: "24px",
                objectFit: "cover",
                marginBottom: "48px",
              }}
            />
          )}
          <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4", mb: 6, lineHeight: 1.6 }}>
            {introText}
          </Typography>

          <Stack spacing={6}>
            {blogSections.map((section, index) => (
              <Box
                key={section.id}
                id={`section-${section.id}`}
                ref={(el) => (sectionRefs.current[index] = el)}
              >
                <Typography className="bodyMediumText1" sx={{ color: "#FCFCFC", fontWeight: 500, mb: 1 }}>
                  {section.title}
                </Typography>
                <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4", lineHeight: 1.6 }}>
                  {section.content}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogPage;
