import React from 'react'
import {useState, useEffect} from 'react';

const date = new Date("01/05/2023 09:00:00");

const Timer = () => {
    var endDate = new Date(date);
    const curTime = new Date();
    var secs = (endDate.getTime() - curTime.getTime()) / 1000;
    var noOfDays = Math.floor(secs / (60 * 60 * 24));
    secs = secs - (60 * 60 * 24) * noOfDays;
    var hrs = Math.floor(secs / (60 * 60));
    secs = secs - (60 * 60) * hrs;
    var mins = Math.floor(secs / (60));
    secs = Math.floor(secs - (60) * mins);
    const [days, setDays] = useState(noOfDays);
    const [hours, setHours] = useState(hrs);
    const [minutes, setMinutes] = useState(mins);
    const [seconds, setSeconds] = useState(secs);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else {
                        if (days > 0) {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        } else {
                            clearInterval(myInterval);
                        }
                    }
                }
            }
        }, 1000)
        return() => {
            clearInterval(myInterval);
        };
    });

    return (
        <div className="timer-container">
            <div className="timer">
                <h2 className="mb-3">CONFERENCE BEGINS IN</h2>
                <div className="container mb-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="card col col-lg-2 col-md-3 col-sm-3 px-0 py-lg-5">
                            <div className="card-body">
                                <h1 className='timer'>{days}<br/></h1>
                                <p className="card-text">DAYS</p>
                            </div>
                        </div>
                        <div className="card col col-lg-2 col-md-3 col-sm-3 px-0 py-lg-5">
                            <div className="card-body">
                                <h1 className='timer'>{hours}<br/></h1>
                                <p className="card-text">HRS</p>
                            </div>
                        </div>
                        <div className="card col col-lg-2 col-md-3 col-sm-3 px-0 py-lg-5">
                            <div className="card-body">
                                <h1 className='timer'>{minutes}<br/></h1>
                                <p className="card-text">MINS</p>
                            </div>
                        </div>
                        <div className="card col col-lg-2 col-md-3 col-sm-3 px-0 py-lg-5">
                            <div className="card-body">
                                <h1 className='timer'>{seconds}<br/></h1>
                                <p className="card-text">SECS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer;

/*

*/
