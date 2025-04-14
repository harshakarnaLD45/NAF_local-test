import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const GradientMaskText = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            setMaskPosition({ x, y });
        };

        const el = containerRef.current;
        if (el) el.addEventListener("mousemove", handleMouseMove);

        return () => {
            if (el) el.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                display: "inline-block",
                cursor: "none",
            }}
        >
            {/* Base Text */}
            <Typography data-cursor="hover"
                variant="h1"
                className="headings-h1 maintext"
                sx={{
                    color: "#FCFCFC",
                    position: "relative",
                    zIndex: 1,
                    width: { xs: "100%", sm: "70%", md: "70%" }
                }}
            >
                {t('Home.mainHeading')}
            </Typography>

            {/* Hover Reveal Text */}
            <Typography
                variant="h1"
                className="headings-h1 maintext"
                sx={{
                    color: "transparent",
                    background: "linear-gradient(to right, #7FEE64, #FA7854)",
                    WebkitBackgroundClip: "text",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    pointerEvents: "none",
                    width: { xs: "100%", sm: "70%", md: "70%" },
                    maskImage: `radial-gradient(circle 250px at ${maskPosition.x}px ${maskPosition.y}px, white 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 180px at ${maskPosition.x}px ${maskPosition.y}px, white 0%, transparent 100%)`,
                    transition: "mask-image 0.1s ease-out",
                }}
            >
                {t('Home.mainHeading')}
            </Typography>
        </div>
    );
};

export default GradientMaskText;
