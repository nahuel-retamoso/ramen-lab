import { Button, TextField } from "@mui/material";
import { useState } from "react";
import './UserInfo.css'

const UserInfo = ({back, submit}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, serError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateEmail(email)) {
            serError(false);
            console.log("name: ",name);
            console.log("email: ",email);
            submit(name, email);

          } else {
            serError(true);
          }

      }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function validateEmail(email) {
        if (emailRegex.test(email)) {
          return true;
        } else {
          return false;
        }
      }

    

    return (
        
        <form onSubmit={handleSubmit} className="UserInfoContainer">
            <div className="UserInput">
                <TextField
                error={error}
                id="outlined-error"
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div className="UserInput">
                <TextField
                error={error}
                id="outlined-error"
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <Button onClick={() => back(null)}>Back</Button>
            <Button type="submit">Reserve</Button>
        </form>
    )
}

export default UserInfo;