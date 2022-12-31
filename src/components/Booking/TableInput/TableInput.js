import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import './TableInput.css';

const TableInput = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (

        <div className='TableInput'>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth disabled>
                <InputLabel id="demo-simple-select-label">Table</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default TableInput;