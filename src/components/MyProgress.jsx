import React from 'react'
import { useState, useEffect } from 'react'
import { checkProgress, skillSets } from '../constants'
import { codecademyfrontpage } from '../assets'

const MyProgress = () => {
    const [content, setContent ] = useState('The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.');
    const [selectedSkill, setSelectedSkill] = useState('htmllogo');

  const chooseSkill = ({target}) => {
    const content = target.getAttribute('content');
    setTimeout(() => {setContent(content)},500);
    setSelectedSkill(target.id);
  }

// Running the progress bar
    const showProgress = () => {
            let i = 0;
            if(i == 0) {
                i = 1;
                let elem1 = document.getElementById("codecademy");
                let elem2 = document.getElementById("code-practice");
                let elem3 = document.getElementById("code-challenge");
                let width = 1;

                const frame1 = () => {
                    if( width >= 81 ) {
                        clearInterval(id1);
                        i = 0;
                    } else {
                        width++;
                        elem1.style.width = width + "%";
                        elem1.innerHTML = width + "%";
                    }
                }
                function frame2() {
                    if (width >= 100) {
                        clearInterval(id2);
                        i = 0;
                    } else {
                        width++;
                        elem2.style.width = width + "%";
                        elem2.innerHTML = width + "%";
                    }
                }
                function frame3() {
                    if (width >= 31) {
                    clearInterval(id3);
                    i = 0;
                    } else {
                        width++;
                        elem3.style.width = width + "%";
                        elem3.innerHTML = width + "%";
                    }
                }
                let id1 = setInterval(frame1, 40);
                let id2 = setInterval(frame2, 40);
                let id3 = setInterval(frame3, 40);
            }
        } 
        
// Trigger progress bar when roll down the window
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const hT = document.getElementById('progress-skill').offsetTop;
            
            console.log(hT);
            if (window.scrollY + 350 > hT){
                return start();
            }
        })
    },[])

    
// Flag the function to trigger once
    let started = false;
    const start = () => {
      if(!started) {
        showProgress();
      }
      started = true;
    }




  return (
    <div className="w-full mt-[100px] pt-[50px]"
        id="my-progress">
        <div className="mt-[40px] font-b612 text-center">
            <h2 className="text-[11px] md:text-[14px] text-white">Let's Inspect</h2>
            <h1 className="text-[18px] md:text-[20px] text-brightBlue">My Progress</h1>
        </div>
        <div className="block md:flex justify-center text-white mx-[30px] sm:mx-[50px] mt-[37px] md:px-[137px]">
            <div className="md:mr-[137px] text-left">
                <h2 className="font-orbitron sm:ml-[60px] md:ml-0 text-[22px] ">Where I am from...</h2>
                <a href="https://www.codecademy.com/" target="_blank"><img src={codecademyfrontpage} 
                    alt="codecademyfrontpage"
                    className="w-[280px] h-[300px] sm:w-[340px] sm:h-[360px] md:min-w-[383px] md:h-[389px] ml-[40px] mt-[20px] md:mt-[47px] md:ml-[60px] cursor-pointer"/></a>
            </div>
            <div className="mt-[30px] md:mt-0 ">
                <h2 className="font-orbitron sm:mr-[60px] text-right text-[22px]" id="progress-skill">Where I am at</h2>
                <ul className="mt-[30px] w-[300px] sm:w-[350px] md:w-[400px] ml-auto mr-[40px]">
                    {checkProgress.map((name) => (
                        <li key={name.id}
                            className="text-white block">
                            <a className="text-[11px]">{name.title}</a>
                            <div className="md:w-[350px]  rounded-sm bg-shadowBlue mt-[5px]">
                                <div className="w-[1px] h-[7px] font-b612 flex justify-center text-[10px] items-center text-black font-bold rounded-sm bg-brightBlue"
                                    id={name.id}>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="flex mt-[48px] w-[300px] sm:w-[350px] ml-auto mr-[40px] md:ml-0 md:mr-0">
                    {skillSets.map((skill,index) => (
                        <li key={skill.id}
                            className={`px-[10px] m-auto ${index === skillSets.length ? 'mr-0' : 'sm:mr-[10px] mr-[3px]'}`}>
                                <img src={skill.img}
                                    className={`w-[35px] h-[35px] md:w-[40px] md:h-[40px] cursor-pointer rounded-full ${selectedSkill === skill.id ? 'animate-bounce' : ''}`}
                                    onClick={chooseSkill} 
                                    content={skill.content}
                                    id={skill.id}/>
                                <div className="w-[2px] h-[60px] sm:h-[70px] mx-auto">
                                    <div className={`w-[1.5px] h-[0%] mt-[5px] transition-all bg-brightBlue ${selectedSkill === skill.id ? 'animate-skillScale ' : ''}`}>
                                    </div>
                                </div>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center items-center w-[300px] h-[135px] sm:w-[350px] sm:h-[135px] z-10 bg-white bg-opacity-10 font-orbitron text-[10px] sm:text-[11px] leading-6 tracking-wider border-2 rounded-xl border-brightBlue px-[30px] ml-auto mr-[40px] md:ml-0 md:mr-0">{content}</div>
            </div>
        </div>
    </div>
  )
}

export default MyProgress