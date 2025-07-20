import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { UserData } from "../../../MockData/UserData.js"

function SearchBar() {
  const [InputValue, setInputValue] = useState("");


  const filterData = UserData.filter(item =>
    item.title.toLowerCase().includes(InputValue.toLowerCase().trim())
  );

  return (
    <>
      <nav className="flex justify-center items-center  fixed z-50 w-full bg-white p-2">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 p-2 rounded-sm bg-blue-300 text-black placeholder:text-black outline-none"
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CiSearch className="absolute right-[26%] text-[25px] cursor-pointer" />
      </nav>

      <section className="pt-5">
        <header className="flex items-center justify-center w-full h-auto mb-[10%] pt-10 pb-5">
          <main className="w-full flex items-center justify-center flex-col">
            <section>
              {
                filterData.length > 0 ? filterData.map((userData) => (

                  <div key={userData.id} className="imgbox bg-gray-400 w-[70vw] h-[30vh] mt-10 relative rounded  text-white overflow-hidden md:h-[50vh] md:w-[60vw] ">


<img src={userData.image} className=" z-0 w-full h-full  block object-cover " alt="image" />

                    <p className="text-2xl backdrop-blur-sm text-white font-bold p-1 w-full  absolute top-0  ">{userData.title}</p>

                    <p className="text-md absolute top-9 left-2 ">{userData.time}</p>

                   
                  </div>


                )) : (
                 <div className=" flex items-center justify-center w-screen h-screen flex-col " >
                  <img
  src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"

  loading="lazy" 

  alt="404 Not Found"
/>
<h2 style={{ textAlign: 'center' }}>Oops! Page Not Found</h2>

                 </div>
                )
              }
            </section>
          </main>
        </header>
      </section>
    </>
  );
}

export default SearchBar;
