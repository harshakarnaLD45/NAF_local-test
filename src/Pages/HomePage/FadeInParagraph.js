import { Box } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const paragraphText = `At NAF Germany, we're passionate about delivering innovative solutions that transform businesses. With years of experience in vending technology, software development. We combine cutting-edge technology with a user-centered approach to deliver exceptional results.`;

const FadeInParagraph = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <Box className='section-container'
            ref={ref}
            sx={{
                mt: { xs: 3, sm: 4, md: 5 },
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                className="headings-h2"
                sx={{
                    width: { xs: "100%", sm: "100%", md: "1445px" },
                    color: "#C2C2C4",
                    textAlign: "center",
                }}
            >
                {paragraphText.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { x: 50, opacity: 0 },
                            visible: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.3,
                                    delay: index * 0.04,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        style={{
                            display: "inline-block",
                        }}
                    >
                        {word + "\u00A0"}
                    </motion.span>
                ))}
            </Box>
        </Box>
    );
};

export default FadeInParagraph;
