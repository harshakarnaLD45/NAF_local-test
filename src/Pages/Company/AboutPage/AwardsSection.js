import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import React from "react";
import { useTranslation } from "react-i18next";
import Award1 from '../../../assets/About/Awards/Award1.png';
import Award2 from '../../../assets/About/Awards/Award2.png';
import Award3 from '../../../assets/About/Awards/Award3.png';
import Award4 from '../../../assets/About/Awards/Award4.png';
import Award5 from '../../../assets/About/Awards/Award5.png';
import Award6 from '../../../assets/About/Awards/Award6.png';
import Award7 from '../../../assets/About/Awards/Award7.png';
import Award8 from '../../../assets/About/Awards/Award8.png';
import ArrowButton from "../../../Componenets/CommonComponents/ArrowButton";

// const AwardCard = ({ index, title, image, link }) => {
//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: { xs: '300px', sm: '350px', md: '550px' },
//                 paddingLeft: index === 0 ? { xs: '15px', sm: '20px', md: '40px' } : 0,
//             }}
//         >
//             {/* Image section */}
//             <Box
//                 component="img"
//                 src={image}
//                 alt={title}
//                 sx={{
//                     width: { xs: '300px', sm: '350px', md: '550px' },
//                     height: { xs: '200px', sm: '250px', md: '400px' },
//                     objectFit: 'cover',
//                     borderRadius: 2,
//                     mb: 1,
//                 }}
//             />
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
//                 {/* Title */}
//                 <Typography
//                     variant="body2"
//                     color="#FCFCFC"
//                     className="bodyMediumText1"
//                 >
//                     {title}
//                 </Typography>

//                 {/* Conditionally render arrow button if there's a link */}
//                 {link && (
//                     <Box onClick={() => window.open(link, "_blank")}>
//                         <ArrowButton colorBg='#262626' />
//                     </Box>
//                 )}
//             </Box>
//         </Box>
//     );
// };

const AwardCard = ({ index, title, image, link }) => {
    const isYouTube = link && link.includes('youtube.com');

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: '300px', sm: '350px', md: '550px' },
                paddingLeft: index === 0 ? { xs: '15px', sm: '20px', md: '40px' } : 0,
            }}
        >
            {/* Conditional rendering for YouTube or Image */}
            {isYouTube ? (
                <Box
                    sx={{
                        width: { xs: '300px', sm: '350px', md: '550px' },
                        height: { xs: '200px', sm: '250px', md: '400px' },
                        mb: 1,
                        borderRadius: 2,
                        overflow: 'hidden'
                    }}
                >
                    <iframe
                        width="100%"
                        height="100%"
                        src={link.replace('watch?v=', 'embed/')}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            ) : (
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                        width: { xs: '300px', sm: '350px', md: '550px' },
                        height: { xs: '200px', sm: '250px', md: '400px' },
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 1,
                    }}
                />
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
                <Typography
                    variant="body2"
                    color="#FCFCFC"
                    className="bodyMediumText1"
                >
                    {title}
                </Typography>

                {/* Show Arrow button for non-YouTube links */}
                {link && !isYouTube && (
                    <Box onClick={() => window.open(link, "_blank")}>
                        <ArrowButton colorBg='#262626' />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

const AwardsSection = () => {
    const { t } = useTranslation();

    const awardsData = [
        { title: t('about.awards.award1.title'), image: Award1 },
        { title: t('about.awards.award2.title'), link: 'https://www.freiepresse.de/mittelsachsen/freiberg/frischer-otto-macht-appetit-neuer-speiseautomat-in-freiberg-nimmt-seinen-dienst-auf-artikel13635242?ref=share_link', image: Award2 },
        { title: t('about.awards.award3.title'), link: 'https://www.freiepresse.de/mittelsachsen/freiberg/kulinarischer-test-in-freiberg-wie-schmeckt-das-essen-aus-den-automaten-von-new-age-of-food-artikel13571672?ref=share_link', image: Award3 },
        { title: t('about.awards.award4.title'), link: 'https://www.freiepresse.de/mittelsachsen/freiberg/mittagessen-ganz-modern-unternehmerzentrum-gizef-in-freiberg-stellt-auf-automaten-um-artikel13450282?ref=share_link', image: Award4 },
        { title: t('about.awards.award5.title'), link: 'https://www.freiepresse.de/mittelsachsen/freiberg/innovationen-im-gasthof-halsbach-warum-ein-indischer-computerspezialist-in-marrokanisch-deutscher-kueche-mitmischt-artikel13347381?ref=share_link', image: Award5 },
        { title: t('about.awards.award6.title'), link: 'https://nafhalsbach-my.sharepoint.com/:b:/g/personal/anitha_boppidi_naf-halsbach_de/Efb0SYHLKVNIoy-8T7ovpnEBDRTwsnKsZCfWX8uOLteeEg?e=RjPRXN', image: Award6 },
        { title: t('about.awards.award7.title'), link: 'https://www.freiepresse.de/mittelsachsen/freiberg/new-age-of-food-freiberg-zeigt-wie-modern-speiseautomaten-sein-koennen-artikel13201205?ref=share_link', image: Award7 },
        { title: t('about.awards.award8.title'), link: 'https://www.youtube.com/watch?v=TtR2bxr-sbw', image: Award8 },
    ];

    return (
        <Box className="section-container" sx={{ px: 0 }}>
            <Typography
                variant="h2"
                color="#FCFCFC"
                className="headings-h2"
                sx={{ width: { xs: '90%', sm: '90%', md: '50%' }, px: { xs: '15px', sm: '20px', md: '50px' } }}
                mb={4}
            >
                {t('about.AwardsRecognitions')}
            </Typography>

            <Box sx={{ overflow: "hidden", position: "relative" }}>
                <Swiper
                    modules={[FreeMode]}
                    spaceBetween={24}
                    slidesPerView="auto"
                    freeMode={true}
                    style={{ padding: '0 16px' }}
                >
                    {awardsData.map((award, index) => (
                        <SwiperSlide key={index} style={{ width: "auto" }}>
                            <AwardCard
                                index={index}
                                title={award.title}
                                image={award.image}
                                link={award.link}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default AwardsSection;
