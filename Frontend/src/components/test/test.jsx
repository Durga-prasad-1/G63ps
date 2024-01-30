import React, { useState } from 'react';
import TestQuestions from '../../RadiosData/testQuestions';
import "./test.css";
import RadioBox from '../forms/RadioBox';

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
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const symptoms = [
        "Have you noticed any swelling or enlargement in your neck?",
        "Do you have unexplained weight loss/gain despite normal eating habits?",
        "Do you experience excessive sweating or heat intolerance?",
        "Have you experienced thinning or brittle hair recently?",
        "Do you have a rapid or irregular heartbeat?",
        "Do you often feel tired or fatigued?",
        "Have you noticed changes in your bowel habits, such as constipation or diarrhea?",
        "Do you have muscle weakness or joint pain?",
        "Do you experience frequent mood swings or irritability?",
        "Do you have difficulty concentrating or remembering things?",
        "Do you have dry skin or hair?",
        "Do you often feel cold, especially in your hands and feet?",
        "Have you experienced changes in your appetite?",
        "Have you had trouble sleeping or insomnia?",
        "Do you have a hoarse or raspy voice?",
        "Have you experienced swelling in your legs, ankles, or face?"
    ];

    const handleAnswerChange = (index, answer) => {
        setAnswers({ ...answers, [index]: answer });
    };

    const handleSubmit = () => {
        // Handle submission logic here
        console.log(answers);
        console.log(Object.values(answers));
        setCurrentQuestionIndex(currentQuestionIndex + 1);
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
        </div>
    );
}

export default ThyroidTestForm;