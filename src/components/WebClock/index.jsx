import React, {useEffect, useState} from 'react';
import "./WebClock.scss"
const WebClock = () => {
    const [time, setTime] = useState(new Date());
    let tableHours = time.getHours();
    let tableMinutes = time.getMinutes()
    let [second, setSecond] = useState(time.getSeconds() * 6);
    let [minutes, setMinutes] = useState(time.getMinutes() * 6);
    let [hours, setHours] = useState(time.getHours() * 6);
    setTimeout(() => {
        setTime(new Date());
        setSecond(time.getSeconds() * 6);
        setMinutes(time.getMinutes() * 6);
        setHours(time.getHours() * 6);
    }, 1000)
    //* Секундомер
    const tabsItem = document.querySelectorAll(".tabsItem");
    const tabsContentItem = document.querySelectorAll(".tabsContentItem");
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

    let [timerSeconds, setTimerSeconds] = useState(0)
    let [timerMinutes, setTimerMinutes]= useState(0)
    let {timerHours, setTimerHours} = useState(0)


    const [isStart, setIsStart] = useState(false)
    const startTimer = () => {
        setTimerSeconds(timerSeconds + 1);
        if (timerSeconds === 60) {
            setTimerMinutes(timerMinutes + 1);
            setTimerSeconds(0)
        }
        if (timerMinutes === 60) {
            setTimerHours(timerHours + 1);
            setTimerMinutes(0)
        }
    }
    if(isStart){
        setTimeout(startTimer, 1000)
    }
    const setStart = () => {
        if (isStart) {
            setIsStart(false)
        } else {
            setIsStart(true)
            startTimer()
        }
    }
    return (
        <div>
            <div className="tabsPanel">
                <ul className="tabsLinks">
                    <li className="tabsItem active"><a href="#" className="tabsLink">Часы</a></li>
                    <li className="tabsItem">
                        <a href="#" className="tabsLink">Секундомер
                            <span className="tabsLink__span"></span>
                        </a>
                    </li>
                </ul>
                <div className="tabsContent">
                    <div className="clock tabsContentItem active">
                        <div className="arrowClock">
                            <div className="arrowClockNumber">
                                <div className="arrowClockNumber__num arrowClockNumber__num_12">12</div>
                                <div className="arrowClockNumber__arr arrowClockNumber__arr_1"></div>
                                <div className="arrowClockNumber__arr arrowClockNumber__arr_2"></div>
                                <div className="arrowClockNumber__num arrowClockNumber__num_3">3</div>
                                <div className="arrowClockNumber__arr arrowClockNumber__arr_4"></div>
                                <div className="arrowClockNumber__arr arrowClockNumber__arr_5"></div>
                                <div className="arrowClockNumber__num arrowClockNumber__num_6">6</div>
                                <div className="arrowClockNumber__arr arrowClockNumber__arr_7"></div>
                                <div className="arrowClockNumber__arr arrowClockNumber__arr_8"></div>
                                <div className="arrowClockNumber__num arrowClockNumber__num_9">9</div>
                                <div className="arrowClockNumber__arr arrowClockNumber__arr_10"></div>
                                <div className="arrowClockNumber__arr arrowClockNumber__arr_11"></div>
                            </div>
                            <div className="s" style={{transform: `rotate(${second}deg)`}}></div>
                            <div className="m" style={{transform: `rotate(${minutes}deg)`}}></div>
                            <div className="h" style={{transform: `rotate(${hours}deg)`}}></div>
                        </div>
                        <div className="numberClock">
                            <div className="hours">{tableHours}</div>
                            <div className="minutes">{tableMinutes}</div>
                        </div>
                    </div>
                    <div className="stopwatch tabsContentItem ">
                        <div className="stopwatch__clock">

                            <div className="stopwatch__clock-description">
                                <div className="stopwatch__hours">{timerHours ? timerHours : 0}</div>
                                Час.
                            </div>
                            <div className="stopwatch__clock-description">
                                <div className="stopwatch__minutes">{timerMinutes}</div>
                                Мин.
                            </div>
                            <div className="stopwatch__clock-description">
                                <div className="stopwatch__seconds">{timerSeconds}</div>
                                Сек.
                            </div>
                        </div>
                        <button onClick={setStart} className="stopwatch__btn">{isStart ? "stop" : "start"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebClock;
