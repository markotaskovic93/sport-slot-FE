import React from "react";
import Layer1 from '../../Assets/Images/Header/Layer1.png'

function HeaderUserButton(){
    
    return(
        <div style={{display: "flex", maxWidth: 200, justifyContent: "space-between", alignItems: "center",minWidth: 120, backgroundColor: "rgb(36,36,36)", color: "white", fontSize: 14,height: 40, marginLeft: 30, borderRadius: 15}}>
            <span style={{marginLeft: 10, fontWeight: "bold"}}>Username</span>
            <img style={{width: 28, height: 30, marginRight: 5}} src={Layer1}/>
        </div>
    );
}

export default HeaderUserButton