import React from 'react'

const Contact = () => {
  return (
    <div className="w-full h-[1000px] pt-[50px]" id="contact">
        <div className="text-center mt-[200px]">
            <h2 className="text-white text-[24px] sm:text-[36px] font-b612">Let's build something</h2>
            <h1 className="text-brightBlue text-[24px] sm:text-[36px] font-orbitron font-bold">TOGETHER</h1>
            <p className="text-white font-b612 text-[13px] sm:text-[12px] mt-[30px] mx-[30px]">I'm currently opened to any opportunities that you and your team are exciting about !!!</p>
        </div>
        <div className="w-[140px] h-[29px] mx-auto text-center mt-[30px] text-brightBlue t text-[15px] border-2 border-brightBlue rounded-lg cursor-pointer hover:text-white hover:bg-brightBlue btn">
            <a href="mailto:tommynguyenkmf@gmail.com"><button>Let's go</button></a>
        </div>
        <footer className="text-white text-[10px] ml-[100px] mt-[500px]"><small>Copyright &copy; 2022 ThongMinhNguyen. All Rights Reserved</small></footer>
    </div>
  )
}

export default Contact