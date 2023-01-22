import './Booking.css';
import DateInput from './DateInput/DateInput';
import TableInput from './TableInput/TableInput';
import TimeInput from './TimeInput/TimeInput';
import SuccessMessage from './SeccessMessage/SuccessMessage';
import emailjs from '@emailjs/browser';

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { forwardRef, useEffect, useState } from 'react';

import { GetMonthInfo, SetBooking, ClientBookingInfo } from '../../firebase/FirebaseFunctions';
import UserInfo from './UserInfo/UserInfo';

const Booking = ({}, ref) => {

    const [table, setTable] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [successMessage, setSuccessMessage] = useState(false);
    const [nameEmail, setNameEmail] =useState([])

    const [monthInfo, setMonthInfo] = useState();

    const reset = () => {
        setTable();
        setDate();
        setTime();
        setSuccessMessage(false);
    }

    const sendEmail = (name, date, hour, table, email) => {
        const templateParams = {
            name: name,
            hour: hour,
            date: date,
            table: table,
            email: email
        };
        
        emailjs.send( process.env.REACT_APP_serviceId,process.env.REACT_APP_templateId, templateParams, process.env.REACT_APP_publicKey)
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });
    }

    const makeReservation = (name, email) => {
        const reservation = {
            [date]: {
                [time]: {
                    [table]: false
                }
            }
        }
        setNameEmail([name, email])
        ClientBookingInfo(name, email, date, time, table)
        SetBooking(reservation)
        setSuccessMessage(true)
        sendEmail(name, date, time, table, email)
    }

    useEffect (() => {
        let array = []
        GetMonthInfo().then((data) => {
            array = Object.entries(data);
            setMonthInfo(array)
        })
    }, [successMessage]);

    return (
        <div ref={ref} className="Booking">
            <h1 className='ReservationTitle'>Make your reservation</h1>
            <div className='BookingContainer'>
                <div className='InputContainer'>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                       {date ? null : (<DateInput month={monthInfo} set={setDate}/>)}
                    </LocalizationProvider>
                    { successMessage ===  false ? (table ? null : (date ? (<TimeInput resetDate={setDate} resetHour={setTime} month={monthInfo} date={date} set={setTime}/>) : null)) : null}

                    { successMessage ===  false ? (table ? null : (time ? (<TableInput month={monthInfo} date={date} time={time} set={setTable}/>) : null)) : null}

                    { successMessage ===  false ? (table ? (<UserInfo back={setTable} submit={makeReservation} />) : null) : null}

                    {successMessage ? (<SuccessMessage info={nameEmail} table={table} date={date} time={time} reset={reset}/>) : null}
                </div>
                <img className='ReservationImage' src='./floor.png' alt='Reservation' />
            </div>
        </div>
    );
}

export default forwardRef(Booking);