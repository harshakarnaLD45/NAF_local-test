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

  
  const bounceVariants = {
    initial: {
      y: -1000,
      opacity: 0,
    //   scale: 0.5,
    },
    animate: (i) => ({
      y: 0, 
      opacity: 1,
    //   scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,   
        mass: 0.8,     
        duration: 1.5,
        delay: i * 0.15, 
        bounce: 0.5,   
      },
    }),
  };

  return (
    <Box 
    // className="section-container"
    sx={{
        marginTop:'200px',
        marginBottom:"3vw"
    }}
    >
      <Box 
        sx={{
        //   width: "100%",
          height: { xs: "auto", md: 674 }, 
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid",
          borderColor: "#525252",
          position: "relative",
          px: { xs: 2, md: 0 }, 
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h2"
          className="headings-h2"
          sx={{
            position: "absolute",
            width: { xs: "90%", md: "719px" }, 
            top: { xs: "20%", md: 0 }, 
            left: "50%",
            transform: "translateX(-50%)",
            mt: { xs: 0, md: "119px" },
            
            textAlign: "center",
          }}
        >
          Ready to See the NAF Cloud System in Action?
        </Typography>

        {/* Central Button */}
        <Box
        className="centralButton"
          sx={{
            position: "absolute",
            width: { xs: "80px", md: "120px" },
            height: { xs: "80px", md: "120px" }, 
            top: { xs: "40%", md: "288px" }, 
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
           
            color: "#fcfcfc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
              <AnimateButton text1='GET IN' text2='TOUCH' />
        </Box>

      
        <Box
          ref={containerRef}
          sx={{
            position: "relative",
            width: "100%",
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
              className="benefitBall"
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



