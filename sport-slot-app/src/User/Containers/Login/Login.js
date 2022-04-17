import React, { useState } from "react";
import '../../Assets/Styles/Login/Login.scss'

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="login-main-container">
            <div className="login-container padding-10px">
                <h1>Log in</h1>
                <div>
                    <input className="login-input" value={username} onChange={(event)=>{setUsername(event.target.value)}} type="email" placeholder="Email address"/>
                </div>
                <div>
                    <input className="login-input" value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Password"/>
                </div>
                <button className="green-button">
                    Log in
                </button>
            </div>
        </div>
    );
}

export default Login