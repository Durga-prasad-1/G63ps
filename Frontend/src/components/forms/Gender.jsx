import React from "react";
function Gender(props){
    function handle(event){
        props.func({
            ...props.set,
            [event.target.name]: event.target.value,
        });
    }
    return(

            <div className="box" id="gender">
                <p className="sub_title">Gender: </p>
                <br/>
                <label htmlFor="Genders_id">
                    <input  className="input" list="Genders" onChange={handle} name="Gender" id="Genders_id"/>
                    <datalist id="Genders">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </datalist>
                    <br/>
                </label>
            </div>  

    );
}
export default Gender;