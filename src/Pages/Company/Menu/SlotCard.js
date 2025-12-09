import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import TempImage from '../../../assets/About/TempProductImage.webp';
import TempImage1 from '../../../assets/About/ProductImage.webp';

const SlotCard = ({ slot, tags = [] }) => {
    const product = slot?.product || {};

    // Pre-compute tag map for fast lookup
    const tagMap = useMemo(() => {
        const map = {};
        tags.forEach(t => {
            map[t.label.toLowerCase()] = t.IconComponent;
        });
        return map;
    }, [tags]);

    const getTagIcon = (label) => {
        const Icon = tagMap[label?.toLowerCase()];
        return Icon ? <Icon width="20" height="20" /> : null;
    };

    const imageSrc = product.imageUrl || TempImage1;

    return (
        <Box
            sx={{
                background: '#393939',
                borderRadius: "12px",
                padding: '5px',
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Product Image */}
            <Box sx={{ position: "relative" }}>
                <img
                    src={imageSrc}
                    alt={product.productName || 'Product'}
                    style={{
                        width: "calc(100% - 10px)",
                        objectFit: "cover",
                        margin: "5px 5px 0px",
                        borderRadius: "8px",
                    }}
                    className='menu-image-sec'
                />

                {/* Tags */}
                {product.tags?.length > 0 && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "10px",
                            right: "10px",
                            display: "flex",
                            gap: "5px",
                        }}
                    >
                        {product.tags.map((tagLabel, index) => (
                            <Box
                                key={`${tagLabel}-${index}`}
                                sx={{
                                    backgroundColor: "#fff",
                                    borderRadius: "50%",
                                    padding: "5px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {getTagIcon(tagLabel)}
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>

            {/* Slot Details */}
            <Box sx={{ padding: "5px 10px" }}>
                {/* Product Name */}
                <Typography
                    className="bodyMediumText1"
                    sx={{
                        color: '#FCFCFC',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {product.productName || 'N/A'}
                </Typography>

                {/* Price */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                        gap: "10px",
                        background: '#393939',
                        borderRadius: "6px",
                        mt: 2,
                    }}
                >
                    <Typography className="bodyRegularText3" sx={{ color: '#FCFCFC' }}>
                        Price
                    </Typography>

                    <Typography className="bodyMediumText1" sx={{ color: '#FCFCFC' }}>
                        {product.actualPrice === product.discountedPrice ? (
                            `€ ${product.actualPrice?.toFixed(2) || 0}`
                        ) : (
                            <>
                                <s style={{ marginRight: "8px", fontSize: "12px" }}>
                                    € {product.actualPrice?.toFixed(2) || 0}
                                </s>
                                € {product.discountedPrice?.toFixed(2) || 0}
                            </>
                        )}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SlotCard;
