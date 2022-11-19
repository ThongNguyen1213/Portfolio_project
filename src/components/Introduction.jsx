import React from 'react';
import { profilepic } from '../assets';
import { achievementTab, MediaLinks } from '../constants';
import { v4 as uuidv4 } from 'uuid';


const Introduction = () => (
    <div className="text-white bg-primary w-full pt-[100px]" id="home">
        <div className="flex justify-center sm:justify-between md:px-[137px] px-[30px] ">
            <div className="invisible sm:visible "> 
                <ul className="">
                    {MediaLinks.map((link) => (
                        <li key={link.id}
                            className="mb-[10px] cursor-pointer flex justify-center items-center disabled:filterblue filterbright hover:-translate-y-1 transition-transform duration-300 ease-out" >
                            <a href={link.url}
                            target="_blank">
                                <img className="h-[18px] w-[18px]" alt={link.name} src={link.img}/>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="w-[1px] h-[59px] mt-[13.5px] bg-brightBlue m-auto">
                </div>
            </div>

            <div className="text-center">
                <div className="">
                    <h2 className="text-[10px] md:text-[11px] mb-[8px] m-auto">Hello I'm</h2>
                </div>
                <div>
                    <h1 className="text-[25px] md:text-[28px] font-bold mb-[12px] font-orbitron">Thong M. Nguyen</h1>
                </div>
                <div>
                    <h3 className="text-[11px] md:text-[11px] mb-[19px] text-brightBlue">Front-end Developer</h3>
                </div>
                <div className="flex font-hammersmith justify-between m-auto">
                    <div className="" >
                        <button className="w-[130px] h-[34px] text-[13px] rounded-lg border-2 mr-[8px] md:mr-[11px] md:text-[12px] md:w-[126px] md:h-[29px] text-brightBlue border-brightBlue hover:border-none hover:text-primary hover:bg-brightYellow  transition-colors duration-700 ease-out btn"> Download CV</button>
                    </div>
                    <div>
                        <a href="mailto:tommynguyenkmf@gmail.com"><button className="w-[130px] h-[34px] text-[13px] md:text-[12px] md:w-[126px] md:h-[29px] text-primary bg-brightBlue rounded-lg hover:border-2 hover:border-brightYellow hover:bg-primary hover:text-brightOrange
                        transition-colors duration-700 ease-out btn"
                        >Let's talk</button></a>
                    </div>
                </div>
            </div>

            <div className="rotated flex text-brightBlue justify-center invisible sm:visible ">
                <h3 className="">Scroll down</h3>
                <div className=" w-[26px] animate-spinAroundY mt-2 "> > </div>
                <div className=" w-[26px] delay-75 animate-spinAroundY mt-2 "> > </div>
                <div className=" w-[26px] delay-150 animate-spinAroundY  mt-2 "> > </div>
            </div>
        </div>

        {/* About me */} 
        
        <div className="mt-[40px] font-b612 text-center">
            <h2 className="text-[11px] md:text-[14px] ">Get to Know</h2>
            <h1 className="text-[18px] md:text-[20px] text-brightBlue">About Me</h1>
        </div>
        <div className="block md:flex justify-center mt-[31px] mx-[50px] md:px-[175px] ">
            <div className="mx-auto md:mx-0 w-[280px] h-[280px] ">
                <img src={profilepic}
                alt="profile pic"
                className="absolute sm:w-[250px] sm:h-[250px] w-[280px] h-[280px] rounded-xl -translate-y-4 -translate-x-4 hover:-translate-y-0 hover:-translate-x-0 transition-transform duration-700 "/>
                <div className="sm:w-[250px] sm:h-[250px] w-[280px]  h-[280px] bg-gradient-to-tr bg-gradient-from-bl from-brightBlue rounded-xl">
                </div>
            </div>
            <div className="block md:ml-[116px] md:mt-0 mt-[60px] sm:mt-[100px] min-w-0">
                <div className="flex justify-center md:justify-start font-b612">
                    {achievementTab.map((achievement,index) => (
                        <a href={`#${achievement.id}`} key={uuidv4()}><div className={`flex flex-col justify-evenly items-center w-[170px] h-[100px] sm:w-[194px] sm:h-[110px] rounded-xl bg-darkBlue text-center cursor-pointer text-dimWhite ${index === achievementTab.length - 1 ? "mr-[0px]" : "mr-[7px]"} 
                        hover:bg-lessdarkBlue btn`}>
                            <img src={achievement.img}
                                alt={achievement.name}
                                className="w-[10px] h-[10px] sm:w-[14px] sm:h-[13px] filterblue" />
                            <h2 className="text-white text-[11px] sm:text-[12px] ">{achievement.name}</h2>
                            <h3 className="text-[9px] sm:text-[10px]">{achievement.content}</h3>
                        </div></a>
                    ))}
                </div>
                <div className="md:max-w-[396px] max-w-[500px] mx-auto ">
                    <p className="md:w-[396px] md:h-[143px] text-[11px] leading-8 font-b612 mt-[36px]">I am a graduated from PSU with a Biochemistry major but then soon realize coding and building website is part my passion. It was until I found Codecademy website, I started learning, build some projects from easy to difficult and my love for coding growing from there. I also enjoy watching movies, golfing and outdoor activities.</p>
                    <a href="mailto:tommynguyenkmf@gmail.com"><button className="w-[80px] h-[30px] sm:w-[103px] sm:h-[30px]  text-[10px] sm:text-[12px]  mt-[26px] font-hammersmith bg-brightBlue text-primary rounded-lg btn 
                    hover:bg-lessbrightBlue">Let's talk</button></a>
                </div>
            </div>
        </div>
    </div>   
)


export default Introduction