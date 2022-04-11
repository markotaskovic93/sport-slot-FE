import React from "react";
import '../../Assets/Styles/SlotCard/SlotCard.scss'
import SlotImage from '../../Assets/Images/SlotCard/Court_image_2.png'

function SlotCard(props){
    const {slot} = props
    return(
        <div className="slot-card-container">
            <img src={SlotImage} className="slot-card-image"/>
            <div className="slot-card-title">{slot}</div>
            <div className="slot-card-text">Address street name 263b, New York</div>
            <div className="slot-card-text">WED 06 SEP/11 AM to 13 PM</div>
            <div className="slot-card-title">10 players needed</div>
            <div className="slot-card-footer">
                <div className="slot-card-footer-left"><div className="slot-card-footer-price">$5.5</div><div className="slot-card-footer-per">per person</div></div>
                <button className="slot-card-footer-button">Join group</button>
            </div>
        </div>
    );
}

export default SlotCard