import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CustomSelect({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
}) {
    const [open, setOpen] = useState(false);

    return (
        <FormControl fullWidth className='bodyRegularText4' required={required}>
            <InputLabel sx={{
                color: '#C2C2C4', ml: '-10px', '&.Mui-focused': {
                    color: '#C2C2C4', // stays white when focused
                },
            }}>{label}</InputLabel>
            <Select
                variant="standard"
                name={name}
                value={value}
                onChange={onChange}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                IconComponent={() => (
                    <ArrowDropDownIcon
                        sx={{
                            color: '#C2C2C4',
                            transition: 'transform 0.3s',
                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    />
                )}
                sx={{
                    color: '#C2C2C4',
                    py: 1,
                    my: 3,
                    '&:before': { borderBottom: '0.5px solid #C6C6C6' },
                    '&:after': { borderBottom: '0.5px solid #C6C6C6' },
                    '&:hover:not(.Mui-disabled):before': { borderBottom: '0.5px solid #C6C6C6' },
                }}
            >
                {options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CustomSelect;
