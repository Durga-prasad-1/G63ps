import React from "react";
function Name(props){
    function handle(event){
        props.func({
            ...props.set,
            [event.target.name]: event.target.value,
        });
        
        // console.log(event.target.value);
        // console.log(props.set)
    }
    return(            
        <div className="box" id="name">
        <p className="sub_title">Name: </p>
        <br/>
    <label htmlFor="name">                                                         
        <input className="input" onChange={handle} name="Name" value={props.set.Name}  type="text" id="name" placeholder="Enter name.."/>  
        <br/>                                                           
    </label>  
    </div>            

);
}

export default Name;