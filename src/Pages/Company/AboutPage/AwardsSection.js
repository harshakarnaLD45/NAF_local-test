import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const AwardsSection = () => {
    const { t } = useTranslation();

    // Award data for mapping
    const awardsData = [
        { year: 2023, title: t('about.award1') },
        { year: 2024, title: t('about.award1') },
    ];

    return (
        <Box className="section-container">
            {/* Title Section */}
            <Typography
                variant="h2"
                color="#fcfcfc"
                className="headings-h2"
                sx={{ mb: { xs: 3, sm: 5, md: 8 } }}
            >
                {t('about.AwardsRecognitions')}
            </Typography>

            {/* Awards Grid */}
            <Grid container spacing={2}>
                {awardsData.map((award, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        {/* Award Card */}
                        <Paper
                            elevation={0}
                            sx={{
                                bgcolor: "#393939",
                                borderRadius: { xs: '16px', sm: '16px', md: "24px" },
                                height: { xs: '300px', sm: '400px', md: '530px' },
                                mb: 2,
                            }}
                        />

                        {/* Award Details */}
                        <Box sx={{ mt: 1.5 }}>
                            <Typography color="#fcfcfc" variant="body1"
                                className="bodyRegularText3"
                            >
                                {award.year}
                            </Typography>
                            <Typography
                                className="headings-h4 "
                                color="#fcfcfc"
                                variant="h4"
                                sx={{ mt: 1 }}
                            >
                                {award.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AwardsSection;