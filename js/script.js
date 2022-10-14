const hour = document.querySelector(".h");
const min = document.querySelector(".m");
const sec = document.querySelector(".s");
const hoursNumber = document.querySelector(".hours");
const minutesNumber = document.querySelector(".minutes");

function clock() {
  let time = new Date();
  let second = time.getSeconds() * 6; //* Градусы
  let minute = time.getMinutes() * 6; //* Градусы
  let hours = time.getHours() * 30; //* Градусы

  sec.style.transform = `rotate(${second}deg)`;
  min.style.transform = `rotate(${minute}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;

  //*! InnerHTML

  hoursNumber.innerHTML = time.getHours();
  minutesNumber.innerHTML = time.getMinutes();

  if (hoursNumber.innerHTML.length === 1) {
    hoursNumber.innerHTML = "0" + time.getHours();
  }
  if (minutesNumber.innerHTML.length === 1) {
    minutesNumber.innerHTML = "0" + time.getMinutes();
  }

  //! Рекурсия //* Самовызывание функции

  setTimeout(() => {
    clock();
  }, 1000);
}

clock();

const tabsItem = document.querySelectorAll(".tabsItem");
const tabsContentItem = document.querySelectorAll(".tabsContentItem");

console.log(tabsItem);

tabsItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeAndAddActiveClass(item, tabsItem);
    removeAndAddActiveClass(tabsContentItem[index], tabsContentItem);
  });
});

function removeAndAddActiveClass(element, arr) {
  arr.forEach((item) => {
    item.classList.remove("active");
  });
  element.classList.add("active");
}

// setInterval(() => {
//     clock()
// }, 1000);
let stopwatchHours = document.querySelector(".stopwatch__hours");
let stopwatchMinutes = document.querySelector(".stopwatch__minutes");
let stopwatchSeconds = document.querySelector(".stopwatch__seconds");
let stopwatchBtn = document.querySelectorAll(".stopwatch__btn");
let startTimeOutSecondIndicator = document.querySelector(".tabsLink__span");

function timeOutSecond() {
  stopwatchSeconds.innerHTML++;
  if (stopwatchSeconds.innerHTML === "60") {
    stopwatchSeconds.innerHTML = "0";
    stopwatchMinutes.innerHTML++;
  }
  if (stopwatchMinutes.innerHTML === "60") {
    stopwatchMinutes.innerHTML = "0";
    stopwatchHours.innerHTML++;
  }
   setTimeout(() => {
    timeOutSecond()
  }, 1000);
}

stopwatchBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === "start") {
      element.addEventListener("click", () => {
        timeOutSecond()
        element.innerHTML = "stop";
        startTimeOutSecondIndicator.classList.add("active");
      });
    } else if (element.innerHTML === "stop") {
      element.addEventListener("click", () => {
        element.innerHTML = "reset";
        startTimeOutSecondIndicator.classList.remove("active");
        startTimeOutSecondIndicator.classList.add("active_clear");
      });
    } else if (element.innerHTML === "reset") {
      element.addEventListener("click", () => {
        element.innerHTML = "start";
        startTimeOutSecondIndicator.classList.remove("active_clear");
        stopwatchSeconds.innerHTML = "0";
        stopwatchMinutes.innerHTML = "0";
        stopwatchHours.innerHTML = "0";
      });
    }
  });
});

// if (stopwatchBtn.innerHTML === "start") {
//   stopwatchBtn.addEventListener("click", () => {
//     timeOutSecond();
//     stopwatchBtn.innerHTML = "stop";
//     startTimeOutSecondIndicator.classList.add("active");
//   });
// }

// if (stopwatchBtn.innerHTML === "stop") {
//   stopwatchBtn.addEventListener("click", () => {
//     stopwatchBtn.innerHTML = "reset";
//     startTimeOutSecondIndicator.classList.remove("active");
//     startTimeOutSecondIndicator.classList.add("active_clear");
//   });
// }

// stopwatchBtn.forEach((element) => {
//   element.addEventListener("click", () => {
//     if (element.innerHTML === "start") {
//       timeOutSecond();
//       startTimeOutSecondIndicator.classList.add("active");
//       stopwatchBtn.innerHTML = "stop";
//       }else if(element.innerHTML === 'stop'){
//          stopwatchBtn.innerHTML = 'reset'
//          startTimeOutSecondIndicator.classList.remove("active");
//          startTimeOutSecondIndicator.classList.add("active_clear")
//        }else if(element.innerHTML === 'reset'){
//          startTimeOutSecondIndicator.classList.remove("active_clear")
//          stopwatchBtn.innerHTML = 'start'
//        }
//     }
//   });
// });
