import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./form.css"
import radio from "../../RadiosData/radioData";
import RadioBox from "./RadioBox";
import Input from "./Input";
import Name from "./nameGender";
import { jwtDecode } from "jwt-decode";
import CircularProgress from '@mui/material/CircularProgress';

function Form(props){
    let navigate = useNavigate();
    
    let [formData, setFormData] = useState({
        Name:"",
        Age:"",
        Gender:"",
        TSH:"",
        T3:"",
        TT4:"",
        OnThyroid:"",
        OnAntithyroidMedication:"",
        QueryOnThyroxine:"",
        Sick:"",
        Pregnant:"",
        ThyroidSurgery:"",
        I131Treatment:"",
        QueryHypothyroid:"",
        QueryHyperthyroid:"",
        Tumor:"",
        Psych:"",
                
    });

    function Details(object){
        return(  <RadioBox yes={object.yes} no={object.no} key={object.key} name={object.name} set={formData} func={setFormData}/>);
    }

    async function handleSubmit(event){
        event.preventDefault();
        setFormData({
            ...formData,
        });
        // if the required value are not entered to show the message----------
        let errorMessage = [];
        let i = 0; 
        for (const key in formData){
            if(i<6 && formData[key]===""){
                errorMessage.push(key);
            }
            i+=1
        }
        function showError(errorValue){
            let p = document.querySelector(`#${errorValue}`);
            p.innerText = `Please Enter ${errorValue} value`;
            p.style.color = "red";
            p.style.paddingLeft = "10px";
        }
        // ----------------
        if (errorMessage.length!==0){
            errorMessage.map(showError);
        }
        else{
            // if the required elements 
             //======================
            //this part is for Buffer
            let mainCon = document.querySelector("#mainCon");
            mainCon.style.display = "none";
            let buffer = document.querySelector(".buffer");
            buffer.style.display = "flex";
            //======================
        const Id=jwtDecode(localStorage.getItem('token')).userId;
        formData["userId"]=Id;
        try {
            const response = await fetch("https://thyro-aid-prediction.onrender.com/prediction",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            result.TSH = formData.TSH;
            result.TT4 = formData.TT4;
            result.T3 = formData.T3;

            if(response.ok){
                // alert(result.prediction);
                const temp1={
                    Result:result.prediction,
                    TSH:result.TSH,
                    TT4:result.TT4,
                    T3:result.T3
                }
                navigate("/outputPage",{state :{ Object:temp1}});
            }
        } catch (error) {
            alert(error);
            alert(error);
        }
        console.log(formData);
    }
    }

    return(
        
            <div className="con" id="formContainer">
                <div className="main_form" id="mainCon">
                    <form id="formList" onSubmit={handleSubmit}>
                    <div className="form">
                        <div><Name set={formData} func={setFormData} /><p id="Name"></p></div>
                        <div><RadioBox yes={"yes30"} no={"no30"} key={30} name={"Gender"} set={formData} func={setFormData}/><p id="Gender"></p></div>
                        <div><Input type="number" name="Age" key="Age" set={formData} func={setFormData}/><p id="Age"></p></div>
                        {radio.map(Details)}
                        <div id="Tsh"><Input name="TSH" key="TSH" set={formData} func={setFormData}/><p id="TSH"></p></div>
                        <div id="t3"><Input name="T3" key="T3" set={formData} func={setFormData}/><p id="T3"></p></div>
                        <div id="Tt4"><Input name="TT4" key="TT4" set={formData} func={setFormData}/><p id="TT4"></p></div>                                   
                    </div>
                    <div className="button_class" >
                        <button className="_button" type="submit" value="Submit">Submit</button>
                    </div>
                    </form> 
                </div>
                <div className="buffer" style={{display:"none"}}>
                    
                        <CircularProgress />
                    
                </div>
            </div>
        
    );
}
export default Form;
