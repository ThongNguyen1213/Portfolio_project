import React from 'react';
import { logotn, close, menu } from '../assets';
import { navLinks } from '../constants';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 20) {
           return navbar.style.backgroundColor = "#1A5665";
        } else {
           return navbar.style.backgroundColor = "#002531";
        }
    })
    
    const removeNav = ({target}) => {
        if(!target.closest('#sidebar') && (toggle === true)) {
            setToggle(false);
        }
    }
    document.onclick = removeNav;

  return (
        <div className="fixed w-full transition-colors duration-500 ease-in flex items-center justify-between md:px-[147px] z-40 sm:px-[40px]"
            id="navbar">
                <img src={logotn}  
                    className="w-[50px] h-[45px] ml-[20px] sm:ml-0"/>
                <ul className="text-morebrightBlue hidden text-[10px] font-orbitron sm:flex items-center ">
                    {navLinks.map((nav,index) => (
                        <li key={nav.id}
                            className={`hover:text-brightYellow  transition-colors duration-200 ease-out ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[17px]'}`}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                
                <div className="sm:hidden flex justify-end" id="sidebar">
                    <img src={toggle ? close : menu}
                        alt="menu"
                        id="menu"
                        className={` ${toggle ? 'rotateRight filterblue' : 'rotateLeft' } w-[28px] h-[28px] mr-[20px] px-[2px] object-contain cursor-pointer z-40`}
                        onClick={() => setToggle((prev) => !prev)}/>
                    <div className={`${toggle ? 'visible' : 'hidden' } flex fixed mt-[36px] w-[150px] xs:w-[200px] h-[1000px] z-10 bg-lessdarkBlue sidebar`}
                        >
                        <ul className="flex flex-col text-[12px] mt-[50px] font-orbitron ">
                            {navLinks.map((nav,index) => (
                                <li key={nav.id}
                                    className="mb-[20px] ml-[20px] text-morebrightBlue hover:text-brightYellow  transition-colors duration-200">
                                    <a href={`#${nav.id}`}
                                        onClick={() => setToggle(false)}>. {nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>          
        </div>
  )
}

export default Navbar





// const Navbar = () => {
//     const [toggle, setToggle] = useState(false);
//     return (
//         <nav className="relative w-full flex py-6 justify-between items-center navbar">
//             <div className=" justify-between items-center">
//                 <img src={logoinitial} alt="tn"
//                     className="w-[80px] h-[60px] px-2"
//                 />
//             </div>
            
//             <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[5]">
//                 {navLinks.map((nav, index) => (
//                     <li key={nav.id}
//                         className={`font-orbitron font-normal cursor-pointer text-[16px] mr-10 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-brightBlue`}
//                     >
//                         <a href={`#${nav.id}`}>
//                             {nav.title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>

//             <div className="sm:hidden flex flex-1 justify-end items-center" >
//                 <img 
//                 src={toggle ? close : menu}
//                 alt="menu"
//                 className="w-[25px] h-[25px] object-contain"
//                 onClick={() => setToggle((prev) => !prev)}
//                 /> 
//             </div>
//             <div className="absolute z-[0] w-[40%] h-[400%] top-10 right-0 blue__gradient"/>
//         </nav>
//     )
// }
    


// export default Navbar