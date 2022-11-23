import React from 'react'
import { loadingicon } from '../assets';
import { useEffect } from 'react';

const Preloader = () => {
      // window.addEventListener('load', () => {
  //   const loader = document.getElementById('preloader');
  //   loader.style.display = 'none';
  // })

  // Access the svg file path
  useEffect(() => {
    let paths = document.querySelectorAll("svg path");
    let i = 0;
    paths.forEach((item, index) => {
  
      i++;
      const pathLength = item.getTotalLength();
      item.setAttribute("stroke-dasharray", pathLength);
      item.setAttribute("stroke-dashoffset", pathLength);

      item.innerHTML = "<animate attributeName='stroke-dashoffset' begin= '0s' dur='2s' to='0' fill='freeze' />";

      console.log(index, pathLength, item.innerHTML);
      })
  })
  
 
  // console.log(paths);

  // const paths = ref.current
  return (
    <div className="bg-black w-[100%] h-[100%] fixed z-[50] runningUp">
          <div className=" flex h-full items-center justify-center ">
              <svg width="230" height="142" viewBox="0 0 230 142"  fill="none" className="w-[100px] h-[80px] sm:w-[150px] sm:h-[100px]" xmlns="http://www.w3.org/2000/svg">
                <path  d="M189 0H229.5V79.5H228.5V1H190V25H189V0Z" stroke="#28BCE0"/>
                <path d="M0 0.5H85V1.5H1V40H19V41H0V0.5Z" stroke="#28BCE0"/>
                <path d="M41.5 41.5H24.5V40.5H42.5V115H41.5V41.5Z" stroke="#28BCE0"/>
                <path d="M85.5 7.5H84.5V140.5H43V122H42V141.5H85.5V7.5Z" stroke="#28BCE0"/>
                <path d="M134.5 66.6623V104.5H135.5V69.3377L197.772 141H230V87H229V140H198.228L134.5 66.6623Z" stroke="#28BCE0"/>
                <path d="M97 140.5V49H96V141.5H135.5V111.5H134.5V140.5H97Z" stroke="#28BCE0"/>
                <path d="M96 0.5V42H97V1.5H129.763L189.5 74.399V31H188.5V71.601L130.237 0.5H96Z" stroke="#28BCE0"/>
              </svg>
              <h3 className="font-orbitron ml-[20px] text-[10px] text-brightBlue animate-pulse transition duration-75">Loading . . .</h3>
          </div>
      </div>
  )
}

export default Preloader