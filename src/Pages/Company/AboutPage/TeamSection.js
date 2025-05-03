import React from "react";
import { LinkedInIcon } from "../../../Componenets/CustomIcons";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PersonImage1 from '../../../assets/About/Person1.png';
import PersonImage2 from '../../../assets/About/Person2.png';
import PersonImage3 from '../../../assets/About/Person3.png';

function TeamSection() {
    const { t } = useTranslation();

    const teamMembers = [
        {
            name: 'Odette Lamkhizni',
            position: 'CEO',
            color: "#E7F9DC",
            linkedin: "https://www.linkedin.com/in/odette-lamkhizni-42a241251/",
            image: PersonImage1,
        },
        {
            name: 'Abdelilah Lamkhizni',
            position: 'Managing Director',
            color: "#FEB6A2",
            linkedin: "https://www.linkedin.com/in/abdelilah-lamkhizni-110864291",
            image: PersonImage2,
        },
        {
            name: 'Sri Satya Sai Kanna Dhulipudi',
            position: 'CTO',
            color: "#94CDFF",
            linkedin: "https://www.linkedin.com/in/sri-satya-sai-kanna-dhulipudi-31676617b/",
            image: PersonImage3,
        },
    ];

    return (
        <section className="section-container">
            <Typography className="headings-h2" variant="h2" gutterBottom>
                {t('about.MeetTeam')}
            </Typography>

            {/* Responsive Grid Layout */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',       // < 600px
                        sm: '1fr 1fr',   // 600px - 899px
                        md: '1fr 1fr 1fr'// ≥ 900px
                    },
                    gap: { xs: 5, md: 2 },
                    justifyItems: 'center',
                }}
            >
                {teamMembers.map((member, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: { xs: '100%', sm: '100%', md: '100%' },
                            // maxWidth: 350,
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={member.image}
                            alt={member.name}
                            sx={{
                                width: '100%',
                                // height: { xs: 220, sm: 250, md: 300 },
                                objectFit: 'cover',
                                borderRadius: 2,
                                mb: 2,
                            }}
                        />

                        {/* Info */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mr: 2 }}>
                            <Box>
                                <Typography
                                    variant="body1"
                                    color="#FCFCFC"
                                    className="bodyMediumText1"
                                >
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="#C2C2C4"
                                    className="bodyMediumText3"
                                >
                                    {member.position}
                                </Typography>
                            </Box>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </a>
                        </Box>
                    </Box>
                ))}
            </Box>
        </section>
    );
}

export default TeamSection;
