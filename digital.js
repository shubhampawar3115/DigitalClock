const time = document.getElementById('time');
const timeFormat = document.getElementById('timeFormat');
const currdate = document.getElementById('currdate');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
})

let showTime = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let fulldate=date.toDateString();

    hrs = hrs < 10 ?`0${hrs}` : hrs
    mins = mins < 10 ? `0${mins}` : mins
    secs = secs < 10 ? `0${secs}` : secs
    
    time.innerText = `${hrs}:${mins}:${secs}`;
    timeFormat.innerText= hrs>11 ? 'PM':'AM';
    currdate.innerText=`${fulldate}`;
}