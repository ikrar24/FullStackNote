import React from 'react'

function CreatePost() {
  return (
  <>
  <form>
  <main className=" flex flex-col justify-center items-center " > 

    <div className=" text-center mt-4 text-[30px] text-blue-950 dark:text-white " >
    <h1>Create Your Notes</h1>
    </div>



<textarea className="bg-gray-100 dark:text-black dark:bg-slate-400 rounded-sm mt-2 w-[90vw] md:w-[70vw] h-[50vh] outline-none ml-2 mr-2 p-3 placeholder:text-gray-600  text-[20px] " placeholder="Write Your Notes"  id="" cols="30"  rows="10"></textarea>

<input type="file" className="bg-blue-100 p-3 mt-3 rounded cursor-pointer dark:bg-slate-400  " />

<button className=" p-2 w-[50%] rounded-sm text-[20px] bg-slate-300 mt-5 dark:bg-gray-600 " > Create </button>


  </main>

  </form>
  
  </>
  )
}

export default CreatePost