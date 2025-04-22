import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    Button,
    Typography,
    IconButton,
    Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const DietaryModal = ({ open, onClose, selected = [], onApply, tags }) => {
    const { t } = useTranslation();
    const [localSelected, setLocalSelected] = useState(selected || []);

    const toggleTag = (label) => {
        setLocalSelected((prev) =>
            prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
        );
    };

    const resetTags = () => setLocalSelected([]);

    const handleApply = () => {
        onApply(localSelected);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs" PaperProps={{ sx: { backgroundColor: "#1C1C1C", borderRadius: 3 } }}>
            <DialogTitle sx={{ color: "white", display: "flex", justifyContent: "space-between" }}>
            <Typography className="bodyMediumText2" color="#FCFCFC"> {t('menu.FoodPreferences')}</Typography>
            <IconButton onClick={onClose} sx={{ color: "#FCFCFC" }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Grid container spacing={2} justifyContent="center">
                    {tags.map((tag) => {
                        const isSelected = localSelected.includes(tag.label);
                        return (
                            <Grid item xs={5} key={tag.label} sx={{ my: 2 }}>
                                <Box
                                    onClick={() => toggleTag(tag.label)}
                                    sx={{
                                        backgroundColor: isSelected ? "#FCFCFC" : "#1A1A1A",
                                        borderRadius: "50%",
                                        width: 80,
                                        height: 80,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto",
                                        position: "relative",
                                        cursor: "pointer",
                                    }}
                                >
                                    <tag.IconComponent width="31" height="35" color={isSelected ? "#1A1A1A" : "#FCFCFC"} />

                                    {/* Slash overlay for certain tags when NOT selected */}
                                    {["Fish-Free", "Gluten-Free", "Lactose-Free"].includes(tag.label) && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                pointerEvents: "none", // allow clicks to go through
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: "110%", // slightly more than the circle diameter
                                                    height: "1px",
                                                    backgroundColor: "#616161",
                                                    transform: "rotate(125deg)",
                                                }}
                                            />
                                        </Box>
                                    )}
                                </Box>
                                <Typography className="bodyRegularText5" align="center" mt={1} sx={{ color: "#FCFCFC" }}>
                                    {tag.label}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button onClick={resetTags} variant="contained" className="bodyRegularText5" sx={{
                    backgroundColor: "#FCFCFC", textTransform: 'none', color: "#1A1A1A", borderRadius: "24px", px: 4, py: 2
                }}>
                    Reset
                </Button>
                <Button onClick={handleApply} variant="contained" className="bodyRegularText5" sx={{
                    backgroundColor: "#7FEE64", textTransform: 'none', color: "#1A1A1A", borderRadius: "24px", px: 4, py: 2
                }}>
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DietaryModal;
