import { Button } from "@mui/material"
import "./SuccessMessage.css"
import "./SuccessMessage.css"

const SuccessMessage = ({info, table, date, time, reset}) => {
    return (
        <div className="SuccessMessage">
            <h1 className="headerSucces">Reservation made successfully</h1>
            <div className="Content">
                <p>Dear {info[0]},</p>
                <p>We send an email to: {info[1]}</p>
                <h4>Reservation details:</h4>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
                <p>Table: {table}</p>
            </div>
            <Button onClick={reset}>Make another reservation</Button>
        </div>
    )
}

export default SuccessMessage