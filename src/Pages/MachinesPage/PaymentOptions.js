import React from "react";
import { Box, Typography } from "@mui/material";
import { PaymentOptionsIcon1, PaymentOptionsIcon2, PaymentOptionsIcon3 } from "../../Componenets/CustomIcons";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

const PaymentOptions = () => {
    const { t } = useTranslation();
    const { lang } = useParams(); 
    const paymentOptions = [
        {
            title: t('machines.LeasingTitle'),
            description: t('machines.Leasingtext'),
            points: [
                t('machines.Leasingpoints1'),
                t('machines.Leasingpoints2'),
                t('machines.Leasingpoints3'),
            ],
            icon: PaymentOptionsIcon1,
        },
        {
            title: t('machines.RentalPurchase'),
            description: t('machines.Rentaltext'),
            points: [
                t('machines.Rentalpoints1'),
                t('machines.Rentalpoints2'),
                t('machines.Rentalpoints3'),
            ],
            icon: PaymentOptionsIcon2,
        },
        {
            title: t('machines.DirectPurchaseTitle'),
            description: t('machines.DirectPurchaseSubTitle'),
            points: [
                t('machines.Directpoints1'),
                t('machines.Directpoints2'),
            ],
            icon: PaymentOptionsIcon3,
        },
    ];

    return (
        <Box className='section-container'>
            <Box sx={{ width: { xs: '100%', sm: '80%', md: '50%' }, mb: { xs: 2, sm: 2, md: 3 } }}>
                <div data-cursor="hover">
                    <Typography data-cursor="hover" variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
                        {t('machines.FlexiblePaymentTitle')}
                    </Typography>
                </div>
                <Box sx={{ mb: 3 }} data-cursor="hover">
                    <Typography data-cursor="hover" className='bodyRegularText3' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' } }}>
                        {t('machines.FlexiblePaymentsubTitle')}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: "center" }}>
                {paymentOptions.map((option, idx) => (
                    <Box key={idx}>
                        <Box
                            sx={{
                                border: '1px solid #525252',
                                // borderRadius: 2,
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
                                <AnimateButton text1={t('footer.footergetIn')} text2={t('footer.footertouch')} route={`/${lang}/contact`} />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PaymentOptions;
