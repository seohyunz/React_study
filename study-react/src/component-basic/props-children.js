import { render } from "@testing-library/react";
import React, { Children } from "react";
import  ReactDOM  from "react-dom";
import PropTypes from 'prop-types'

function SloMachitne({s1,s2,s3}){
    const allSeven = allSame && s1 ==="7"
    return(
            <div>
                <div>{s1} {s2} {s3}</div>{
                    sallSame && 
                    <p style={allSeven ? {color: "red"}:null}></p>
                }

            </div>
    )
}

/*(ReactDOM.render{
    <div>
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
        <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
        <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
    </div>
}
*/


ReactDOM.render( <Children>Hello</Children>   ,document.getElementById('root'));
