
  import React, {useState , useEffect } from "react";
  import { GoPencil } from "react-icons/go";
  import {CiSun } from "react-icons/ci"
  import { IoMoonOutline } from "react-icons/io5";
  import { IoIosLogOut } from "react-icons/io";
  

function Profile() {
const [DarkMode, setDarkMode] = useState(false)
const [NameInput, setNameInput] = useState("")
const [Bio, setBio] = useState("")


useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setDarkMode(true);
  }
}, []);

useEffect(() => {
  if (DarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [DarkMode]);

  const handelDarkMod = ()=>{
    setDarkMode(true);

    if (DarkMode === true) {
      setDarkMode(false)
    }else if(DarkMode===false) {
setDarkMode(true)
    } 

  };


  return (
    <>
      <section className=" flex justify-center items-center flex-col gap-5 ">

        <div className="profile flex items-center justify-center  text-[25px] text-blue-950 mt-4 relative  w-full ">

          <h2>Profile</h2>

{
  DarkMode?(<CiSun className=" cursor-pointer text-white  absolute right-5 text-3xl " onClick={handelDarkMod} />):(
  <IoMoonOutline className=" absolute right-5 text-2xl cursor-pointer " onClick={handelDarkMod} />)
}



        </div>

<div className="imgBox flex items-center justify-center w-[130px] cursor-pointer h-[130px] bg-slate-500 rounded-full relative ">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" className=" cursor-pointer rounded-full object-cover w-full h-full " alt="you" />

    <GoPencil className=" z-30 text-[22px] absolute right-3 bottom-5 text-blue-100  "/>


</div>

<div>
    <p className=" text-[18px] " > Ikrar Ansari </p>
</div>

<div className=" w-[70vw] text-left mb-3">
    <p className=" text-[18px] " > Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore numquam sed. Ratione amet aspernatur quo, voluptatum omnis autem est. </p>
</div>



<form className=" gap-6 flex  flex-col" >

<div className="nameBox relative rounded-md bg-slate-800 w-[70vw] h-auto">
    
  <input
    type="text"
    id="name"
    className="peer placeholder-transparent outline-none bg-slate-300 rounded-sm w-full h-[6vh] p-3 md:h-[8vh]"
    placeholder="Full Name"
    value={NameInput}
    onChange={(e) => setNameInput(e.target.value)}
  />

  <label
    htmlFor="name"
    className={`absolute left-2 z-0 text-gray-500 transition-all cursor-text
      ${NameInput ? 'top-[-13px] text-sm text-black' : 'top-2 md:top-3'}
      peer-focus:top-[-13px] peer-focus:text-sm peer-focus:text-black`}
  >
    Edit Name
  </label>

</div>



    <div className="nameBox relative rounded-md bg-slate-800 w-[70vw] h-auto ">
    
    <input
      type="text"
      id="bio"
      className="peer placeholder-transparent outline-none bg-slate-300 rounded-sm w-full h-[6vh] md:h-[8vh] p-3"
      placeholder="Full Name"
      value={Bio}
      onChange={(e) => setBio(e.target.value)}
    />
  
    <label
      htmlFor="bio"
      className={`absolute left-2 z-0 text-gray-500 transition-all cursor-text
        ${Bio ? 'top-[-13px] text-sm text-black' : 'top-2 md:top-3'}
        peer-focus:top-[-13px] peer-focus:text-sm peer-focus:text-black`}
    >
      Edit Bio
    </label>
  </div>
  







<div className={` w-full items-center justify-center ${Bio.length>2||NameInput.length>2 ? 'flex':"hidden"}`}>

<button className=" bg-blue-300 p-2 w-[100px] rounded-lg  "  >
  Save
</button>
</div>



</form>


<div className="cursor-pointer text-red-600 font-bold flex items-center justify-center gap-2 text-[18px] mt-11 ">

<p>Log Out</p>
<IoIosLogOut className=" text-[20px] " />

</div>


      </section>
    </>
  );
}

export default Profile;
