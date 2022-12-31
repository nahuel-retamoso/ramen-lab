import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import moment from 'moment';
import './DateTimeInput.css'


const DateTimeInput = () => {

    const [value, setValue] = useState(moment('2022-04-07'));


    return (
       
        <div className='DateTimeInput'>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Reservation Date"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
            />
        </div>
    );
}

export default DateTimeInput;
