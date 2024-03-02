import React, { useState } from 'react';
import TestQuestions from '../../RadiosData/testQuestions';
import "./test.css";
import RadioBox from '../forms/RadioBox';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function ThyroidTestForm() {
    const [answers, setAnswers] = useState({
        S1:"",
        S2:"",
        S3:"",
        S4:"",
        S5:"",
        S6:"",
        S7:"",
        S8:"",
        S9:"",
        S10:"",
        S11:"",
        S12:"",
        S13:"",
        S14:"",
        S15:"",
        S16:""


    });

    const handleSubmit = () => {
        const thyroidSymptomsCount = {"high": 0, "medium": 0, "low": 0};
        let noCorrectInput = 0;
        // Handle submission logic here
        console.log(answers);
        console.log([Object.values(answers)][0]);
        const symptoms = [Object.values(answers)][0];
        symptoms.forEach((val, i) => {
            if (val === '1') {
                if (i + 1 <= 3) {
                    thyroidSymptomsCount["high"] += 1;
                } else if (i + 1 <= 8) {
                    thyroidSymptomsCount["medium"] += 1;
                } else {
                    thyroidSymptomsCount["low"] += 1;
                }
            }
            else if (val === ""){
                noCorrectInput = 1;
            }
        });
        // ==========
        let resultP=document.querySelector("#result");
        if(noCorrectInput){
            toast.info("Enter the values",{position:"top-center"});
        }
        else{
        if (thyroidSymptomsCount["high"] >= 1 || thyroidSymptomsCount["medium"] >= 2 || thyroidSymptomsCount["low"] >= 3) {
            console.log("Based on your responses, it is advisable to consult a healthcare professional for a thyroid test.");
            resultP.innerText = "Based on your responses, it is advisable to consult a healthcare professional for a thyroid test.";
        } else {
            console.log("Based on your responses, you may not need to take a thyroid test at this time. However, consult a healthcare professional if you have concerns.");
            resultP.innerText = "Based on your responses, you may not need to take a thyroid test at this time. However, consult a healthcare professional if you have concerns.";
        }        
        resultP.scrollIntoView({ behavior: 'smooth' });
    }
    };
    function Details(object){
        return(<RadioBox yes={object.yes} no={object.no} key={object.key} name={object.question} set={answers} func={setAnswers} />)
    }

    return (
        // <div className="test-container">
        //     <div className="questions-wrapper">
        //         <div className="questions-column">
        //             {symptoms.map((question, index) => (
        //                 <div key={index} className="question-container">
        //                     <p>{index + 1}. {question}</p>
        //                     <div className="radio-buttons-container">
        //                         <label className="radio-button__label">
        //                             <input
        //                                 type="radio"
        //                                 className="radio-button__input"
        //                                 name={`question${index}`}
        //                                 onChange={() => handleAnswerChange(index, 'Yes')}
        //                             />
        //                             <span className={`radio-button__circle ${answers[index] === 'Yes' ? 'selected' : ''}`}></span>
        //                             Yes
        //                         </label>
        //                         <label className="radio-button__label">
        //                             <input
        //                                 type="radio"
        //                                 className="radio-button__input"
        //                                 name={`question${index}`}
        //                                 onChange={() => handleAnswerChange(index, 'No')}
        //                             />
        //                             <span className={`radio-button__circle ${answers[index] === 'No' ? 'selected' : ''}`}></span>
        //                             No
        //                         </label>
        //                     </div>
        //                     {index === symptoms.length - 1 && (
        //                         <div className="submit-container">
        //                             <button className="submit-button" onClick={handleSubmit}>Submit</button>
        //                         </div>
        //                     )}
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        <div>
        <div className="test-container">
            {TestQuestions.map(Details)}
        </div>
        <div className="submit-container">
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
        <p id='result'></p>
        </div>
    );
}

export default ThyroidTestForm;