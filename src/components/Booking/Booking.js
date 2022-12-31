import './Booking.css';
import DateTimeInput from './DateTimeInput/DateTimeInput';
import TableInput from './TableInput/TableInput';

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";


const Booking = () => {

    return (
        <div className="Booking">
            <h1 className='ReservationTitle'>Make your reservation</h1>
            <div className='BookingContainer'>
                <div className='InputContainer'>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DateTimeInput />
                    </LocalizationProvider>
                    <TableInput />
                </div>
                <img className='ReservationImage' src='./table' alt='Reservation' />
            </div>
        </div>

    );
}

export default Booking;