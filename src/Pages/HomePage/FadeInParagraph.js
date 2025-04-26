import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import OdetteImg from '../../assets/Arrow 2.svg';
import AbdelilahImg from "../../assets/Arrow 2.svg";

gsap.registerPlugin(ScrollTrigger);

const paragraphText = [
    { text: "From Fine Dining to AI Gastronomy - NAF was founded by", highlight: false },
    { text: "Odette", highlight: true, person: "odette" },
    { text: "and", highlight: false },
    { text: "Abdelilah", highlight: true, person: "abdelilah" },
    { text: "Lamkhizni", highlight: true, person: "abdelilah" },
    {
        text: "- with the vision of creating real alternatives to traditional Gastronomy. With roots in fine dining and a passion for technology, we combine culinary delight with digitalization. Our AI systems are developed in-house by an international team of IT talents and Gastronomy professionals.",
        highlight: false,
    },
];

const FadeInParagraph = () => {
    const ref = useRef(null);
    const [hoveredPerson, setHoveredPerson] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const words = gsap.utils.toArray(".fade-word");

        gsap.fromTo(
            words,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.04,
                duration: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    once: true,
                },
            }
        );
    }, []);

    const handleMouseEnter = (person, event) => {
        const rect = event.target.getBoundingClientRect();
        setHoveredPerson(person);
        setHoverPosition({ x: rect.left + rect.width / 2, y: rect.bottom });
    };

    const handleMouseLeave = () => {
        setHoveredPerson(null);
    };

    const renderWords = () => {
        return paragraphText.flatMap((item, idx) =>
            item.text.split(" ").map((word, i) => {
                const key = `${idx}-${i}`;
                const isPerson = item.highlight && item.person;
                return (
                    <span
                        key={key}
                        className={`fade-word headings-h2 ${item.highlight ? "highlighted" : ""}`}
                        style={{
                            display: "inline-block",
                            whiteSpace: "pre",
                            color: item.highlight ? "#FA7854" : undefined,
                            textDecoration: item.highlight ? "underline" : "none",
                            fontWeight: item.highlight ? 600 : 400,
                            position: "relative",
                            cursor: isPerson ? "pointer" : "default",
                        }}
                        onMouseEnter={isPerson ? (e) => handleMouseEnter(item.person, e) : undefined}
                        onMouseLeave={isPerson ? handleMouseLeave : undefined}
                    >
                        {word + " "}
                    </span>
                );
            })
        );
    };

    const getImageForPerson = (person) => {
        switch (person) {
            case "odette":
                return OdetteImg;
            case "abdelilah":
                return AbdelilahImg;
            default:
                return null;
        }
    };

    return (
        <Box
            className="section-container"
            ref={ref}
            sx={{
                mt: { xs: 3, sm: 4, md: 5 },
                display: "flex",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <Box
                className="headings-h2"
                sx={{
                    width: { xs: "100%", sm: "100%", md: "1500px" },
                    color: "#C2C2C4",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                {renderWords()}

                {/* Hover Image */}
                {hoveredPerson && (
                    <Box
                        sx={{
                            position: "fixed",
                            top: hoverPosition.y + 10,
                            left: hoverPosition.x,
                            transform: "translateX(-50%)",
                            zIndex: 1000,
                            transition: "opacity 0.3s",
                            pointerEvents: "none",
                            opacity: hoveredPerson ? 1 : 0,
                            borderRadius: '12px',
                            background: '#FFF',
                            overflow: "hidden",
                            width: { xs: "120px", sm: "140px", md: "400px" },
                            height: { xs: "120px", sm: "140px", md: "400px" },
                        }}
                    >
                        {/* <img
                            src={getImageForPerson(hoveredPerson)}
                            alt={hoveredPerson}
                            style={{ width: "100%", display: "block" }}
                        /> */}
                    </Box>
                )}
            </Box>
        </Box >
    );
};

export default FadeInParagraph;
