import React, { useEffect, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import { UserData } from "../../../MockData/UserData.js"
import FirstNoteImg from "../../assets/FirstNoteImg.png"


 

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

                    <p className="text-2xl backdrop-blur-sm text-white p-1 font-bold w-full absolute top-0  ">{userData.title}</p>

                    <p className="text-md absolute top-9 left-2 ">{userData.time}</p>

                   
                  </div>


                )) : (
                  <div className=" flex items-center justify-center w-screen h-screen   " >
<Link to="/create" className="  w-auto  flex items-center justify-center  " >
<img src={FirstNoteImg} alt="image" loading="lazy" className=" w-[50%] h-[50%] " />
</Link>
                    
                  </div>
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
