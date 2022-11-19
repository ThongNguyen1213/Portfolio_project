import React from 'react'
import { completedProjects } from '../constants'
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {

    const chooseTarget = ({target}) => {
        const logo = target.getAttribute('chooseskill');
        document.getElementById(logo).click();
    }

    return (
        <div className="mt-[100px] pt-[50px]" id="my-project">
            <div className="mt-[40px] font-b612 text-center">
                <h1 className="text-[18px] md:text-[20px] text-brightBlue">Projects</h1>
                <h2 className="text-[11px] md:text-[14px] text-white">That I've Built</h2>
            </div>
            <div className="w-[330px] sm:w-[550px] md:w-[600px] mx-auto">
                {completedProjects.map((project) => (
                    <div key={project.id}
                        className="flex justify-center items-center relative mt-[20px] sm:mt-[50px]">
                        <img src={project.img}
                            className="w-[330px] h-[200px] left-0 rounded-lg absolute z-0 "/>
                        <div className="z-[2] ml-auto">
                            <h1 className="text-[16px] font-orbitron font-bold text-white text-right">{project.name}</h1>
                            <div className="flex justify-center items-center px-[30px] w-[330px] h-[200px] sm:w-[350px] sm:h-[125px] md:h-[115px] mt-[5px] rounded-xl border-brightBlue bg-darkBlue opacity-80 border-2 ">
                                <p className="text-[13px] sm:text-[10px] md:text-[10px] leading-6 font-b612 tracking-wider text-white">{project.description}</p>
                            </div>
                            <div className="text-right mt-[5px]">
                                {project.devtool.map((index) => (
                                    <div className="inline-block px-[3px] cursor-pointer"
                                        key={uuidv4()}>
                                       <a href="#progress-skill"><img className="w-[18px] h-[18px]  hover:animate-pulse filterbright btn" chooseskill={index.logo} src={index.icon}
                                            onClick={chooseTarget}
                                        /></a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// const Projects = () => {
//   return (
//     <div className="">
//         <h1 className="font-orbitron text-brightBlue font-bold text-[25px]">
//             Projects
//         </h1>

//         {/* Movie box */}
//         <div className="flex h-[150px] w-[1000px] mt-5">
//               {completedProjects.map((project) => (
//                 // Movie Card
//                 <div key={project.id}
//                     className="relative w-[200px] h-[150px] mr-2 cursor-pointer ">
//                       {/* Thumb */}
//                       <img src={project.thumb}
//                           alt={project.name}
//                           className="absolute w-[200px] h-[140px] top-0 left-0 opacity-100 hover:opacity-0 transition duration-0 rounded"/>
//                       {/* Hero */}
//                       <div className="absolute w-[200px] h-[150px] top-0 left-0 opacity-0 hover:scale-150 hover:opacity-100 hover:z-10 transition hover:delay-300 duration-300">
//                         <img src={project.img}
//                               alt={project.name}
//                               className="w-[220px] h-[120px] rounded-t"/>
//                         {/* Info bar */}
//                         <div className="block relative bg-zinc-900 h-[80px] rounded-b p-2">
//                           <h1 className="text-white font-bodini uppercase tracking-wider text-[9px]">{project.name}</h1>
//                           <p className="text-white font-bodini text-[9px] tracking-wider mt-1"> {project.description}</p>
//                           <div className="flex absolute bottom-1 items-center ">
//                             <p className="text-white font-bodini text-[9px]">Dev Tools:</p>
//                             {project.devtool.map((index) => (
//                               <div className="flex"
//                                     key={index}>
//                                 <img className="w-[15px] h-[13px] filterpng" alt= {project.name} src={index}/>
//                               </div>
//                             ))}  
//                           </div>
//                         </div>
//                       </div>
//                 </div>
//               ))}
//         </div>
//     </div>
//   )
// }

export default Projects