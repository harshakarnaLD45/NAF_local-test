



import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import { motion } from "framer-motion";

const Ready = () => {
  const benefitItems = [
    { id: 1, text: "Increases Revenue", position: { top: 0, left: 162 } },
    { id: 2, text: "Reduce Costs", position: { top: 119, left: 324 } },
    { id: 3, text: "Save Time", position: { top: 119, left: 0 } },
    { id: 4, text: "Improve Efficiency", position: { top: 67, left: 0 } },
    { id: 5, text: "Scale Your Business", position: { top: 0, left: 190 } },
    { id: 6, text: "Enhance Decision-Making", position: { top: 67, left: 281 } },
  ];

  const containerRef = useRef(null);

  // Animation variants with bouncy effect
  const bounceVariants = {
    initial: {
      y: -1000, // Start well above the screen
      opacity: 0,
      scale: 0.5,
    },
    animate: (i) => ({
      y: 0, // Drop to final position
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200, // Controls bounce strength
        damping: 10,   // Controls bounce duration
        mass: 0.8,     // Controls weight feeling
        duration: 1.5,
        delay: i * 0.15, // Staggered entry
        bounce: 0.5,   
      },
    }),
  };

  return (
    <Box className="section-container">
      <Box
        sx={{
          width: "100%",
          maxWidth: 1820,
          height: 674,
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid",
          borderColor: "#525252",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          className="headings-h2"
          sx={{
            position: "absolute",
            width: "719px",
            maxWidth: 719,
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            mt: "119px",
          }}
        >
          Ready to See the NAF Cloud System in Action?
        </Typography>

        {/* Central Button */}
        <Box
          sx={{
            position: "absolute",
            width: 120,
            height: 120,
            top: 288,
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "120px",
            border: "1.5px solid #7fee64",
            color: "#fcfcfc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <AnimateButton />
        </Box>

       
        <Box
          ref={containerRef}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1561,
            height: 555,
            mt: "119px",
            mx: "auto",
          }}
        >
          {benefitItems.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                top: benefit.position.top + 236, 
                left: benefit.position.left + 500, 
                borderRadius: "250px",
                overflow: "hidden",
                border: "0.5px solid",
                borderColor: "#525252",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "grab",
             
              }}
              custom={index}
              variants={bounceVariants}
              initial="initial"
              animate="animate"
              whileDrag={{ cursor: "grabbing", scale: 1.05 }}
              
            >
              <Typography
                className="bodyRegularText4"
                sx={{
                  width: 95,
                  color: "#C2C2C4",
                  textAlign: "center",
                }}
              >
                {benefit.text}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Ready;

