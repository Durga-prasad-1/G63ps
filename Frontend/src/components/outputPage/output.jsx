import React from 'react';
import './output.css';
import { useLocation } from 'react-router-dom';

function Report(){

  const location = useLocation();
  const temp=location.state && location.state.Object;
  const TT4=temp.TT4;
  const T3=temp.T3;
  const TSH=temp.TSH;
  const Result=temp.Result;
  
  return (
    <div className='report_outerarea'>
    <div className="report_container">
      <h2 style={{ fontSize: '35px' }}>REPORT:</h2>

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
        <strong style={{ fontSize: '25px' }}>Result :</strong> <h1>{Result.charAt(0).toUpperCase() + Result.slice(1).toLowerCase()}</h1> {/*to captialize the string*/}
      </div>

      <div className="report_buttons">
        <button className='report_button'>Know More</button>
        <button className='report_button'>Diet Plan</button>
      </div>
    </div>
    </div>
  );
};

export default Report;
