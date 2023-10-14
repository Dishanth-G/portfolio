import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import resumePdf from "../assets/Dishanth_G_Resume.pdf";

const Home = () => {

  return (
    <div name='home' className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#2c42b3]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#2c42b3]'>
          DISHANTH G
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#2c42b3]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#2c42b3] py-4 max-w-[700px]'>
        A highly motivated and passionate Developer with great problem-solving and debugging skills, following clean, efficient code and design practises . I'm an avid learner committed to staying up-to-date with industry trends and continuously expanding my skill set.
        </p>
        <div className='flex'>
        <Link to='skills' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 mr-4 flex items-center hover:bg-pink-600 hover:border-pink-600'>
         
          View More
          
          <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
           
          </button>
          </Link>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <a href={resumePdf}  target='_blank' >Download Resume</a>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
