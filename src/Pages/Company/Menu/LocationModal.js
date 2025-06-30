import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

const LocationModal = ({ open, onClose, locations, selected, onSelect }) => {


    const { t } = useTranslation();


    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm"
            PaperProps={{
                sx: {
                    backgroundColor: "#1E1E1E",
                    color: "#FCFCFC",
                     width: '100%',borderRadius: '16px',
                }
            }}
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" className='bodyMediumText1' color='#FCFCFC'> {t('menu.location')}</Typography>
                <IconButton onClick={onClose} sx={{ color: '#FCFCFC' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ width: '100%' }}>
                {locations.map(city => (
                    <Box key={city.city} sx={{ width: '100%', mb: 3 }}>
                        <Typography variant="subtitle1" className='bodyMediumText1' sx={{
                            color: '#FCFCFC',
                            width: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'block', mb: 1
                        }}>{city.city}</Typography>
                        <RadioGroup sx={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: "25px" }}
                            value={selected}
                            onChange={(e) => onSelect(Number(e.target.value))} // Convert string to number if needed
                        >
                            {city.machines.map(station => (
                                <FormControlLabel sx={{ marginLeft: '0px',display:'flex',gap:'15px' }}
                                    key={station.id}
                                    value={station.id}
                                    control={<Radio className='bodyRegularText3 menu-radio' sx={{ color: '#C2C2C4', '&.Mui-checked': { color: '#FCFCFC', position:'relative',Left:'-5px' } }} />}
                                    label={<Typography className='bodyRegularText3 radio-label' sx={{ color: '#C2C2C4', }}>{station.location}</Typography>}
                                />
                            ))}
                        </RadioGroup>
                    </Box>
                ))}
            </DialogContent>
        </Dialog>
    );
};

export default LocationModal;
