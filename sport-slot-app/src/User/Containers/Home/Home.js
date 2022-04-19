import React, { useState } from "react";
import '../../Assets/Styles/Home/Home.scss'
import HomeSlider from "../../Components/home-slider/home-slider";
import HomeSearch from "../../Components/home-search/home-search";
import HomeFilters from "../../Components/home-filters/home-filters";
import HomeSlots from "../../Components/home-slots/home-slots";
import HomeFeaturedCourts from "../../Components/home-featured-courts/home-featured-courts";
import HomePlayers from "../../Components/home-players/home-players";
import Footer from "../../Components/footer/footer";
import { Modal } from "react-bootstrap";
import Image1 from '../../Assets/Images/PlayerCard/image1.png'


function Home(){
    const [showInvitePlayerModal, setShowInvitePlayerModal] = useState(false)

    const handleInvitePlayer = () => {
        setShowInvitePlayerModal(true)
    }
    const handleSentInvite = () => {
        setShowInvitePlayerModal(false)
    }
    
    return(
        <>
        <HomeSlider/>
        <div className="home-main-container">
            <div className="home-container">
                <HomeSearch/>
                <HomeSlots/>
                <HomeFeaturedCourts/>
                <HomePlayers handleInvitePlayer={handleInvitePlayer}/>
            </div>
        </div>
        <Modal show={showInvitePlayerModal} onHide={()=>{setShowInvitePlayerModal(false)}}>
        <div className="modal-header-1"><span onClick={handleSentInvite}>X</span></div>
            <div className="modal-container">
                
                <div className="modal-heading text-bold green-text">Invite to slot</div><br/>
                <img src={Image1} alt="" width={70}/>
                <div className="heading-2 black-text">Ema Petrov</div>
                <div className="modal-slots">
                    <div className="modal-slot">
                        <h4><b>Super Sports Court 4</b></h4>
                        <h4>168A Princes Road, Buckhurst Hill",IG9 5DJ</h4>
                        <h4>Wed, Oct 3 / 08AM - 10AM</h4>
                        <h4 className="green-text">$32 <h5>per person</h5></h4>
                    </div>
                    <div className="modal-slot">
                        <h4><b>Super Sports Court 4</b></h4>
                        <h4>168A Princes Road, Buckhurst Hill",IG9 5DJ</h4>
                        <h4>Wed, Oct 3 / 08AM - 10AM</h4>
                        <h4 className="green-text">$32 <h5>per person</h5></h4>
                    </div>
                    <div className="modal-slot">
                        <h4><b>Super Sports Court 4</b></h4>
                        <h4>168A Princes Road, Buckhurst Hill",IG9 5DJ</h4>
                        <h4>Wed, Oct 3 / 08AM - 10AM</h4>
                        <h4 className="green-text">$32 <h5>per person</h5></h4>
                    </div>
                </div>
                <button className="green-button" onClick={handleSentInvite}>Send</button>
            </div>
        </Modal>
        </>
    );
}

export default Home;