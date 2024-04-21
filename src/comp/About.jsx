import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className='w-screen flex justify-center'>

        <div className='about w-3/4 flex gap-8'>

          <div className="left flex flex-col gap-10 justify-center items-end">
            <h1 className='text-6xl  font-semibold'>About Me</h1>

            <div className='link flex gap-10'>
              <span><Link to={"https://www.linkedin.com/in/aryakumar98/"} target='_blank'><FaLinkedin className='text-4xl text-blue-700' /></Link></span>
              <span><Link to={"https://github.com/7ommyShelby"} target='_blank'><FaGithub className='text-4xl' /></Link></span>
              <span><Link to={"https://www.instagram.com/the_caster_of_your_tsukuyomi/?hl=en"} target='_blank'><FaInstagram className='text-4xl text-pink-700' /></Link></span>
              <span><Link to={"https://twitter.com/DeathDrogo"} target='_blank'><FaXTwitter className='text-4xl' /></Link></span>
            </div>
          </div>

          <div className="right flex items-center">
            <p>At my core, I am an educator and leader, with a natural inclination towards teaching and effective communication. My approach is characterized by a strong managerial acumen and meticulous planning skills, ensuring that every project I undertake is executed with precision and care. Resilience is one of my defining traits; I possess the mental fortitude to remain fully devoted to my work, regardless of challenges. I embrace my imperfections, viewing them as opportunities for growth and self-improvement. My curiosity drives me to continuously explore and absorb new knowledge, while my adaptability allows me to embrace failures as learning experiences. This mindset not only fuels my personal development but also inspires those around me to strive for excellence.</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default About
