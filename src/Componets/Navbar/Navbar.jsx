import React from "react";
import {CiHome} from "react-icons/ci";
import {CiSearch , CiCirclePlus} from "react-icons/ci";
import { Link } from "react-router-dom";
function Navbar({className }) {
  return (
    <header className={` ${className} flex items-center justify-center fixed bottom-0  w-full `}>
      <section className=" w-full ">
        <nav className=" flex items-center justify-around dark:bg-black bg-blue-400 w-full text-[25px] p-2 gap-2 ">
             <li><Link to="/"> <CiHome/> </Link></li>
             <li><Link to="/search"> <CiSearch/> </Link></li>
             <li><Link to="/create"> <CiCirclePlus/> </Link></li>
            
             <li className=" border border-black border-solid rounded-full w-[40px] h-[40px] overflow-hidden flex items-center justify-center "><Link to="/profile"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" alt="you" loading="lazy" className=" object-fill block " /> </Link></li>
            

        </nav>
      </section>
    </header>
  );
}

export default Navbar;
