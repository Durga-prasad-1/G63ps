import React,{useEffect,useState} from 'react';
import './output.css';
import { useLocation } from 'react-router-dom';

function Report(){
  const [diet,setDietPlan] = useState({});
  const [oneTimeShow,setOneTime] = useState(true); //this is for not showing the dietplan plan after clicking multiple times
  const location = useLocation();
  const temp=location.state && location.state.Object;
  const TT4=temp.TT4;
  const T3=temp.T3;
  const TSH=temp.TSH;
  const Result=temp.Result;
  const suggestBody = {"type":Result};
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://thyro-aid-prediction.onrender.com/suggestions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(suggestBody),
            });
            if(response.ok){
              const suggestion=await response.json();
              console.log(suggestion);
              setDietPlan(suggestion);
            }else{
              console.log(response);
            }
          } catch (error) {
            console.log(error);
        }
    };

    fetchData(); // Call the fetchData function
}, []);
    
    function showDiet(){
      console.log(oneTimeShow);

      let divElement = document.querySelector("#dietContainer");
      
      divElement.style.display="block";
      let dietList = document.querySelector("#listDiet");
      dietList.style.listStyleType = "none";
      let exerciseList = document.querySelector("#listExercise");
      exerciseList.style.listStyleType = "none";
      if(diet){
          if(oneTimeShow){
          for (let statement of diet["dietPlan"]){
            let newLi = document.createElement('li');
            newLi.innerText = statement;
            dietList.append(newLi);
          }
          for (let statement of diet["exercise"]){
            let newLi = document.createElement('li');
            newLi.innerText = statement;
            exerciseList.append(newLi);
          }
          setOneTime(false);
        }
      }
      divElement.scrollIntoView({behavior:"smooth"});
    }

  return (
    <div className='report_outerarea'>
    <div className="report_container">
      <h2 >REPORT:</h2>

      <table className='report_table'>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Normal Range</th>
            <th>Units</th>
            <th>Provided Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T3</td>
            <td>0.86-1.92</td>
            <td>ng/ml</td>
            <td>{T3}</td>
          </tr>
          <tr>
            <td>T4</td>
            <td>5.5-11.1</td>
            <td>&#956;g/dL</td>
            <td>{TT4}</td>
          </tr>
          <tr>
            <td>TSH</td>
            <td>0.7-6.4</td>
            <td>&#956;IU/mL</td>
            <td>{TSH}</td>
          </tr>
        </tbody>
      </table>

      <div className="report_result">
        <strong >Result :</strong> <p>{Result.charAt(0).toUpperCase() + Result.slice(1).toLowerCase()}</p> {/*to captialize the string*/}
      </div>

      <div className="report_buttons">
        {/* <button className='report_button'>Know More</button> */}
        <button className='report_button' onClick={showDiet} >Diet Plan</button>
      </div>
    </div>
      <div id='dietContainer'>
          <h3 id='dietPlan'>Diet Plan:</h3>
          <ol id='listDiet'></ol>
          <h3 id='exercise'>Exercises:</h3>
          <ol id='listExercise'></ol>
      </div>
    </div>
  );
};

export default Report;
