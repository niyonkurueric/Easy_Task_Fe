import React from 'react'

const Login=()=>{
  return (
  <>
  <div className='bg-[rgb(22,41,99)] h-[100vh] flex justify-center items-center'>
    <div className='w-[400px] h-[57%] bg-[rgb(150,133,158)] rounded-md shadow-lg border '>
      <div className='w-[100px] h-[100px] rounded-full mx-auto bg-red-50 mt-10 text-center'></div>

      <div className='mt-7 ml-7'>
        <div className='w-[340px] h-[40px]  bg-white rounded'>
           <i className="bi bi-person-fill text-[30px]">
        <input type="text" className='w-[300px] h-[35px] focus:!outline-none' placeholder='Username' />
        </i>
        </div>
         <div className='w-[340px] h-[40px] mt-7 bg-white rounded'>
          <i className="bi bi-lock-fill text-[30px]">
         <input type="text" className='w-[200px] h-[30px] focus:outline-none  '  placeholder='Password'/>
        </i>
        </div>
      </div>

      <div className='mt-5 ml-7 flex gap-20 text-white text-border'>
        <div>
         <input type="checkbox" name="rememberMe" className='h-3 w-3'/>
         <b> Remember Me</b>
        </div> 
       <div>
        <i>Forgot Password</i>
       </div>
      </div>
      <div className='mt-5 ml-7'>

        <button className='bg-[rgb(10,6,91)] w-[300px] pr-10 text-center ml-6 h-10 text-[#fff] rounded-[10px]'><b>LOGIN</b></button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Login