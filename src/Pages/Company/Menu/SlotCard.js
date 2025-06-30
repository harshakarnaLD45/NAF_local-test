import { Box, Typography } from '@mui/material';
import React from 'react'
import TempImage from '../../../assets/About/TempProductImage.webp'
import TempImage1 from '../../../assets/About/ProductImage.webp'

const SlotCard = ({ slot, tags }) => {
    const { product } = slot;

    // Function to get the tag icon based on the label
    const getTagIcon = (tagLabel) => {
        const tag = tags.find(tag => tag.label.toLowerCase() === tagLabel.toLowerCase());
        return tag ? <tag.IconComponent width="20" height="20" /> : null;
    };

    return (
        <div>
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
                        src={product.productName ? (product.imageUrl ? product.imageUrl : TempImage1) : TempImage}
                        alt={product.productName}
                        style={{
                            width: "calc(100% - 10px)", // Subtract padding to fit the container with the gap
                            objectFit: "cover",
                            margin: "5px 5px 0px",
                            borderRadius: "8px", // Same as card's radius
                        }}
                        className='menu-image-sec'
                    />
                    {/* Tags: Icons at the bottom-right corner */}
                    {product?.tags && product?.tags?.length > 0 && (
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: "10px",
                                right: "10px",
                                display: "flex",
                                gap: "5px",
                            }}
                        >
                            {product?.tags.map((tag, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        backgroundColor: "#fff",
                                        borderRadius: "50%",
                                        padding: "5px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {getTagIcon(tag)}
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>

                {/* Slot Details */}
                <Box   sx={{ padding: "5px 10px" }}>
                    {/* Product Name */}
                    <Typography className="bodyMediumText1" sx={{
                        color: '#FCFCFC',
                        width: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'block',
                    }}>{product.productName || 'N/A'}</Typography>

                    {/* Price */}
                    <Box sx={{
                        display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", gap: "10px",
                        background: '#393939',
                        borderRadius: "6px",
                        mt: 2,
                    }}>
                        <Typography className="bodyRegularText3" sx={{ color: '#FCFCFC' }}>Price</Typography>
                        <Typography className="bodyMediumText1" style={{ margin: "0px", color: '#FCFCFC' }}>
                            {product.actualPrice === product.discountedPrice ? (
                                `€ ${product.actualPrice.toFixed(2)}`
                            ) : (
                                <>
                                    <s style={{ color: "#FCFCFC", marginRight: "8px", fontSize: "12px" }}>
                                        € {product.actualPrice.toFixed(2)}
                                    </s>
                                    € {product.discountedPrice.toFixed(2)}
                                </>
                            )}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default SlotCard