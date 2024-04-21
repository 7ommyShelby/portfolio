import React from 'react'
import { FaJava } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5, FaGithub, FaReact,FaGitAlt } from "react-icons/fa";
import { IoLogoCss3, IoLogoFigma } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";


const Skills = () => {



  return (
    <>
      <section className='w-screen'>
        <div className='flex flex-col text-center items-center gap-9 h-full justify-center'>

          <h1 className='text-5xl font-semibold'>Tech Stack</h1>

          <div className='flex flex-wrap w-2/4 gap-8 px-6 justify-center'>

            <div className='icons'>
              <FaJava className='text-4xl text-orange-700 hover:scale-125'  />
              <p>Java</p>
            </div>
            <div className='icons'>
              <FaHtml5 className='text-4xl text-orange-700 hover:scale-125'/>
              <p>HTML</p>
            </div>
            <div className='icons'>
              <IoLogoCss3 className='text-4xl text-blue-700 hover:scale-125' />
              <p>CSS</p>
            </div>
            <div className='icons'>
              <RiJavascriptFill className='text-4xl hover:scale-125 text-yellow-400' />
              <p>JavaScript</p>
            </div>
            <div className='icons'>
              <FaReact className='text-4xl hover:scale-125 text-blue-600' />
              <p>React.js</p>
            </div>
            <div className='icons'>
              <SiTailwindcss className='text-4xl hover:scale-125 text-cyan-600' />
              <p>TailWind CSS</p>
            </div>
            <div className='icons'>
              <IoLogoFigma className='text-4xl hover:scale-125 text-amber-900' />
              <p>Figma</p>
            </div>
            <div className='icons'>
              <FaGitAlt className='text-4xl hover:scale-125 text-stone-500' />
              <p>Git</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
