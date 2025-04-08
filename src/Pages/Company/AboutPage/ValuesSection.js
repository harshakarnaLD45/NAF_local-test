import { Box, Card, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { ValuesIcon1, ValuesIcon2, ValuesIcon3, ValuesIcon4 } from "../../../Componenets/CustomIcons";

const maintenanceServices = [
    {
        valueIcon: <ValuesIcon1 />,
        title: "Innovation",
        desc: "We innovate to create cutting-edge solutions for your business needs.",
        rotation: -10.54,
        position: { top: "5%", left: "-15%" },
    },
    {
        valueIcon: <ValuesIcon2 />,
        title: "Quality",
        desc: "We deliver high-quality, reliable services built for lasting success.",
        rotation: 15,
        position: { top: "15%", left: "10%" },
    },
    {
        valueIcon: <ValuesIcon3 />,
        title: "Reliability",
        desc: "We ensure dependable solutions with maximum operational efficiency.",
        rotation: -22.85,
        position: { top: "15%", left: "40%" },
    },
    {
        valueIcon: <ValuesIcon4 />,
        title: "Customer Satisfaction",
        desc: "We prioritize customer needs, exceeding expectations with every interaction.",
        rotation: 18.33,
        position: { top: "20%", left: "65%" },
    },
];

const ValuesSection = () => {
    const sectionRef = useRef(null);

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false); // New state to track animation status

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    setIsCollapsed(true); // Trigger animation only once
                    setHasAnimated(true); // Prevent further animations
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]); // Dependency on `hasAnimated`

    return (
        <Box
            className="section-container"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                // marginBottom: { xs: "10rem", md: "18rem" },
                transition: "all 0.5s ease",
            }}
        >
            <Box
                className="maintenance-containers1"
                sx={{
                    position: "relative",
                    width: "100%",
                    // maxWidth: { xs: "100%", md: "1639px" },
                    height: { md: "605px" },
                    mt: { xs: -1, md: -3 },
                }}
            >
                <Typography
                    variant="h2"
                    className="headings-h2"
                    sx={{
                        color: "#FCFCFC",
                        textAlign: "center",
                    }}
                >
                    Our Values
                </Typography>

                <Typography
                    variant="body1"
                    className="bodyRegularText3"
                    sx={{
                        color: "#C2C2C4",
                        textAlign: "center",
                    }}
                >
                    The core principles that drive our business forward
                </Typography>

                <Box
                    ref={sectionRef}
                    sx={{
                        position: "absolute",
                        width: "100%",
                        maxWidth: { xs: "100%", md: isCollapsed ? "auto" : "1200px" },
                        top: { xs: "100px", sm: "150px", md: isCollapsed ? "200px" : "100px" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: { xs: 2, md: 1 },
                        transition: "all 0.5s ease",
                    }}
                >
                    {maintenanceServices.map((service, index) => (
                        <Card
                            key={index}
                            sx={{
                                position: { xs: "relative", md: isCollapsed ? "relative" : "absolute" },
                                width: {
                                    xs: isCollapsed ? "95%" : "440px",
                                    sm: isCollapsed ? "48%" : "440px",
                                    md: isCollapsed ? "24%" : "440px",
                                },
                                // maxWidth: { xs: "350px", md: "440px" },
                                height: { xs: "300px", sm: "350px", md: "426px" },
                                top: { xs: "auto", md: isCollapsed ? "auto" : service.position.top },
                                left: { xs: "auto", md: isCollapsed ? "auto" : service.position.left },
                                transform: {
                                    xs: "rotate(0deg)",
                                    md: isCollapsed ? "rotate(0deg)" : `rotate(${service.rotation}deg)`,
                                },
                                bgcolor: "#161616",
                                borderRadius: "24px",
                                overflow: "hidden",
                                border: "1px solid #525252",
                                transition: "all 0.5s ease",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                zIndex: 1,
                                marginBottom: { xs: "1rem", md: "0" },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 16,
                                    left: 16,
                                    padding: "8px",
                                }}
                            >
                                {service.valueIcon}
                            </Box>

                            <Box
                                sx={{
                                    position: "absolute",
                                    padding: "32px 24px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    className="bodyRegularText2"
                                    sx={{ color: "#FCFCFC" }}
                                >
                                    {service.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="bodyRegularText3"
                                    sx={{ color: "#C2C2C4" }}
                                >
                                    {service.desc}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ValuesSection;