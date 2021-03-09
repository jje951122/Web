const current_time=document.querySelector('#js-current-time');

function getCurrentTime(){
    const date=new Date();
    const hour=date.getHours();
    const min=date.getMinutes();

    current_time.textContent= `${hour < 10 ? `0${hour}` : hour}:${
        min < 10 ? `0${min}` : min
      }`;
    
    greetingMessage(hour);
}

if(current_time){
    getCurrentTime();
    setInterval(getCurrentTime,100);
}