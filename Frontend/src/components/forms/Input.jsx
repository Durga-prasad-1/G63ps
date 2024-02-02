import React from "react";

function Input(props){
    function handle(event){
        props.func({
            ...props.set,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.name);
    }
    let inputVal = props.name;
    return (
        <div className="box">
            <p className="sub_title">{props.name+":"}</p>
            <br/>
            <input onChange={handle} name={props.name} className="input" value={props.set[inputVal]} type="text" placeholder={"Enter "+props.name+" value"} required/>
        </div>
    );
}
export default Input;