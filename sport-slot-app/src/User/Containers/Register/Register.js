import React, { useState } from "react";
import '../../Assets/Styles/Register/Register.scss'

function Register(){
    const [fullname, setFullname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [height, setHeight] = useState('')
    const [preferedSports, setPreferedSports] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const _onFocusDate = (e) => {
        e.currentTarget.type = "date";
    }
    const _onBlurDate = (e) =>{
          e.currentTarget.type = "text";
    }

    return(
        <div className="register-main-container">
            <div className="register-container padding-10px">
                <div className="register-title heading-1">Register</div>
                <div>
                    <input className="register-input" value={fullname} onChange={(event)=>{setFullname(event.target.value)}} type="text" placeholder="Full name"/>
                </div>
                <div>
                    <input className="register-input" value={dateOfBirth} onChange={(event)=>{setDateOfBirth(event.target.value)}} onFocus={(e)=>{_onFocusDate(e)}} onBlur={(e)=>{_onBlurDate(e)}} type="text" placeholder="Date of birth"/>
                </div>
                <div>
                    <input className="register-input" value={height} onChange={(event)=>{setHeight(event.target.value)}} min="1" type="number" placeholder="Height"/>
                </div>
                <div>
                    <input className="register-input" value={preferedSports} onChange={(event)=>{setPreferedSports(event.target.value)}} type="text" placeholder="Prefered sports"/>
                </div>
                <div>
                    <input className="register-input" value={address} onChange={(event)=>{setAddress(event.target.value)}} type="text" placeholder="Address"/>
                </div>
                <div>
                    <input className="register-input" value={city} onChange={(event)=>{setCity(event.target.value)}} type="text" placeholder="City"/>
                </div>
                <div>
                    <input className="register-input" value={state} onChange={(event)=>{setState(event.target.value)}} type="text" placeholder="State"/>
                </div>
                <div>
                    <input className="register-input" value={email} onChange={(event)=>{setEmail(event.target.value)}} type="email" placeholder="Email address"/>
                </div>
                <div>
                    <input className="register-input" value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Password"/>
                </div>
                <div>
                    <input className="register-radio-input" type="radio"/>
                    <span className="register-radio-label-1">I have read and agreed to </span>
                    <span className="register-radio-label-2">Terms and conditions!</span>
                </div>
                <button className="green-button">
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register