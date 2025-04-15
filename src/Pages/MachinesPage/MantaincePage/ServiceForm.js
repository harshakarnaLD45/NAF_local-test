import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Radio,
} from '@mui/material';
import CustomTextField from './CustomTextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomSelect from './CustomSelect';
import CloseIcon from '@mui/icons-material/Close';
import { UploadIcon } from '../../../Componenets/CustomIcons';
import AnimateButton from '../../../Componenets/CommonComponents/AnimateButton';

function ServiceForm() {
  const [formValues, setFormValues] = useState({
    machineLocation: '',
    machineId: '',
    problemCategory: '',
    problemType: '',
    description: '',
    contactName: '',
    email: '',
    phone: '',
    media: [],
    agreement: false,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formValues);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 10 }}>
      <Box sx={{ maxWidth: 800, width: '100%', p: { xs: 2, sm: 5, md: 10 }, color: '#FCFCFC', border: '1px solid #525252', borderRadius: '24px' }} component="form" onSubmit={handleSubmit}>
        <Typography color='#FCFCFC' className='bodyMediumText1' align='center'>Fill up the Form</Typography>
        <CustomTextField
          required
          label="Machine Location"
          name="machineLocation"
          value={formValues.machineLocation}
          onChange={handleChange}
        />
        <CustomTextField
          label="Machine ID"
          name="machineId"
          value={formValues.machineId}
          onChange={handleChange}
        />

        <CustomSelect
          required
          label="Problem Category"
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
          label="Problem Type"
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
          label="Description"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          multiline
        />

        <CustomTextField
          required
          label="Contact Person Full Name"
          name="contactName"
          value={formValues.contactName}
          onChange={handleChange}
        />
        <CustomTextField
          required
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <CustomTextField
          label="Phone Number"
          name="phone"
          value={formValues.phone}
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
            Upload Media (Photos, Videos, or Audio)
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
                    <Typography sx={{ fontSize: '12px' }}>Media</Typography>
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

        <FormControlLabel
          control={
            <Radio
              name="agreement"
              checked={formValues.agreement}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  agreement: e.target.checked,
                })
              }
              required
              sx={{ color: '#C2C2C4' }}
            />
          }
          className="bodyRegularText4"
          label={
            <span>
              I Understand that NAF Germany will securely hold my data in accordance with their{' '}
              <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                privacy policy
              </span>
            </span>
          }
          sx={{ mt: 2, color: '#C2C2C4' }}
        />

        <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
          <AnimateButton text1="SUBMIT" text2="FORM" />
        </Box>

        <Typography variant="body2" className="bodyRegularText4" align="center" color="#C2C2C4" sx={{ mt: 2 }}>
          Our team will review your request and contact you shortly.
        </Typography>
      </Box>
    </Box>
  );
}

export default ServiceForm;
