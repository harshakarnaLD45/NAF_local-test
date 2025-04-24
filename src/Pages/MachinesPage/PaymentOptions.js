import React from "react";
import { Box, Typography } from "@mui/material";
import { PaymentOptionsIcon1, PaymentOptionsIcon2, PaymentOptionsIcon3 } from "../../Componenets/CustomIcons";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";

const paymentOptions = [
    {
        title: "Leasing",
        description: "Lease a vending machine with low upfront cost. Pay monthly, then choose to buy, renew, or return at lease end.",
        points: [
            "Low upfront costs",
            "Predictable monthly payments",
            "Ability to upgrade equipment",
        ],
        icon: PaymentOptionsIcon1,
    },
    {
        title: "Rental Purchase",
        description: "Rent-to-own builds equity over time. Make regular payments, and own the vending machine at the end of the term.",
        points: [
            "Build equity over time",
            "Eventual ownership of the machine",
            "Flexible payment options",
        ],
        icon: PaymentOptionsIcon2,
    },
    {
        title: "Direct Purchase",
        description: "Buy the vending machine outright with a one-time payment and get full ownership and control from day one.",
        points: [
            "Full ownership from day one",
            "Immediate equity",
            "No ongoing payments",
        ],
        icon: PaymentOptionsIcon3,
    },
];

const PaymentOptions = () => {
    return (
        <Box className='section-container'>
            <Box sx={{ width: { xs: '100%', sm: '80%', md: '50%' }, mb: { xs: 2, sm: 2, md: 3 } }}>
                <div data-cursor="hover">
                    <Typography data-cursor="hover" variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
                        Flexible Payment Options for Your NAF Machines
                    </Typography>
                </div>
                <Box sx={{ mb: 3 }} data-cursor="hover">
                    <Typography data-cursor="hover" className='bodyRegularText3' sx={{ color: '#C2C2C4', py: '16px' }}>
                        Our financing models make it easy to enter automated catering. Whether leasing, hire purchase, or direct purchase, we show you the best options and calculate your amortization period. Save on personnel and operating costs from the first month.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: "center" }}>
                {paymentOptions.map((option, idx) => (
                    <Box key={idx}>
                        <Box
                            sx={{
                                border: '1px solid #525252',
                                borderRadius: 2,
                                px: { xs: 2, sm: 3, md: 4 },
                                py: { xs: 3, sm: 4, md: 5 },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: 'space-between',
                                alignItems: "flex-start",
                                minHeight: { xs: '400px', sm: '600px', md: "700px" },
                            }}
                        >
                            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                <option.icon className='paymenticons' />
                            </Box>

                            <Box>
                                <Typography variant="h4" color="#FCFCFC" className="headings-h4">
                                    {option.title}
                                </Typography>

                                <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4", my: 2 }}>
                                    {option.description}
                                </Typography>

                                <Box component="ul" sx={{ pl: 3, mb: 4, color: "#C2C2C4" }}>
                                    {option.points.map((point, i) => (
                                        <li key={i} style={{ marginBottom: "8px" }} className="bodyRegularText3">{point}</li>
                                    ))}
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                <AnimateButton text1="GET IN" text2="TOUCH" />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PaymentOptions;
