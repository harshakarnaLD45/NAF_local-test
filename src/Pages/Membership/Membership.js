import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    CircularProgress,
    
    Typography,
    Checkbox,
    FormControlLabel,
    Link, Snackbar, Alert
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import CustomTextField from "../MachinesPage/MantaincePage/CustomTextField";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import './Membership.css';
import Image1 from '../../assets/NAF_lobby.webp';

function Membership() {
    const { t, i18n } = useTranslation();
    const [step, setStep] = useState(1); // 1 = email, 2 = mpin, 3 = signup
    const [email, setEmail] = useState("");
    const [mpin, setMpin] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+49"); // default Germany
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success", // "success" | "error" | "warning" | "info"
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const { lang } = useParams();
    const navigate = useNavigate();

    // -----------------------------
    // Force re-render when language changes
    // -----------------------------
    useEffect(() => {
    }, [i18n.language]);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const email = localStorage.getItem("authEmail");

        if (token && email) {
            axios.get("https://api.naf-cloudsystem.de/api/membership-cards/details", {
                headers: { Authorization: `Bearer ${token}` },
                params: { email }
            })
                .then(() => {
                    navigate(`/${lang}/dashboard`, { replace: true });
                })
                .catch(() => {
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("authEmail");
                    navigate(`/${lang}/membership`, { replace: true });
                });
        }
    }, [navigate, lang]);

    // Validation helpers
    const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isValidPhone = (val) => /^[0-9]{7,15}$/.test(val);

    // Step 1: Check email
    const handleCheckEmail = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setMessage(t("membership.msg_enter_valid_email"));
            return;
        }
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.get(
                `https://api.naf-cloudsystem.de/api/check-mail?email=${encodeURIComponent(
                    email
                )}`
            );

            if (response.data.emailExists) {
                setStep(2);
                setMessage(t("membership.msg_email_verified"));
            } else {
                setStep(3);
                setMessage(t("membership.msg_email_not_found"));
            }
        } catch (error) {
            setMessage(t("membership.msg_error_checking_email"));
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Authenticate with MPIN
    const handleAuthenticate = async (e) => {
        e.preventDefault();
        if (mpin.length !== 6) {
            setMessage(t("membership.msg_mpin_six_digits"));
            return;
        }
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/membership/authenticate",
                null,
                { params: { email, mpin } }
            );

            if (response.data.refreshToken) {
                // localStorage.setItem("authToken", response.data.refreshToken);
                // localStorage.setItem("authEmail", email);
                // setMessage(t("membership.msg_login_successful"));
                // navigate(`/${lang}/dashboard`, { replace: true });
                localStorage.setItem("authToken", response.data.refreshToken);
                localStorage.setItem("authEmail", email);
                setMessage(t("membership.msg_login_successful"));
                const queryParams = new URLSearchParams(window.location.search);
                const redirect = queryParams.get("redirect");
                if (redirect) {
                    const separator = redirect.includes("?") ? "&" : "?";
                    navigate(`/${lang}${redirect}${separator}skipMpin=true`, { replace: true });
                } else {
                    navigate(`/${lang}/dashboard`, { replace: true });
                }
            } else {
                setMessage(t("membership.msg_invalid_mpin"));
            }
        } catch (error) {
            setMessage(t("membership.msg_login_failed"));
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Register new user
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setMessage(t("membership.msg_enter_valid_email"));
            return;
        }
        if (!firstName.trim()) {
            setMessage(t("membership.msg_first_name_required"));
            return;
        }
        if (!lastName.trim()) {
            setMessage(t("membership.msg_last_name_required"));
            return;
        }
        if (!isValidPhone(phone)) {
            setMessage(t("membership.msg_valid_phone_required"));
            return;
        }
        if (password.length !== 6) {
            setMessage(t("membership.msg_mpin_six_digits"));
            return;
        }
        if (confirmPassword !== password) {
            setMessage(t("membership.helper_mpin_match"));
            return;
        }
        if (!termsAccepted) {
            setMessage(t("membership.msg_terms_required"));
            return;
        }
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/membership/signup",
                {
                    email,
                    firstName,
                    lastName,
                    mobileNumber: `${countryCode} ${phone}`, // include country code with space
                    mpin: password,
                    type: 'Membership',
                }
            );

            if (response.data.message) {
                setMessage(t("membership.msg_registration_successful"));

                // Auto-login immediately
                const loginResponse = await axios.post(
                    "https://api.naf-cloudsystem.de/api/membership/authenticate",
                    null,
                    { params: { email, mpin: password } }
                );

                if (loginResponse.data.refreshToken) {
                    localStorage.setItem("authToken", loginResponse.data.refreshToken);
                    localStorage.setItem("authEmail", email);

                    navigate(`/${lang}/dashboard`, { replace: true });
                } else {
                    setMessage(t("membership.msg_signup_auto_login_failed"));
                    setStep(2);
                }
            } else {
                setMessage(t("membership.msg_registration_failed"));
            }
        } catch (error) {
            setMessage(t("membership.msg_error_registration"));
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotMpin = async () => {
        if (!isValidEmail(email)) {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_valid_email"),
                severity: "error",
            });
            return;
        }

        try {
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/forgot-mpin",
                null,
                { params: { email } }
            );

            if (response.status === 200) {
                setSnackbar({
                    open: true,
                    message: t("membership.msg_mpin_reset_sent"),
                    severity: "success",
                });
            } else {
                setSnackbar({
                    open: true,
                    message: t("membership.msg_request_failed"),
                    severity: "error",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            setSnackbar({
                open: true,
                message: t("membership.msg_something_wrong"),
                severity: "error",
            });
        }
    };

    return (
        <Box className="section-container menucontainer">
            <Box sx={{}}>

                {/* </Box> */}
                {/* Left Side */}
                <Box className="main-form-container"

                    sx={{
                        color: "white",
                        p: 4,
                        mb: 6
                    }}
                >
                    <Typography
                        variant="h3"
                        className="headings-h2"
                        fontWeight="bold"
                        sx={{
                            mb: 6,
                            color: '#FCFCFC',
                            textAlign: 'center',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            hyphens: 'auto',
                            px: { xs: 2, sm: 0 }
                        }}
                    >
                        {t("membership.title_login_signup")}
                    </Typography>
                    <Box className="form-container"
                        sx={{
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 4,
                        }}>
                        {/* Step 1: Email */}
                        {step === 1 && (
                            <Box
                                component="form"
                                onSubmit={handleCheckEmail}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                <Typography sx={{ mb: 2, color: '#FCFCFC', textAlign: 'center' }} className="bodyRegularText3">
                                    {t("membership.label_enter_email")}
                                </Typography>

                                <CustomTextField
                                    label={t("membership.field_email")}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleCheckEmail}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}

                        {/* Step 2: MPIN */}
                        {step === 2 && (
                            <Box
                                component="form"
                                onSubmit={handleAuthenticate}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                <Typography sx={{ mb: 2, color: '#FCFCFC', textAlign: 'center' }} className="bodyRegularText3">
                                    {t("membership.label_enter_mpin")}
                                </Typography>

                                <CustomTextField
                                    label={t("membership.field_mpin")}
                                    type={showPassword ? "text" : "password"}
                                    value={mpin}
                                    inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); // only digits
                                        if (value.length <= 6) setMpin(value);
                                    }}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {/* Forgot MPIN link */}
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    <Typography
                                        variant="body2"
                                        sx={{ cursor: "pointer", color: "#EC6B53", textDecoration: 'underline' }}
                                        onClick={handleForgotMpin}
                                        className="bodyRegularText4"
                                    >
                                        {t("memebersLogin.ForgotMpin")}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleAuthenticate}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}

                        {/* Step 3: Sign-up */}
                        {step === 3 && (
                            <Box
                                component="form"
                                onSubmit={handleRegister}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    {t("membership.label_enter_details")}
                                </Typography>

                                <CustomTextField
                                    label={t("membership.field_email")}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_first_name")}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_last_name")}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_phone_number")}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\s+/g, ""))}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_mpin")}
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); // only digits
                                        if (value.length <= 6) setPassword(value);
                                    }}
                                    required
                                    error={password.length > 0 && password.length !== 6}
                                    helperText={
                                        password.length > 0 && password.length !== 6
                                            ? t("membership.helper_mpin_digits")
                                            : ""
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                                <CustomTextField
                                    label={t("membership.field_confirm_mpin")}
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); // only digits
                                        if (value.length <= 6) setConfirmPassword(value);
                                    }}
                                    required
                                    error={
                                        (confirmPassword.length > 0 && confirmPassword.length !== 6) ||
                                        (confirmPassword.length === 6 && password.length === 6 && confirmPassword !== password)
                                    }
                                    helperText={
                                        confirmPassword.length > 0 && confirmPassword.length !== 6
                                            ? t("membership.helper_mpin_digits")
                                            : confirmPassword.length === 6 && password.length === 6 && confirmPassword !== password
                                                ? t("membership.helper_mpin_match")
                                                : ""
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                                {/* Terms & Conditions Checkbox */}
                                <Box sx={{ mt: 2, mb: 2, position: 'relative', }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={termsAccepted}
                                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                                sx={{
                                                    color: "#C2C2C4",
                                                    maxWidth: '10%',
                                                    '&.Mui-checked': {
                                                        color: "#FA7854",
                                                    },
                                                }}
                                            // required
                                            />
                                        }
                                        label={
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#C2C2C4",
                                                    fontSize: "0.875rem",
                                                    lineHeight: 1.4,
                                                    ml: 2
                                                }}
                                            >
                                                {t("membership.terms_conditions_text1")}{" "}
                                                <Link
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        navigate(`/${lang}/privacy-policy`);
                                                    }}
                                                    sx={{
                                                        color: "#FA7854",
                                                        textDecoration: "underline",
                                                        '&:hover': {
                                                            color: "#ff9470",
                                                            cursor: 'pointer'
                                                        }
                                                    }}
                                                >
                                                    {t("membership.terms_conditions_link")}
                                                </Link>
                                                .  {t("membership.terms_conditions_text2")}
                                            </Typography>
                                        }
                                        sx={{
                                            alignItems: "flex-start",
                                            mt: 1
                                        }}
                                    />
                                </Box>

                                {/* Country Code + Phone */}
                                {/* <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                                    <FormControl variant="standard" sx={{ minWidth: 100 }}>
                                        <InputLabel sx={{ color: "#aaa" }}>Code</InputLabel>
                                        <Select
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            sx={{ color: "white" }}
                                        >
                                            {countryCodes.map((c) => (
                                                <MenuItem key={c.dial_code} value={c.dial_code}>
                                                    {c.name} ({c.dial_code})
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        label="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\s+/g, ""))} // strip spaces from user typing
                                        InputProps={{
                                            startAdornment: (
                                                <Typography sx={{ color: "white", mr: 1 }}>
                                                    {countryCode}&nbsp;
                                                </Typography>
                                            ),
                                            style: { color: "white" }
                                        }}
                                        InputLabelProps={{ style: { color: "#aaa" } }}
                                        required
                                    />
                                </Box> */}

                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleRegister}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}
                    </Box>

                    {message && (
                        <Typography sx={{ mt: 2, color: "limegreen", textAlign: 'center' }}>{message}</Typography>
                    )}
                </Box>

                {/* Right Side - Image */}
                <Box
                    sx={{
                        display: "block",
                        width: "100%",

                    }}
                >
                    <Box className="signUp_image_sec"
                        component="img"
                        src={Image1}
                        alt="NAF Machine"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                        }}
                    />
                </Box>
            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>

        </Box >
    );
}

export default Membership;
