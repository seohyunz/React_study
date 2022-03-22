import React from "react";
import  ReactDOM  from "react-dom";
import { useState } from "react";

const Counter = function(props){
    const [count, setCount] = useState(0)
    const [text, setText] = useState("a")
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count +1)}>증가</button>
            <button onClick={() => setCount(count -1)}>감소</button>
            <h1>{text}</h1>
            <button onClick={() => setText(text +"a")}>a 추가</button>
        </div>
    )
}


const UserProfile = function(props){
    const [userName,setUserName] = useState("name")
    const [userAge,setUserAge] = useState(100)
    const [emailAddress, setsUseremailAddress] = useState(null)

    return(<div>
        {userName} {userAge} {emailAddress}

    </div>)
}


ReactDOM.render(<UserProfile/>, document.getElementById('root'));

