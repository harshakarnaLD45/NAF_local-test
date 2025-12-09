import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Button,
    Snackbar,
    Alert,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Profile = ({ data = {}, onUpdate }) => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({ ...data, mpin: "", confirmMpin: "" });
    const [saving, setSaving] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });
    const [expanded, setExpanded] = useState(false);
    const [showMpin, setShowMpin] = useState(false);
    const [showConfirmMpin, setShowConfirmMpin] = useState(false);

    useEffect(() => {
        setFormData({ ...data, mpin: "", confirmMpin: "" });
    }, [data, i18n.language]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "zipCode") newValue = value.replace(/[^0-9]/g, "");
        if (name === "mobileNumber") newValue = value.replace(/[^0-9+ ]/g, "");
        if (name === "mpin" || name === "confirmMpin") {
            // allow only digits and max length 6
            newValue = value.replace(/\D/g, "").slice(0, 6);
        }

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSave = async () => {
        if (!formData?.id) return;
        // MPIN validation
        if (formData.mpin || formData.confirmMpin) {
            if (formData.mpin.length !== 6) {
                setSnackbar({
                    open: true,
                    message: t("membership.msg_mpin_must_be_6_digits"),
                    severity: "error",
                });
                return;
            }

            if (formData.mpin !== formData.confirmMpin) {
                setSnackbar({
                    open: true,
                    message: t("membership.msg_mpin_not_match"),
                    severity: "error",
                });
                return;
            }
        }

        try {
            setSaving(true);
            const token = localStorage.getItem("authToken");

            const payload = { ...formData };
            if (!formData.mpin) delete payload.mpin;
            if (!formData.confirmMpin) delete payload.confirmMpin;

            await axios.put(
                `https://api.naf-cloudsystem.de/api/membership-cards/${formData.id}/basic-details`,
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setSnackbar({
                open: true,
                message: t("membership.msg_profile_updated_success"),
                severity: "success",
            });

            // update Dashboard data
            if (onUpdate) onUpdate(formData);
            // Clear password fields after save
            setFormData({ ...formData, mpin: "", confirmMpin: "" });
        } catch (error) {
            console.error("Error updating profile:", error);
            setSnackbar({
                open: true,
                message: t("membership.msg_profile_update_failed"),
                severity: "error",
            });
        } finally {
            setSaving(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    // ✅ Reusable style for all TextFields
    const outlinedFieldProps = {
        fullWidth: true,
        variant: "outlined",
        InputProps: {
            sx: {
                color: "#fff",
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#525252", // default border
                    borderRadius: 2,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#525252", // hover border
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#525252", // orange when focused
                },
            },
        },
    };

    if (!formData) return <Typography>{t("membership.msg_loading")}</Typography>;

    return (
        <Box sx={{ py: 3 }}>
            <Accordion
                expanded={expanded}
                onChange={() => setExpanded(!expanded)}
                sx={{
                    bgcolor: "#262626",
                    color: "#C2C2C4",
                    boxShadow: "none",
                    borderRadius: "12px !important",
                    py: 1.5,
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",  // 🔑 keep text left, icon right
                        alignItems: "center",
                        "& .MuiAccordionSummary-content": {
                            margin: 0, // remove default extra margin
                        },
                    }}
                >
                    <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4" }} >{t("membership.label_view_edit_profile")}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Grid container spacing={3}>
                        {/* First Name */}
                        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_first_name_profile")}</label>
                            <TextField
                                name="firstName"
                                value={formData.firstName || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* Last Name */}
                        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_last_name_profile")}</label>
                            <TextField
                                name="lastName"
                                value={formData.lastName || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_email_profile")}</label>
                            <TextField
                                name="email"
                                type="email"
                                value={formData.email || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* Phone */}
                        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_phone_profile")}</label>
                            <TextField
                                name="mobileNumber"
                                value={formData.mobileNumber || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* Address Line 1 */}
                        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_address_line1")}</label>
                            <TextField
                                name="addressLine1"
                                value={formData.addressLine1 || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* Address Line 2 */}
                        <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_address_line2")}</label>
                            <TextField
                                name="addressLine2"
                                value={formData.addressLine2 || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* City */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_city")}</label>
                            <TextField
                                name="city"
                                value={formData.city || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* State */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_state")}</label>
                            <TextField
                                name="state"
                                value={formData.state || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* Zip/Postal */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_zip_postal")}</label>
                            <TextField
                                name="zipCode"
                                value={formData.zipCode || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* MPIN Field */}
                        <Grid item xs={12} md={6}>
                            <label className="bodyRegularText4">
                                {t("membership.field_mpin")}
                            </label>
                            <TextField
                                name="mpin"
                                type={showMpin ? "text" : "password"}
                                value={formData.mpin || ""}
                                onChange={handleChange}
                                inputProps={{ maxLength: 6, inputMode: "numeric", pattern: "[0-9]*" }}
                                {...outlinedFieldProps}
                                InputProps={{
                                    ...outlinedFieldProps.InputProps,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowMpin(!showMpin)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showMpin ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        {/* Confirm MPIN Field */}
                        <Grid item xs={12} md={6}>
                            <label className="bodyRegularText4">
                                {t("membership.field_confirm_mpin")}
                            </label>
                            <TextField
                                name="confirmMpin"
                                type={showConfirmMpin ? "text" : "password"}
                                value={formData.confirmMpin || ""}
                                onChange={handleChange}
                                inputProps={{ maxLength: 6, inputMode: "numeric", pattern: "[0-9]*" }}
                                {...outlinedFieldProps}
                                InputProps={{
                                    ...outlinedFieldProps.InputProps,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowConfirmMpin(!showConfirmMpin)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showConfirmMpin ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Box mt={3} textAlign="center">
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            disabled={saving}
                            className="bodyRegularText4"
                            sx={{
                                color: '#1A1A1A',
                                bgcolor: "#F4F4F4",
                                "&:hover": { bgcolor: "#F4F4F4" },
                                px: 3,
                                py: 1.5,
                                borderRadius: "32px",
                                textTransform: 'none'
                            }}
                        >
                            {saving ? t("membership.btn_saving") : t("membership.btn_save")}
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Profile;
