// CatalogueDownloadSection.js
import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import catalogueImage from "../../assets/catalogue.png"; // replace with correct path
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import CATPDF from '../../assets/Machines/NAF Automaten Catalogue (210 x 297 mm).pdf'

const CatalogueDownloadSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box className='section-container'>
            <Box
                sx={{
                    backgroundColor: "#393939",
                    borderRadius: "24px",
                    padding: { xs: "30px 20px", md: "60px 60px" },
                    paddingBottom: '0px !important',
                    paddingTop: '0px !important',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "30px",
                }}
            >
                {/* Text */}
                <Box>
                    <Typography
                        variant="h3"
                        className="headings-h2"
                        sx={{
                            color: "#FCFCFC",
                        }}
                    >
                        Download Unser <br /> Katalog
                    </Typography>
                </Box>

                {/* Image */}
                {/* Image */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        mt: 10,
                        alignItems: "flex-end", // aligns image to bottom
                        alignSelf: "flex-end",  // aligns the entire Box itself to bottom of parent
                    }}
                >
                    <img
                        src={catalogueImage}
                        alt="Catalogue"
                        style={{
                            width: isMobile ? "180px" : "250px",
                            // height: isMobile ? "auto" : "400px", // fixed height for desktop
                            borderRadius: "16px",
                        }}
                    />
                </Box>

                {/* Download Button */}
                <Box>
                    <a
                        href={CATPDF}
                        download="NAF_Automaten_Katalog.pdf"
                        style={{ textDecoration: "none" }}
                    >
                        <AnimateButton text1='Demnächst' text2='verfügbar' />
                    </a>
                </Box>
            </Box>
        </Box>
    );
};

export default CatalogueDownloadSection;
