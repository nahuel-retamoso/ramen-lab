import "./TimeInput.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { Button } from "@mui/material";

const TimeInput = ({resetDate, resetHour, month, date, set}) => {

    const [time, setTime] = useState('');

    const handleChange = (event) => {
      setTime(event.target.value);
      set(event.target.value)
    }

    const back = () => {
        resetDate()
        resetHour()
    }

    const [availableHours, setAvailableHours] = useState(["19:00", "20:30", "22:00", "23:30"])

    const dateRest = date - 1

    useEffect(() => {
        if(month) {
            setAvailableHours(["19:00", "20:30", "22:00", "23:30"])
            let hours = Object.entries(month[dateRest][1])
            for (let hrs=0; hrs < hours.length; hrs ++) {
                let available = []
                let h = (Object.entries(hours[hrs][1]))
                // console.log(h)
                for (let i=0; i < h.length; i ++) {
                    let boolean = h[i][1]
                    if (boolean === false) {
                        available.push(false)
                    } else {
                        available.push(true)
                    }
                }
                if (available.every(value => value === false)) {
                    let hour = (hours[hrs][0])
                    console.log(hour)
                    setAvailableHours(availableHours => availableHours.filter(item => item !== hour))
                }
            }
        }
    }, [date])
        

    return (
        <div className='TimeInput'>
            <Button size="small" onClick={() =>back()}>Back</Button>
            <div className="TimePicker">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth >
                    <InputLabel id="time-input-select-label">Hour</InputLabel>
                    <Select
                        labelId="time-select-label"
                        id="time-simple-select"
                        value={time}
                        label="Hour"
                        onChange={handleChange}
                    >
                        {availableHours.map((availableHours) => {
                            return <MenuItem value={availableHours}>{availableHours}</MenuItem>
                        })}
                    </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    );
}

export default TimeInput;