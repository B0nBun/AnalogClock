"use strict";

const hourArrow = document.body.querySelector(".hour")
const minuteArrow = document.body.querySelector(".minute")
const secondArrow = document.body.querySelector(".second")


function setHourArrow(hours, minutes) {
    hours %= 12
    let rotationDegrees = 360 / 12 * (hours) + 360 / 12 / 60 * minutes
    hourArrow.style.transform = `translate(0%, -50%) rotate(${rotationDegrees - 90}deg)`
}


function setMinuteArrow(minutes, seconds) {
    let rotationDegrees = 360 / 60 * minutes + 360 / 60 / 60 * seconds
    minuteArrow.style.transform = `translate(0%, -50%) rotate(${rotationDegrees - 90}deg)`
}


function setSecondArrow(seconds) {
    let rotationDegrees = 360 / 60 * seconds
    secondArrow.style.transform = `translate(0%, -50%) rotate(${rotationDegrees - 90}deg)`
}

function setSecondsArrowTime(hours, minutes, seconds) {
    hours = (hours >= 10 ? `${hours}` : `0${hours}`)
    minutes = (minutes >= 10 ? `${minutes}` : `0${minutes}`)
    seconds = (seconds >= 10 ? `${seconds}` : `0${seconds}`)
    const secondArrowTime = secondArrow.querySelector("#seconds-time").querySelector("span")
    secondArrowTime.innerText = `${hours}:${minutes}:${seconds}`
}


function setClockTime() {
    let currentHour = new Date().getHours() 
    let currentMinute = new Date().getMinutes()
    let currentSecond = new Date().getSeconds()
    setSecondArrow(currentSecond)
    setHourArrow(currentHour, currentMinute)
    setMinuteArrow(currentMinute, currentSecond)
    setSecondsArrowTime(currentHour, currentMinute, currentSecond)
    console.log(currentHour, currentMinute, currentSecond)
    setTimeout(setClockTime, 1000)
}

setClockTime()