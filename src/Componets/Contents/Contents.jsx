import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../../MockData/UserData.js"


function Contents() {
  const [Data, setData] = useState([]);


  useEffect(() => {
    setData(UserData);
  }, []);


  const navigate = useNavigate()

  const selectPost = (id)=>{
    navigate(`/note/${id}`)
    // console.log(id);
  }



  return (
    <header className=" flex items-center justify-center w-full h-auto  mb-[10%] pb-5 ">
      <main className="  w-full flex items-center justify-center   ">
      <section className="pt-1">
        <header className="flex items-center justify-center w-full h-auto  mb-[10%] pt-10 pb-5">
          <main className="w-full flex items-center justify-center flex-col">
          <section>
              {
                UserData.length > 0 ? UserData.map((userData) => (
                  <div key={userData.id} onClick={()=>selectPost(userData.id)} className="imgbox bg-gray-400 w-[70vw] h-[30vh] mt-10 relative rounded  text-white overflow-hidden md:h-[50vh] md:w-[60vw] cursor-pointer " >


<img src={userData.image} className=" z-0 w-full h-full  block object-cover " alt="image"  />

                    <p className="text-2xl text-red-700 absolute top-0 left-2 ">{userData.title}</p>

                    <p className="text-md absolute top-9 left-2 ">{userData.time}</p>

                   
                  </div>


                )) : (
                  <p className="text-white text-xl mt-10">No Results Found</p>
                )
              }
            </section>
          </main>
        </header>
      </section>
      </main>
    </header>
  );
}

export default Contents;
