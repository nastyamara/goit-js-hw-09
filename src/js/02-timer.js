import flatpickr from "flatpickr";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    dateInput: document.querySelector('#datetime-picker'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),       
    seconds:  document.querySelector('span[data-seconds]'),  
}


let intervalId = null;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const newDate = selectedDates[0].getTime();
        
    if (newDate < Date.now()) {
      refs.startBtn.disabled = true;
      window.alert("Please choose a date in the future");
    }
    
    if (newDate > Date.now()) {
      refs.startBtn.disabled = false;
    }
    refs.startBtn.addEventListener('click', onStartBtnClick);

    function onStartBtnClick(e) {
      e.preventDefault()
      intervalId = setInterval(() => calculateData()
    , 1000);
      refs.startBtn.disabled = true;
    }

    function calculateData() {
      const ms = newDate - Date.now();
      if (ms > 0) {
        console.log(ms);
        convertMs(ms);
              refs.days.textContent = addLeadingZero(convertMs(ms).days);
      refs.hours.textContent = addLeadingZero(convertMs(ms).hours);
      refs.minutes.textContent = addLeadingZero(convertMs(ms).minutes);
      refs.seconds.textContent = addLeadingZero(convertMs(ms).seconds);
      }
      if (ms <= 1000) {
      stop();
    } 
    } 
  }
}
function stop() {
  clearInterval(intervalId);
}

const flatpickr = flatpickr(refs.dateInput, options);


// const dateInput = document.querySelector("#datetime-picker");
console.log(dateInput.value);

    function addLeadingZero(value) {
      return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}






