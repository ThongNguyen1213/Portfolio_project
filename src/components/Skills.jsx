// import React, { useEffect, useState } from 'react'
// import { skillSets } from '../constants'

// const Skills = () => {
//   const [content, setContent ] = useState('The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.');
//   const [selectedSkill, setSelectedSkill] = useState('htmllogo');
  
//   const chooseSkill = ({target}) => {
//     const content = target.getAttribute('content');
//     setContent(content);
//     setSelectedSkill(target.id);
//   }
  
  

//   return (
//     <div className="mt-10">
//         <h1 className="font-orbitron text-brightBlue font-bold text-[25px]">
//             Skills
//         </h1>
//         <div className="flex">
//            {skillSets.map((skill) => (
//              <div key={skill.id}
//                   className="m-1">
//                <img src={skill.img} 
//                     alt={skill.name}
//                     id={skill.id}
//                     content={skill.content}
//                     className={`h-[60px] w-[60px] p-1 cursor-pointer ${selectedSkill === skill.id ? 'grayscale-0 m-2' : 'grayscale'} hover:grayscale-0 hover:p-0`}
//                     onClick={chooseSkill}/>
//              </div>
//            ))}
//         </div>
//         <div className="text-white text-justify border-2 p-2 rounded mb-4 h-[120px] w-[355px] indent-10">
//             {content}
//         </div>
//     </div>
//   )
// }

// export default Skills 