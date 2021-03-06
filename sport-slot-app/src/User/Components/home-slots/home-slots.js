import React, {useEffect, useState} from "react";
import '../../Assets/Styles/HomeSlots/HomeSlots.scss';
import CustomPagination from '../../Components/pagination/pagination';
import SlotCard from "../slot-card/slot-card";

function HomeSlots(){
    const [activePage, setActivePage]= useState(1)
    const pageRangeDisplayed = 3
    const [itemsCountPerPage,setItemsCountPerPage] = useState(8)

    const [displayedItems, setDisplayeditems] = useState([])
    
    var slots = []
    for(var i=0;i<46;i++)
        slots.push("Item "+i)

    useEffect(()=>{
        var items = []
        for(var i=(activePage*itemsCountPerPage)-itemsCountPerPage;i<(activePage*itemsCountPerPage);i++)
            if(slots[i])
                items.push(slots[i])
        setDisplayeditems(items)
    },[activePage,itemsCountPerPage])

    const handleResize =()=>{
        var slotsContainer = document.getElementById('slots-container')
        if(parseInt(slotsContainer.clientWidth/230)===3)
            setItemsCountPerPage(9)
        else
            setItemsCountPerPage(8)
    }
    
    useEffect(()=>{
        window.addEventListener('resize', handleResize)
        var slotsContainer = document.getElementById('slots-container')
        if(parseInt(slotsContainer.clientWidth/230)===3)
            setItemsCountPerPage(9)
        else
            setItemsCountPerPage(8)
    })
    
    return(
        <div className="home-slots-main-container">
            <div className="home-slots-container" id="slots-container">
                {displayedItems.map((item)=>(
                    <SlotCard key={item} slot={item}/>
                ))}
            </div>
            <div className="home-slots-pages-container">
                <CustomPagination totalItemsCount={slots.length} pageRangeDisplayed={pageRangeDisplayed} itemsCountPerPage={8} activePage={activePage} setActivePage={setActivePage}/>
            </div>
        </div>
    );
}

export default HomeSlots