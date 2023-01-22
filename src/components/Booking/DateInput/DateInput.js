import { Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import moment from 'moment';
import './DateTimeInput.css'


const DateInput = ( {month, set} ) => {

    const [timeValue, setTimeValue] = useState();

    const handleChange = (newValue) => {
      setTimeValue(newValue);
    }

    const dateSelect = () => {
        set(moment(timeValue).format("DD"))
    }
    
    let disableDates = [];
    
    const currentDate = new Date();
    const lastDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    useEffect(() => {
      
      if(month) {
        
        for(let day = 0; day < month.length; day ++) {
          let hours = Object.values(month[day][1])
          let dayCheck = []
          
          for ( let hour = 0; hour < hours.length; hour ++) {
            let HourNum = hours[hour]
            let TableValues = Object.values(HourNum)
            if (TableValues.every(value => value === false)) {
              dayCheck.push(false)
            } else {
              dayCheck.push(true)
            }
          }
          if (dayCheck.every(value => value === false)) {
            disableDates.push(day + 1)
          }
        }
    }
    }, [month])
  
    
    return (
       
        <div className='DateTimeInput'>
          <div className='Picker'>
            <DatePicker
            label="Date"
            value={timeValue}
            disablePast
            maxDate={lastDayOfCurrentMonth}

            shouldDisableDate={(date) => {
              let d = moment(date)
              if (d.month() === currentDate.getMonth() && disableDates.includes(d.date())) {
                return true;
              }
              return false;
              }}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <Button onClick={dateSelect}>Select</Button>
        </div>
    );
}

export default DateInput;
