import React from "react";
function Gender(props){
    function handle(event){
        props.func({
            ...props.set,
            [event.target.name]: event.target.value,
        });
        console.log(event.target.value);
        console.log(event.target.name);
    }
    return(

            <div className="box" id="gender">
                <p className="sub_title">Gender: </p>
                <br/>
                <label htmlFor="Genders_id">
                    <input  className="input" list="Genders" onChange={handle} name="Gender" id="Genders_id"/>
                    <datalist id="Genders">
                        <option value="male">Male</option>
                        <option value="female">Female</option>                        
                    </datalist>
                    <br/>
                </label>
            </div>  

    );
}
export default Gender;