import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import CardImage from '../../../assets/About/membership-card.svg'
import AnimateButton from "../../../Componenets/CommonComponents/AnimateButton";
import { useTranslation } from "react-i18next";

const Unlock = () => {
  const { t } = useTranslation();
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
             {t('menu.memberdhipTitle1')}<br />{t('menu.memberdhipTitle2')}
            </Typography>

            <Typography variant="body1" className="bodyRegularText3" sx={{ color: "#C2C2C4", mb: 5 }}>
            {t('menu.memberdhipSubTitle')}
            </Typography>

            <AnimateButton text1={t('menu.APPLY')} text2={t('menu.NOW')} />
          </Grid>

          {/* Right Card Image Side */}
          <Grid item xs={12} md={6} sx={{ position: "relative", textAlign: "center" }}>
            <Box
              component="img"
              src={CardImage}
              alt="NAF Membership Card - Enjoy Exclusive Benefits and Faster Checkout."
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
