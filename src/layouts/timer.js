import React from 'react'
import { useState, useEffect } from 'react';

const Timer = () => {
    var endDate   = new Date("01/05/2023 09:00:00");
    const curTime = new Date();
    var secs = (endDate.getTime() - curTime.getTime()) / 1000;
    var noOfDays = Math.floor(secs/(60*60*24));
    secs=secs-(60*60*24)*noOfDays;  
    var hrs = Math.floor(secs/(60*60));
    secs = secs-(60*60)*hrs;
    var mins = Math.floor(secs/(60));
    secs = Math.floor(secs-(60)*mins);
    const [ days, setDays ] = useState(noOfDays);
    const [ hours, setHours ] = useState(hrs);
    const [ minutes, setMinutes ] = useState(mins);
    const [seconds, setSeconds ] =  useState(secs);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } 
                else {
                    if (hours > 0){
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } 
                    else {
                        if (days > 0){
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        } 
                        else{
                            clearInterval(myInterval);
                            }
                        }
                    }
                }
            }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div style={{color: "#1d3a61", fontWeight: "bold", fontSize: "24px", marginTop: "20px"}}>
            CONFERENCE BEGINS IN
            <div style={{display:"flex", flexDirection: "row", marginTop: "20px"}}>
               <div className='timer'>{days}<br/></div>
               <div>DAYS</div>
               <div className='timer'>{hours}<br/></div>
               <div>HOURS</div>
               <div className='timer'>{minutes}<br/></div>
               <div>MINUTES</div>
               <div className='timer'>{seconds}<br/></div>
               <div>SECONDS</div> 
            </div>
        </div>
    )
}

export default Timer;