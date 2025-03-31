import hotmachine from "../../assets/image 1.png";
import React from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import { DownloadIcon } from "../../Componenets/CustomIcons";

const hotmachineData1 = {
  title: "Hot Vending Machine",
  description: "Our high-capacity hot food vending machine offers a wide range of customizable food options, ensuring you can satisfy even the most discerning customers. Its innovative heating system maintains optimal food temperature and quality, while the user-friendly interface makes ordering simple and efficient.",
  image: {
    src: hotmachine,
    alt: "Hot Vending Machine"
  },
  specifications: [
    { label: "Weight", value: "650 Kg", highlighted: false },
    { label: "Temperature", value: "-18°C to +25°C", highlighted: false },
    { label: "Power", value: "1800 W and 2200 W", highlighted: false },
    {
      label: "Electricity",
      value: "H2280 with superstructure H1900 without superstructure B1880 D1020 with heating technology",
      highlighted: false
    },
    { label: "Franchise Cost", value: "500* € per month", highlighted: true },
    {
      label: "Acquisition costs",
      value: "16000* € (payment in installments possible)",
      highlighted: true
    }
  ],
  footnote: "*Prices announced after market launch based on the prototypes shown",
  buttonText: {
    primary: "LEARN",
    secondary: "MORE"
  }
};

const hotmachineData2 = {
  title: "Cold Vending Machine",
  description: "Our high-capacity hot food vending machine offers a wide range of customizable food options, ensuring you can satisfy even the most discerning customers. Its innovative heating system maintains optimal food temperature and quality, while the user-friendly interface makes ordering simple and efficient.",
  image: {
    src: hotmachine,
    alt: "Cold Vending Machine"
  },
  specifications: [
    { label: "Weight", value: "650 Kg", highlighted: false },
    { label: "Temperature", value: "-18°C to +25°C", highlighted: false },
    { label: "Power", value: "1800 W and 2200 W", highlighted: false },
    {
      label: "Electricity",
      value: "H2280 with superstructure H1900 without superstructure B1880 D1020 with heating technology",
      highlighted: false
    },
    { label: "Franchise Cost", value: "500* € per month", highlighted: true },
    {
      label: "Acquisition costs",
      value: "16000* € (payment in installments possible)",
      highlighted: true
    }
  ],
  footnote: "*Prices announced after market launch based on the prototypes shown",
  buttonText: {
    primary: "LEARN",
    secondary: "MORE"
  }
};

const hotmachineData3 = {
  title: "Cold Vending Machine",
  description: "Our high-capacity hot food vending machine offers a wide range of customizable food options, ensuring you can satisfy even the most discerning customers. Its innovative heating system maintains optimal food temperature and quality, while the user-friendly interface makes ordering simple and efficient.",
  image: {
    src: hotmachine,
    alt: "Cold Vending Machine"
  },
  specifications: [
    { label: "Weight", value: "650 Kg", highlighted: false },
    { label: "Temperature", value: "-18°C to +25°C", highlighted: false },
    { label: "Power", value: "1800 W and 2200 W", highlighted: false },
    {
      label: "Electricity",
      value: "H2280 with superstructure H1900 without superstructure B1880 D1020 with heating technology",
      highlighted: false
    },
    { label: "Franchise Cost", value: "500* € per month", highlighted: true },
    {
      label: "Acquisition costs",
      value: "16000* € (payment in installments possible)",
      highlighted: true
    }
  ],
  footnote: "*Prices announced after market launch based on the prototypes shown",
  buttonText: {
    primary: "LEARN",
    secondary: "MORE"
  }
};

const vendingData = [hotmachineData1, hotmachineData2, hotmachineData3,];

const VendingSection = ({ data, index }) => {
  const isMobile = window.innerWidth < 900;

  const leftContent = (
    <Stack spacing={4}>
      <Box>
        <Typography
          variant="h2"
          className="headings-h2"
          color="#FCFCFC"
          sx={{ mb: 2 }}
        >
          {data.title}
        </Typography>
        <Typography
          className="bodyRegularText3"
          color="#C2C2C4"
          sx={{}}
        >
          {data.description}
        </Typography>
      </Box>
      <Stack spacing={2}>
        {data.specifications.map((item, index) => (
          <Paper
            className="machinelabels"
            key={index}
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "24px 20px",
              borderRadius: "8px",
              border: "1px solid #525252",
              backgroundColor: item.highlighted ? "#262626" : "transparent",
            }}
          >
            <Typography
              color="#C2C2C4"
              className="bodyRegularText4"
            >
              {item.label}
            </Typography>
            <Box sx={{ width: "350px", textAlign: "right" }}>
              <Typography
                className="bodyRegularText4"
                color={item.highlighted ? "#FA7854" : "#C2C2C4"}
                sx={{
                  fontWeight: item.highlighted ? "500" : "400",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          </Paper>
        ))}
        <Typography
          align="right"
          color="#C2C2C4"
          className="bodyRegularText5"
        >
          {data.footnote}
        </Typography>
      </Stack>
    </Stack>
  );

  const rightContent = (
    <Box position="relative">
      <Box
        sx={{
          position: "relative",
          height: "630px",
          display: "flex",
          justifyContent: "center",

          '@media (max-width: 600px)': {
            height: "450px",
          },

          '@media (min-width: 600px) and (max-width: 900px)': {
            height: "550px",
          },

          '@media (min-width: 900px) and (max-width: 1200px)': {
            height: "650px",
          },
        }}
      >
        <Box
          component="img"
          src={data.image.src}
          alt={data.image.alt}
          sx={{
            width: "481px",
            height: "630px",
            objectFit: "cover",

            '@media (max-width: 600px)': {
              width: "281px",
              height: "400px",
            },

            '@media (min-width: 600px) and (max-width: 900px)': {
              width: "400px",
              height: "550px",
            },

            '@media (min-width: 900px) and (max-width: 1200px)': {
              width: "450px",
              height: "550px",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 6 }}>
        <button className="download-btn"><DownloadIcon /></button>
        <AnimateButton />
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}
      className="section-container"
      sx={{ paddingY: '5rem' }}
    >
      <Grid item xs={12} md={6} sx={{
        order: { xs: 1, md: index % 2 === 0 ? 1 : 2 } // Image always first in mobile
      }}>
        {!isMobile || index % 2 === 0 ? rightContent : leftContent}
      </Grid>
      <Grid item xs={12} md={6} sx={{
        order: { xs: 2, md: index % 2 === 0 ? 2 : 1 } // Text always second in mobile
      }}>
        {!isMobile || index % 2 === 0 ? leftContent : rightContent}
      </Grid>
    </Grid>
  );
};

export default function Hotmachine() {
  return (
    <>
      {vendingData.map((data, index) => (
        <VendingSection
          key={index}
          data={data}
          index={index}
        />
      ))}
    </>
  );
}