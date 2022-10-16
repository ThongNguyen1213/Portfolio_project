import { useState } from 'react';
import { logoinitial, menu, close } from '../assets';
import { navLinks } from '../constants';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="relative w-full flex py-6 justify-between items-center navbar">
            <div className=" justify-between items-center">
                <img src={logoinitial} alt="tn"
                    className="w-[80px] h-[60px] px-2"
                />
            </div>
            
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[5]">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-orbitron font-normal cursor-pointer text-[16px] mr-10 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-brightBlue`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center" >
                <img 
                src={toggle ? close : menu}
                alt="menu"
                className="w-[25px] h-[25px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
                /> 
            </div>
            <div className="absolute z-[0] w-[40%] h-[400%] top-10 right-0 blue__gradient"/>
        </nav>
    )
}
    


export default Navbar