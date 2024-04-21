import React from 'react'
import gemini from '../assets/gemini.png'
import codepen from '../assets/codepen.png'
import todolist from '../assets/todolist.png'
import password from '../assets/password.png'
import { Link } from 'react-router-dom'


const Projects = () => {

  let projects = [
    {
      name: "Gemini Clone",
      link: "https://react-gemini-one.vercel.app/",
      git: "https://github.com/7ommyShelby/react-gemini",
      src: gemini
    },
    {
      name: "Codepen",
      link: "https://codepen-react-clone-2.vercel.app",
      git: "https://github.com/7ommyShelby/codepen-react-clone",
      src : codepen
    },
    // {
    //   name: "Moviex (VPN)",
    //   link: "https://react-movie-app-inky-phi.vercel.app/",
    //   git: "https://github.com/7ommyShelby/react-movie-app",
    //   src : {}
    // },
    {
      name: "To_Do_List",
      link: "https://todo-list-2-red.vercel.app/",
      git: "https://github.com/7ommyShelby/Todo-List-II",
      src : todolist
    },
    {
      name: "Password_Generator",
      link: "https://optimized-password-generator.vercel.app/",
      git: "https://github.com/7ommyShelby/optimized-password-generator",
      src : password
    },

  ]

  return (
    <>
      <section className='prsc w-screen gap-8 flex flex-col items-center'>
      <h1 className='text-5xl'>Projects</h1>
        <div className='flex gap-8 flex-grow flex-wrap w-3/4'>

          {
            projects.map((e, idx) => {
              return (
                <>
                  <div className='pr flex flex-col gap-4 overflow-hidden'>
                    <img src={e.src} alt="" className='object-cover rounded' />
                    <div className='dir flex justify-between px-6'>
                      <button><Link target='_blank' to={e.git}>CODE</Link></button>
                      <button><Link target='_blank' to={e.link}>LIVE</Link></button>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </section>
    </>
  )
}

export default Projects
