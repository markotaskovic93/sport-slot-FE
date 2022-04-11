import { useState,useEffect } from 'react';
import Pagination from 'react-js-pagination';
import '../../Assets/Styles/BookingSlotSteps/BookingSlotSteps.scss'
import BookingSlotJoinTheGroup from '../booking-slot-join-the-group/booking-slot-join-the-group';
import BookingSlotBuyNow from '../booking-slot-pay-now/booking-slot-pay-now';
import BookingSlotShareTheCost from '../booking-slot-share-the-cost/booking-slot-share-the-cost';
import BookingSlotInvitePlayers from '../booking-slot-invite-players/booking-slot-invite-players';
import CustomPagination from '../../Components/pagination/pagination';
import BookingSlotPlayersNeeded from '../booking-slot-players-needed/booking-slot-players-needed';
import BookingSlotConfirmation from '../booking-slot-confirmation/booking-slot-confirmation';
import ConfirmationSlotCreated from '../confirmation-slot-created/confirmation-slot-created';
import ConfirmationRequestSent from '../confirmation-requst-sent/confirmation-requst-sent';
import AreYouSure from '../booking-slot-are-you-sure/booking-slot-are-you-sure';

function BookingSlotSteps(){

    

    return(
        <>
        <AreYouSure/>
        <ConfirmationSlotCreated/>
        <ConfirmationRequestSent/>
        <div className="heading-1 padding-10px text-bold">Reservation details</div>
        <div className="booking-slot-steps-container-1">
            <BookingSlotBuyNow slotType={"available"}/>
            <BookingSlotShareTheCost/>
        </div>
        <div className="heading-1 padding-10px text-bold">Reservation details</div>
        <div className="booking-slot-steps-container-1">
            <BookingSlotJoinTheGroup/>
            <BookingSlotBuyNow slotType={""}/>
        </div>
        
        <div className="heading-1 padding-10px text-bold">Invite players</div>
        <div className="booking-slot-steps-container-2">
            <BookingSlotInvitePlayers/>
        </div>
    
        <div className="heading-1 padding-10px text-bold">Total players needed</div>
        <div className="booking-slot-steps-container-3">
            <BookingSlotPlayersNeeded/>
        </div>
        <div className="heading-1 padding-10px text-bold">Confirmation</div>
        <div className="booking-slot-steps-container-4">
            <BookingSlotConfirmation type={"pay-now"}/>
        </div>
        <div className="heading-1 padding-10px text-bold">Confirmation</div>
        <div className="booking-slot-steps-container-4">
            <BookingSlotConfirmation type={"share-the-cost"}/>
        </div>
        <div className="heading-1 padding-10px text-bold">Confirmation</div>
        <div className="booking-slot-steps-container-4">
            <BookingSlotConfirmation type={"join-group"}/>
        </div>
        </>
    );
}

export default BookingSlotSteps