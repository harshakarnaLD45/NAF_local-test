import { Box, Button, Container, Divider } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Filtermachines = () => {
  const categories = [
    { id: "all", label: "All", default: true, finalPosition: { top: 48, left: "50%", ml: -8, rotate: 0 } },
    { id: "hot", label: "Hot Machine", finalPosition: { top: 87, left: "40%", rotate: -18.97 } },
    { id: "cold", label: "Cold Machine", finalPosition: { top: 114, left: "53%", rotate: 0 } },
    { id: "iceCream", label: "Ice Cream Machine", finalPosition: { top: 97, left: "60%", rotate: 49.65 } },
    { id: "snack", label: "Snack Machine", finalPosition: { top: 180, left: "40%", rotate: 0 } },
    { id: "pizza", label: "Pizza Machine", finalPosition: { top: 180, left: "56%", rotate: 0 } },
    { id: "cottonCandy", label: "Cotton Candy Machine", finalPosition: { top: 180, left: "75%", rotate: 0 } },
  ];

  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
  };

  const buttonVariants = {
    initial: {
      y: "-100vh",
      opacity: 0,
    },
    animate: (custom) => ({
      y: custom.top, // Drop to final top position
      x: custom.left, // Move to final left position
      rotate: custom.rotate,
      opacity: 1,
      transition: {
        duration: 1.2, // Slightly longer duration for a smoother fall
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for a natural drop
        delay: custom.delay, // Staggered drop effect
        type: "spring", // Spring physics for a bouncy landing
        stiffness: 80, // Moderate stiffness for bounce
        damping: 15, // Controls the bounce decay
      },
    }),
  };

  return (
    <Container
      maxWidth={false}
      sx={{ position: "relative", height: 259, mb: 2, overflow: "hidden", marginTop: '4rem', }}
    >
      <Box sx={{ position: "relative", height: "100%" }}>
        {categories.map((category, index) => (
          <Box
            key={category.id}
            component={motion.div}
            custom={{
              top: category.finalPosition.top,
              left: category.finalPosition.left,
              rotate: category.finalPosition.rotate || 0,
              delay: index * 0.15, // Slightly increased delay for more noticeable stagger
            }}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            drag // Enable dragging
            dragMomentum={false} // Stop immediately after drag
            sx={{
              position: "absolute",
              ...(category.finalPosition.ml && { ml: category.finalPosition.ml }),
            }}
          >
            <Button
              variant={selectedFilter === category.id ? "contained" : "outlined"}
              onClick={() => handleFilterClick(category.id)}
              className="machinebuttons bodyRegularText3"
              sx={{
                borderRadius: "100px",
                fontSize: "22px",
                px: 3,
                py: 1,
                backgroundColor:
                  selectedFilter === category.id ? "#7FEE64" : "transparent",
                color: selectedFilter === category.id ? "#1A1A1A" : "#FCFCFC",
                borderColor: "#F4F4F4",
                "&:hover": {
                  backgroundColor:
                    selectedFilter === category.id
                      ? "#6cdc53"
                      : "rgba(244, 244, 244, 0.1)",
                  borderColor: "#ffffff",
                },
              }}
            >
              {category.label}
            </Button>
          </Box>
        ))}

        <Divider
          sx={{
            position: "absolute",
            bottom: 12,
            width: "100%",
            color: "#C6C6C6",
            border: "1px solid #C6C6C6",
          }}
        />
      </Box>
    </Container>
  );
};

export default Filtermachines;




