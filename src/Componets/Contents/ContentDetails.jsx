import React, { useState , useEffect,useRef } from "react";
import { UserData } from "../../../../MockData/UserData"; 
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaBars  } from "react-icons/fa";
import { IoClose  } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { MdDelete } from "react-icons/md";



function ContentDetails() {
  const [BarshToggale, setBarshToggale] = useState(true);
  const [ isEdit , setIsedit ] = useState(false);
  const [ editInput , setEditInput ] = useState("");
  const [PopupImg, setPopupImg] = useState("");
  const [PopupImgToggle, setPopupImgToggle] = useState(false);

const inputRef = useRef(null)

  const { id } = useParams();

  const note = UserData.filter((item) => item.id === id);


  if (!note) return <p className="text-red-500"> No Result Fond </p>;
 
useEffect(() => {
  if (note.length > 0) {
    setEditInput(note[0].AllDecriptions);
  }
}, [])



useEffect(() => {
  if (isEdit && inputRef.current) {
    const el = inputRef.current;
    el.focus();



    // ✅ Move cursor to end
    el.setSelectionRange(el.value.length, el.value.length);
  }
}, [isEdit]);





const handelBtn = ()=>{
  setIsedit((prev)=>!prev); 
  
}



const imagePopup = (src)=>{
  setPopupImg(src);
  setPopupImgToggle(true);
}




const deleteImg = (item)=>{
console.log(item);
}



  return (
    <main className=" relative ">
{
 note.map((note)=>{
  return(
<div key={note.id}>

    <div className=" flex ralative items-center justify-center p-2 " >
    <Link to="/" className=" absolute text-xl left-2 ">
      {" "}
      <FaArrowLeft />{" "}
    </Link>
    <h1 className=" text-3xl  dark:text-white text-blue-950 ">
      {note.title}
    </h1>

    <FaBars
      className=" absolute right-3 text-xl cursor-pointer "
      onClick={() => {
        setBarshToggale(false);
      }}
    />
  </div>

  <section
    className={`attechement bg-blue-300 absolute top-0 w-[50vw] flex p-3 justify-center z-30 h-[91vh] 
transition-all duration-500 ease-in-out [transition-property:right] 
${BarshToggale ? "right-[-100%]" : "right-0"}
`}
  >
    <div className=" flex flex-col flex-wrap text-center sticky gap-4  ">
      <IoClose
        className=" relative right-[-90%] cursor-pointer bg text-4xl  "
        onClick={() => {
          setBarshToggale(true);
        }}
      />

      <p className=" text-xl text-black font-bold sticky left-0 ">
        {" "}
        Your Attechedments{" "}
      </p>

      <div className=" w-full relative  h-[35%] bg-black rounded-sm ">

        <img
          src={note.image}
          alt="attechments"
          loading="lazy"
          className= {` cursor-pointer block object-cover w-full h-full rounded-sm mb-3 "} `}
          onClick={()=>imagePopup(note.image)}
        />

      </div>
    </div>
  </section>







{/* Image Pop Up  */}

  <section className= {` ${PopupImgToggle?"flex":"hidden"} items-center justify-center w-full h-full bg-gray-200 fixed top-0 z-50 transition-all flex-col `} >

<IoClose className=" absolute top-5 right-5 text-4xl cursor-pointer " onClick={()=>{setPopupImgToggle(false);}} />

<div className=" overflow-hidden w-[95%] h-[70%] ">
 <img src={PopupImg} alt="attechments" loading="lazy" className=" block object-cover w-full h-full " />

</div>

<div className=" flex text-red-500 items-center justify-center text-2xl gap-2 mt-5 cursor-pointer " >
<p> Delete </p>
<MdDelete onClick={()=>{deleteImg(note.image)}} />
</div>


</section>







{/* this is pencil icons  */}

<div className=" bg-blue-200 fixed w-[50px] h-[50px] cursor-pointer flex items-center justify-center text-xl bottom-20 right-2 rounded-full " onClick={handelBtn} >
 {
  isEdit?<p className=" text-sm ">Done</p>:<GoPencil/>
 } 
</div>






<section className=" content  overflow-scroll h-[85vh] text-2xl text-left p-3 z-100 " >{
isEdit?<textarea type="text" value={editInput} onChange={(e)=>{setEditInput(e.target.value)}} ref={inputRef} className=" w-full h-[85vh] pt-2 box-border border-none outline-none 
 "></textarea>: <p>{editInput}</p>}
</section>





  </div>

  )
 })
}






</main>
  );
}

export default ContentDetails;
