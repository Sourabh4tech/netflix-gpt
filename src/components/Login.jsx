import Header from "./Header";
import {validateData}from "../utils/validate"
import { useState,useRef } from "react";
const Login=()=>{
    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const fullName=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const toggleSignInButton=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick=()=>{
        //validate the form data
const msg=validateData(fullName.current.value,email.current.value,password.current.value);
setErrorMessage(msg);

    }
    return(<div>
<Header/>
<div className="absolute">
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg"
alt="bg"/>
</div>

<form onSubmit={(e)=>e.preventDefault()}className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
<h1 className="font-bold text-3xl py-4"> {isSignInForm?"Sign In":"Sign Up"}</h1>
{!isSignInForm && <input type="text"ref={fullName} placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
    <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
    <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
    <p className="font-bold text-lg text-red-600">{errorMessage}</p>
    <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
    <p className="py-4 cursor-pointer" onClick={toggleSignInButton}>{isSignInForm?"New to Netflix?Sign up now":"Already a registered user.SignIn"}</p>
</form>

    </div>);
};
export default Login;