import React from "react";
function RadioBox(props){
    let h = props.name;
    if (h.indexOf('?')>-1){ // this code is for the "test" file data retrive to useState
        h.replace('?','')
    }
    let joinName = h.replaceAll(" ",""); // removing "-" from name to access for object of formData
    // console.log(joinName);
    //-------------start of test form code-----------
    if (joinName.indexOf('.')>-1){
        let fullstop = joinName.indexOf('.');
        joinName = "S" + joinName.slice(0,fullstop);
    }


    function handle(event){
        props.func({
            ...props.set,
            [event.target.name]: event.target.value,
            
        });
        // console.log(props.set)
    }
    let des = "",des2="";
    if (props.name==="Gender"){
        des = "Female";
        des2 = "Male";
    }
    else{
        des="Yes";
        des2="No";
    }

    return(<div className="box">
    <p className="sub_title">{props.name}</p>
    <br/>
    <div className="radio-buttons-container">
    <input type="radio" name={joinName} className="radio-button__input" onChange={handle} value="1" id={props.yes} />
    <label htmlFor={props.yes} className="radio-button__label">
        <span className="radio-button__custom"></span>{des}
        
        </label>

        <input type="radio" name={joinName} className="radio-button__input" onChange={handle} value="0" id={props.no}/>
        <label htmlFor={props.no} className="radio-button__label">
            <span className="radio-button__custom"></span>{des2}
            
        </label>
</div>
</div> 
);
}

export default RadioBox;