import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import './TableInput.css';

const TableInput = ({month, date, time, set}) => {
    
    const [table, setTable] = useState('');
    const [availableTables, setAvailableTables] = useState([])

    const handleChange = (event) => {
      setTable(event.target.value);
      set(event.target.value)
    };

    console.log(time)
    const  dateRest = date - 1;

    useEffect(() => {
        setAvailableTables(["table1", "table2", "table3", "table4"]);
        if(month) {
            let tables = Object.entries(month[dateRest][1][time])
            console.log(tables)
            for (let t=0; t < tables.length; t ++) {
                console.log(tables[t][1])
                if (tables[t][1] === false) {
                    setAvailableTables(table => table.filter(x => x !== tables[t][0]))
                }
            }
        }
    },[time])
  
    return (

        <div className='TableInput'>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                <InputLabel id="input-select-label">Table</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    value={table}
                    label="Table"
                    onChange={handleChange}>

                    {availableTables.map((table) => {
                        return <MenuItem value={table}>{table}</MenuItem>
                    })}
                </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default TableInput;