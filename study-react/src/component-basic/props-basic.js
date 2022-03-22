import { render } from "@testing-library/react";
import React from "react";
import  ReactDOM  from "react-dom";

const ComponentWithProp = function(props){
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}
//value

/*
const Getting = function(name){
    console.log(name)
    return <h1>{JSON.stringify(name)}</h1>
} */

function Getting(props){
    return <h1>Hello, {props.name}</h1>
}

/*
function Getting(props){
    return <h1>Hello, {name} {age}</h1>
}
ReactDOM.render(<Getting name = "김미림" age={20}/> ,document.getElementById('root'));  <-- 객체 전달시
*/

const PersonProfile = function({ name, age, gender, profile, highlight }) {
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}
const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}
const { name, gender, ...rest } = anotherPerson
console.log(rest) // { age: 28, profile: '...' }


React.render(
    <div>
        {/*<PersonProfile
        name='Jane' age= {28}
        gender= 'female'
        profile= 'https://randomuser.me/api/portraits/women/75.jpg' />
*/}
    <PersonProfile {...anotherPerson}/>

    {/* 이것과 같다 
        name = {anotherPerson.name}
        age = {anotherPerson.age}
        gender = {anotherPerson.gender}
        profile = {anotherPerson.profile}
    */}
    
    </div>,
    document.getElementById("root"));




