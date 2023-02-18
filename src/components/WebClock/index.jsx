import React, {useState} from 'react';
import "./WebClock.scss"
const WebClock = () => {
    //* Устанавливаем значение секунд, минут и часов
    const [time, setTime] = useState(new Date());
    //* Устанавливаем значение секунд, минут и часов
    let tableHours = time.getHours();
    let tableMinutes = time.getMinutes()
    //* Устанавливаем значение секунд, минут и часов
    let [second, setSecond] = useState(time.getSeconds() * 6);
    let [minutes, setMinutes] = useState(time.getMinutes() * 6);
    let [hours, setHours] = useState(time.getHours() * 6);
    setTimeout(() => {
        //Устанавливаем время в setTime и каждую секунду обновляем его значение в new Date()
        setTime(new Date());
        //* Устанавливаем значение секунд, минут и часов
        setSecond(time.getSeconds() * 6);
        setMinutes(time.getMinutes() * 6);
        setHours(time.getHours() * 6);
    }, 1000)
    //* Табы
    //* Секундомер
    const tabsItem = document.querySelectorAll(".tabsItem");
    const tabsContentItem = document.querySelectorAll(".tabsContentItem");
    //* Добавляем обработчик событий на каждый элемент
    tabsItem.forEach((item, index) => {
        //* Добавляем обработчик событий на каждый элемент
        item.addEventListener("click", () => {
            //* Удаляем класс active у всех элементов
            removeAndAddActiveClass(item, tabsItem);
            //* Удаляем класс active у всех элементов
            removeAndAddActiveClass(tabsContentItem[index], tabsContentItem);
        });
        //* Удаляем класс active у всех элементов
    });
    function removeAndAddActiveClass(element, arr) {
        //* Удаляем класс active у всех элементов
        arr.forEach((item) => {
            //* Удаляем класс active
            item.classList.remove("active");
        });
        //* Добавляем класс active
        element.classList.add("active");
    }
    //* Таймер

    let [timerSeconds, setTimerSeconds] = useState(0)
    let [timerMinutes, setTimerMinutes]= useState(0)
    let [timerHours, setTimerHours] = useState(0)

    //* Таймер

    let [timer, setTimer] = useState(0)
    let [timerId, setTimerId] = useState(0)
    let [timerStatus, setTimerStatus] = useState(false)

    const startStopwatch = () => {
        //* Если таймер не запущен, то запускаем его
        if (!timerStatus) {
            //* Запускаем таймер
            setTimerId(
                // Интервал в 10 милисекунд для точности таймера до 100 милисекунд (1/10 секунды). Также можно использовать setInterval, но тогда таймер будет иметь погрешность в 1 секунду.
                setInterval(() => {
                //* Увеличиваем таймер на 1
                setTimer(timer += 1);
                //* Устанавливаем значение секунд, минут и часов
                setTimerSeconds(Math.floor(timer / 100 % 60));
                setTimerMinutes( Math.floor(timer / 100 / 60 % 60));
                setTimerHours(Math.floor(timer / 100 / 60 / 60));
            }, 10));
            //* Устанавливаем статус таймера в true
            setTimerStatus(true);
        } else {
            //* Останавливаем таймер
            clearInterval(timerId);
            //* Устанавливаем статус таймера в false
            setTimerStatus(false);
        }
        //* Если таймер запущен, то останавливаем его
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
                        <button onClick={startStopwatch} className="stopwatch__btn">{timerStatus ? "stop" : "start"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebClock;
