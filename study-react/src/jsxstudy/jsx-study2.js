import React from "react";
import  ReactDOM  from "react-dom";

const div = <div>

    {true}
    {false}
    {undefined}
    {null}
    
    
</div>

const unreadMessages=[];
const div2 = <div>
    <h1>Hello!</h1>
    {/* 만약 읽지 않은 메시지가 있다면 경고문을 출력 */}
    {
        unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2>
    }    
</div>


function conditionalRender(age) {
    if(age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}

const div3 =<div>
    {conditionalRender(18)}

</div>


const age = 20
const div4=<div>
    <>{age >= 20 ? <div>성인 </div>:<div>미성년자</div>}</>
    
</div>



const mystyle ={color: "red", backgroundColor: "lightblue"};
const h1 = <h1 style = {mystyle}>
    Hello Style!
</h1>

ReactDOM.render(h1, document.getElementById('root'));


