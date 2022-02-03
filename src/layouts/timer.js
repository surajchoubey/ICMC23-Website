import React from 'react'
import {useState, useEffect} from 'react';

// Change date from here and NOT from Timer function
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

    let TimerCard = ({count,word}) => {
        return (
            <div className="card col-lg-2 col-md-3 col-sm-3 px-0 py-lg-5 col" >
                <div className="card-body">
                    <h1 className='timer'>{count}<br/></h1>
                    <p className="card-text">{word}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="timer-container my-5">
            <div className="timer">
                <h2 className="my-3">CONFERENCE BEGINS IN</h2>
                <div className="container mb-5">
                    <div className="row justify-content-center px-2">
                        <TimerCard count={days} word="DAYS" />
                        <TimerCard count={hours} word="HOURS" />
                        <TimerCard count={minutes} word="MINUTES" />
                        <TimerCard count={seconds} word="SECONDS" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer;

/*

*/
