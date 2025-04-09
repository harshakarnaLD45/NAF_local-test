import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import CardImage from '../../../assets/About/card.svg'
import AnimateButton from "../../../Componenets/CommonComponents/AnimateButton";

const Unlock = () => {
  return (
    <Box className='section-container'>
      <Box
        sx={{
          borderRadius: '24px',
          border: '1px solid #525252',
          p: { xs: 2, sm: 3, md: 8 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Text Side */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              className="headings-h3"
              sx={{ mb: 3 }}
            >
              Unlock Exclusive Benefits<br />with a NAF Membership Card!
            </Typography>

            <Typography variant="body1" className="bodyRegularText3" sx={{ color: "#C2C2C4", mb: 5 }}>
              Enjoy faster checkout, exclusive discounts, and convenient access to your favorite vending machines
            </Typography>

            <AnimateButton text1="APPLY" text2="NOW" />
          </Grid>

          {/* Right Card Image Side */}
          <Grid item xs={12} md={6} sx={{ position: "relative", textAlign: "center" }}>
            <Box
              component="img"
              src={CardImage}
              alt="Membership Card"
              sx={{
                width: "100%",
                maxWidth: 577,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Unlock;
