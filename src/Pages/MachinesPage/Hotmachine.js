// hotmachineData1.js
import hotmachine from "../../assets/image 1.png";
import React from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";



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

const VendingSection = ({ data, imageOnRight }) => {
    const leftContent = (
      <Stack spacing={4}>
        <Box>
          <Typography
            variant="h2"
            className="maintenancehead"
            color="#FCFCFC"
            sx={{ fontSize: "67px", mb: 2 }}
          >
            {data.title}
          </Typography>
          <Typography
            className="maintenancebody"
            color="#C2C2C4"
            sx={{ fontSize: "22px" }}
          >
            {data.description}
          </Typography>
        </Box>
        <Stack spacing={2}>
          {data.specifications.map((item, index) => (
            <Paper
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
                className="maintenancebody"
                sx={{ fontSize: "17px" }}
              >
                {item.label}
              </Typography>
              <Box sx={{ width: "350px", textAlign: "right" }}>
                <Typography
                  className="labelvalue"
                  color={item.highlighted ? "#FA7854" : "#C2C2C4"}
                  sx={{
                    fontSize: "17px",
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
            className="pricetext"
            sx={{ fontSize: "12px" }}
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
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="outlined"
            sx={{
              width: "120px",
              height: "120px",
              borderRadius: "60px",
              mr: 2,
            }}
          />
          <Button
            variant="outlined"
            sx={{
              width: "120px",
              height: "120px",
              borderRadius: "60px",
              border: "1.5px solid #7fee64",
              color: "#fcfcfc",
              position: "relative",
              "&:hover": { border: "1.5px solid #7fee64" },
            }}
          >
            <Typography sx={{ position: "absolute", top: "44px", left: "24px" }}>
              {data.buttonText.primary}
            </Typography>
            <Typography sx={{ position: "absolute", top: "58px", left: "55px" }}>
              {data.buttonText.secondary}
            </Typography>
          </Button>
        </Box>
      </Box>
    );

    return (
      <Grid container spacing={4} sx={{ paddingX: '2rem', paddingY: '5rem' }}>
        <Grid item xs={12} md={6}>
          {imageOnRight ? leftContent : rightContent}
        </Grid>
        <Grid item xs={12} md={6}>
          {imageOnRight ? rightContent : leftContent}
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
            imageOnRight={index % 2 !== 0}
          />
        ))}
      </>
    );
}