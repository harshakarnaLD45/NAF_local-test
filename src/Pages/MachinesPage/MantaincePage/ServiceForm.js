import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  Radio,
  Snackbar,
  Alert,
} from '@mui/material';
import CustomTextField from './CustomTextField';
import CustomSelect from './CustomSelect';
import CloseIcon from '@mui/icons-material/Close';
import { UploadIcon } from '../../../Componenets/CustomIcons';
import AnimateButton from '../../../Componenets/CommonComponents/AnimateButton';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

function ServiceForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [formValues, setFormValues] = useState({
    machineLocation: '',
    machineId: '',
    problemCategory: '',
    problemType: '',
    description: '',
    contactPersonName: '',
    email: '',
    phoneNumber: '',
    media: [],
    agreement: false,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ open: false, message: '', severity: 'success' });
  };

  const validateForm = () => {
    if (!formValues.machineLocation.trim()) {
      showSnackbar(t('validation.machineLocationRequired'), 'error');
      return false;
    }
    if (!formValues.problemCategory) {
      showSnackbar(t('validation.problemCategoryRequired'), 'error');
      return false;
    }
    if (!formValues.problemType) {
      showSnackbar(t('validation.problemTypeRequired'), 'error');
      return false;
    }
    if (!formValues.contactPersonName.trim()) {
      showSnackbar(t('validation.contactPersonNameRequired'), 'error');
      return false;
    }
    if (!formValues.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      showSnackbar(t('validation.validEmailRequired'), 'error');
      return false;
    }
    if (!formValues.agreement) {
      showSnackbar(t('validation.agreementRequired'), 'error');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : type === 'file' ? [...formValues.media, ...files] : value,
    });
  };

  const handleDelete = (index) => {
    const newMedia = formValues.media.filter((_, i) => i !== index);
    setFormValues({
      ...formValues,
      media: newMedia,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const { media, agreement, ...issueData } = formValues; // remove media and agreement
    const formData = new FormData();
    formData.append('issueData', JSON.stringify(issueData));

    if (media.length > 0) {
      media.forEach((file) => {
        formData.append('mediaFiles', file);
      });
    }

    try {
      await axios.post('https://api.naf-cloudsystem.de/api/NAFWebsite/issue', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      showSnackbar(t('validation.supportIssueSubmitted'), 'success');

      // Reset form
      setFormValues({
        machineLocation: '',
        machineId: '',
        problemCategory: '',
        problemType: '',
        description: '',
        contactPersonName: '',
        email: '',
        phoneNumber: '',
        media: [],
        agreement: false,
      });
    } catch (error) {
      console.error(error);
      showSnackbar('Submission failed. Please try again.', 'error');
    }
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 10 }}>
      <Box sx={{ maxWidth: 800, width: '100%', p: { xs: 2, sm: 5, md: 10 }, color: '#FCFCFC', border: '1px solid #525252', borderRadius: '24px' }} component="form" onSubmit={handleSubmit}>
        <Typography color='#FCFCFC' className='bodyMediumText1' align='center'>{t('Maintenance.FillupForm')}</Typography>
        <CustomTextField
          required
          label={t('Maintenance.MachineLocation')}
          name="machineLocation"
          value={formValues.machineLocation}
          onChange={handleChange}
        />
        <CustomTextField
          label={t('Maintenance.MachineID')}
          name="machineId"
          value={formValues.machineId}
          onChange={handleChange}
        />

        <CustomSelect
          required
          label={t('Maintenance.ProblemCategory')}
          name="problemCategory"
          value={formValues.problemCategory}
          onChange={handleChange}
          options={[
            { value: 'hardware', label: 'Hardware' },
            { value: 'software', label: 'Software' },
            { value: 'network', label: 'Network' },
            { value: 'payment', label: 'Payment' },
          ]}
        />

        <CustomSelect
          required
          label={t('Maintenance.ProblemType')}
          name="problemType"
          value={formValues.problemType}
          onChange={handleChange}
          options={[
            { value: 'screen', label: 'Screen Issue' },
            { value: 'power', label: 'Power Failure' },
            { value: 'card', label: 'Card Reader Issue' },
            { value: 'software', label: 'Software Crash' },
          ]}
        />

        <CustomTextField
          label={t('Maintenance.Description')}
          name="description"
          value={formValues.description}
          onChange={handleChange}
          multiline
        />

        <CustomTextField
          required
          label={t('Maintenance.ContactPersonFName')}
          name="contactPersonName"
          value={formValues.contactPersonName}
          onChange={handleChange}
        />
        <CustomTextField
          required
          label={t('Maintenance.Email')}
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <CustomTextField
          label={t('Maintenance.PhoneNumber')}
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
        />

        <Box sx={{ mt: 2 }}>
          <label
            htmlFor="media-upload"
            className="bodyRegularText4"
            style={{
              color: '#C2C2C4',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                padding: '10px',
                cursor: 'pointer'
              }}
            >
              <UploadIcon />
            </div>
            {t('Maintenance.UploadMedia')}
          </label>

          <input
            hidden
            id="media-upload"
            accept="image/*,video/*,audio/*"
            type="file"
            name="media"
            onChange={handleChange}
            multiple
          />
        </Box>

        {formValues.media.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
            {formValues.media.map((file, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  margin: '8px',
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#eee',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginRight: '8px',
                  }}
                >
                  {file.type.startsWith('image') ? (
                    <img src={URL.createObjectURL(file)} alt={file.name} width="60" height="60" />
                  ) : (
                    <Typography  sx={{ color: '#C2C2C4', fontSize: '12px'  }}>{t('Maintenance.media')}</Typography>
                  )}
                </Box>
                <CloseIcon
                  onClick={() => handleDelete(index)}
                  sx={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    cursor: 'pointer',
                    color: '#FCFCFC',
                    fontSize: '16px',
                  }}
                />
              </Box>
            ))}
          </Box>
        )}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '16px' }}>
          <input
            type="radio"
            name="agreement"
            checked={formValues.agreement}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                agreement: e.target.checked,
              })
            }
            required
            style={{
              accentColor: '#7FEE64',   // ✅ Green fill when selected
              cursor: 'pointer',
              marginTop: '4px',
              width: '16px',
              height: '16px',
            }}
          />
          <label className="bodyRegularText4" style={{ color: '#C2C2C4', cursor: 'default' }}>
            {t('Maintenance.uderstnadTest')}&nbsp;
            <a
              onClick={() => navigate(`/${lang}/privacy-policy`)}
              style={{
                textDecoration: 'underline',
                color: '#C2C2C4',
                cursor: 'pointer',
              }}
            >
              {t('Maintenance.privacy')}
            </a>
          </label>
        </div>


        <Box onClick={handleSubmit} sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
          <AnimateButton text1={t('contactus.SUBMIT')} text2={t('contactus.FORM')} />
        </Box>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>

        <Typography variant="body2" className="bodyRegularText4" align="center" color="#C2C2C4" sx={{ mt: 2 }}>
          {t('Maintenance.Requestformfooter')}
        </Typography>
      </Box>
    </Box>
  );
}

export default ServiceForm;
