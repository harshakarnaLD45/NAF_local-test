import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Membership.css';

const Balance = ({ balance = 0, token, onBalanceUpdate, cardNumber }) => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState("");

    // Snackbar state
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // "success" or "error"

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setAmount("");
        setOpen(false);
    };

    const handleSnackbarClose = () => setSnackbarOpen(false);

    const handleTopUp = async () => {
        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount) || numericAmount <= 0) {
            setSnackbarMessage(t("membership.msg_enter_valid_amount"));
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            return;
        }

        try {
            const res = await axios.post(
                "https://api.naf-cloudsystem.de/api/membership-cards/create-link",
                {}, // empty body
                {
                    headers: { Authorization: `Bearer ${token}` },
                    params: { currency: "eur", amount: numericAmount, cardNumber: cardNumber, successUrl: "https://vendinaf.com/de/dashboard?status=success", cancelUrl: "https://vendinaf.com/de/dashboard?status=cancel" },
                }
            );

            const paymentLink = res.data || "";
            if (paymentLink) {
                setSnackbarMessage(t("membership.msg_redirecting_payment"));
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
                window.location.href = paymentLink;
            } else {
                setSnackbarMessage(t("membership.msg_payment_link_not_found"));
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                console.error("Payment link not found in API response", res.data);
            }
        } catch (error) {
            setSnackbarMessage(t("membership.msg_failed_payment_link"));
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            console.error("Failed to create payment link:", error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const status = params.get("status");

        if (status === "success") {
            if (onBalanceUpdate) onBalanceUpdate();
        } else if (status === "cancel") {
            setSnackbarMessage(t("membership.msg_payment_canceled"));
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }
    }, [navigate, onBalanceUpdate, i18n.language]);

    return (
        <Box className="Balance-container"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#262626",
                borderRadius: "12px",
                p: 2,
                mb: 3,
            }}
        >
            <Typography sx={{ color: "#C2C2C4" }} className="bodyRegularText3">{t("membership.label_available_balance")}</Typography>

            <Box className="add-btn-section" sx={{ display: "flex", alignItems: "center", gap: 2, }}>
                <Button
                    variant="contained"
                    onClick={handleOpen}
                    sx={{
                        padding: "8px 16px",
                        borderRadius: "100px",
                        bgcolor: "#F4F4F4",
                        "&:hover": { bgcolor: "#F4F4F4" },
                        color: '#262626',
                        textTransform: 'none'
                    }}
                    className="bodyRegularText5"
                >
                    {t("membership.btn_add_balance")}
                </Button>
                <Typography sx={{ color: "#7FEE64" }} className="bodyMediumText1">
                    € {balance ? parseFloat(balance).toFixed(2) : '0.00'}
                </Typography>
            </Box>

            {/* Dialog Popup */}
            <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
                <DialogTitle className="bodyMediumText3">{t("membership.dialog_top_up_balance")}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label={t("membership.field_amount_euro")}
                        type="number"
                        fullWidth
                        value={amount}
                        inputProps={{ min: 1 }}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 1 || e.target.value === "") {
                                setAmount(e.target.value);
                            }
                        }}
                        className="bodyRegularText4"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t("membership.btn_cancel")}</Button>
                    <Button onClick={handleTopUp} variant="contained" color="primary">
                        {t("membership.btn_top_up")}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar for messages */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Balance;
