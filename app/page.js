"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = ()=>{
    toast.success('🦄 LOGiN Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <>
    <div>
        <button className='border-transparent px-[20px] py-[10px] bg-blue-500 text-white font-semibold rounded-md' onClick={notify}>Login</button>
        <ToastContainer />
    </div>
    </>
  )
}

export default page