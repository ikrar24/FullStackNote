import React, { useState } from "react";
import signUpBg from "../../assets/signUpBg.png";
import { Link } from "react-router-dom";
import {IoMdEye ,  IoMdEyeOff} from "react-icons/io"

function ForgetPassword() {
  const [NameInput, setNameInput] = useState("");
  const [EmailInput, setEmailInput] = useState("");
  const [PasswordInput, setPasswordlInput] = useState("");
  const [EyeToggle, setEyeToggle] = useState(false);



//  handling SignUp Data 

const signUpData = (e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data); 
}


  return (
    <section>
      <main
        className={` bg-no-repeat bg-cover bg-center w-screen h-screen  flex items-center justify-center `}
        style={{ backgroundImage: `url(${signUpBg})` }}
      >


{/* form Handling */}

        <form className=" flex flex-col gap-3 w-full h-full items-center justify-center p-5  " onSubmit={signUpData} >
          <h1 className="text-3xl mb-4  "> Forget Password </h1>


{/* input Div  */}
           <div className=" backdrop-blur-xl md:w-1/2 md:h-1/2 h-1/2 w-[90%] flex items-center justify-center flex-col gap-4  rounded-md shadow-2xl ">


                {/* Name Input  */}
            <div className="relative w-full h-auto  flex items-center justify-center  ">
              <input
                type="text"
                id="name"
                name="name"
                className=" peer w-[90%] h-[100%] rounded-[4px] border border-solid border-black outline-none p-2   "
                required
                value={NameInput}
                onChange={(e)=>{
                  setNameInput(e.target.value)
                }}
              />

              <label
                htmlFor="name"
                className={` ${NameInput.length > 0 ? "top-[-25%] text-[12px] text-red-500" : "top-2"}  absolute md:left-11 left-9 peer-focus:top-[-25%] peer-focus:text-[12px] transition-all text-gray-400 peer-focus:text-red-500 bg-white pl-2 pr-2 rounded-sm cursor-text  `}
              >
                {" "}
                Full Name <span>*</span>{" "}
              </label>
            </div>


             {/* Email Input  */}
            <div className="relative w-full h-auto  flex items-center justify-center  ">
              <input
                type="email"
                id="email"
                name="email"
                className=" peer w-[90%] h-[100%] rounded-[4px] border border-solid border-black outline-none p-2   "
                required
                value={EmailInput}
                onChange={(e)=>{
                  setEmailInput(e.target.value);
                }}
              />

              <label
                htmlFor="email"
                className={`${EmailInput.length > 0 ? "top-[-25%] text-[12px] text-red-500" : "top-2"}  absolute md:left-11 left-9 peer-focus:top-[-25%] peer-focus:text-[12px] transition-all text-gray-400 peer-focus:text-red-500 bg-white pl-2 pr-2 rounded-sm cursor-text  `}
              >
                {" "}
                Email<span>*</span>{" "}
              </label>
            </div>





           {/* Sign Up Btn  */}
            <button className=" bg-black w-[80%] h-[15%] text-white ">
              Forget
            </button>


               {/* If Alredy Account  */}
            <div className=" text-sm ">
              <p>
                If You Have Already An Account{" "}
                <Link to="/login" className=" text-green-700 ">
                  login
                </Link>{" "}
              </p>
            </div>



          </div>
        </form>
      </main>
    </section>
  );
}

export default ForgetPassword;
