import React from "react";
import { Box, Button } from "@mui/material";

const machineCategories = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Pizza Machine' },
    { id: 3, label: 'Fries Machine' },
    { id: 4, label: 'Soft Ice Cream Machine' },
    { id: 5, label: 'Cotton Candy Machine' },
    { id: 6, label: 'Beer Machine' },
    { id: 7, label: 'Return Machine' },
    { id: 8, label: 'Gourmet Machine' },
];

const MobileButtons = ({ selectedMachine, setSelectedMachine }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: "center",
                px: 2,
                py: 3,
            }}
        >
            {machineCategories.map(({ id, label }) => (
                <Button
                    key={id}
                    onClick={() => setSelectedMachine(label)}
                    className='bodyRegularText3'
                    sx={{
                        borderRadius: "100px",
                        textTransform: "none",
                        padding: "8px 18px",
                        backgroundColor:
                            selectedMachine === label ? "#7FEE64" : "transparent",
                        color: selectedMachine === label ? "#1A1A1A" : "#FCFCFC",
                        border:
                            selectedMachine === label ? "none" : "1px solid #F4F4F4",
                        cursor: 'pointer'
                    }}
                >
                    {label}
                </Button>
            ))}
            <Box sx={{ width: '100%', borderBottom: '1px solid #525252' }}></Box>
        </Box >
    );
};

export default MobileButtons;
