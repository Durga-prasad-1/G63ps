import React from 'react';
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function CheckToastify(prop){
    let navigate = useNavigate();
        if (prop.message) {
            // Show toast with the message
            toast.success(prop.message,{
                position:"top-center"
            });
            navigate('.', { replace: true }); // this is to remove query params from url
        }
        <ToastContainer autoClose={3000}/>
}