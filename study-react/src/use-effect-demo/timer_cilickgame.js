import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
//수행평가로 나올 수 있음
//10초동안 클릭을 할 수 있고 클릭하면 클릭 카운트 표시,
//10초 이후에 클릭 X
//남은시간 : n초
//클릭횟수 : n

const Counter = function(props) {
    const [count, setCount] = useState(0)
    const increase = () => setCount(prev => prev + 1)

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>클릭</button>
        </div>
        
    )
   
}

const Timer = function(props) {
    const [timerState, setTimerState] = useState({
        time: props.time,
        timeout: false
    })

    useEffect(() => {
        console.log('setInterval');
        const id = setInterval(() => {
            setTimerState(prevState => {
                console.log('from setInterval', id)
                if( prevState.time === 1 ) {
                    console.log('clearInterval (by timeout)')
                    clearInterval(id)
                    return { ...prevState, timeout: true, time: prevState.time - 1}
                } else {
                    return { ...prevState, time: prevState.time - 1 }
                }
            })
        }, 1000)
        return () => {
            console.log('clearInterval (by unmount)', id)
            clearInterval(id)
        }
    }, [])

    return (
        <div>
            {timerState.timeout ? <h2>timeout</h2> : <h2>{timerState.time}</h2>}
        </div>
    )
}

const App = function(props) {
    const [trigger, setTrigger] = useState(false)
    
    return (
        <div>
            {
                !trigger && <div>
                    <Timer time={10} />  
                    
                </div>
            }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))