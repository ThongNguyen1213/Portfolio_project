import React from 'react'
import { checkProgress } from '../constants'

const MyProgress = () => {

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
    window.addEventListener("scroll",() => {
        if(window.scrollY >= 180) {
            start();
        }
    })

// Flag the function to trigger once
    let started = false;
    const start = () => {
      if(!started) {
        showProgress();
      }
      started = true;
    }

  return (
    <div className="w-full">
        <h1 className="font-orbitron text-brightBlue font-bold text-[25px] border-t-2 pt-2 ">
            My Progress
        </h1>
        <div className="mt-5 w-[600px]">
            <ul className="">
                {checkProgress.map((name) => (
                    <li key={name.id}
                        className="text-white flex-col items-center sm:flex-row">
                        <a className="py-2 w-[22%]">{name.title}</a>

                        <div className="w-[400px] rounded-sm bg-brightYellow rounded-sm">
                            <div className="w-[1px] h-[12px] flex justify-center text-xs items-center text-black font-bold rounded-sm bg-brightBlue"
                                id={name.id}>
                            
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            
            
        </div>
    </div>
  )
}

export default MyProgress