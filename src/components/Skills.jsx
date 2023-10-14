import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import JSTS from '../assets/JSTSlogo.jpg';
import Java from '../assets/Java-Logo.png';
import Redux from '../assets/Redux.png';
import SQL from '../assets/SQL.png';
import MongoDB from '../assets/mongo.png';
import ReactImg from '../assets/react.png'; 
import Express from '../assets/ExpressLogo.png';
import Node from '../assets/node.png';
import ElasticSearch from '../assets/elasticsearch-b-v-logo-vector.png';
import Redis from '../assets/redis_logo-1.png';
import AWS from '../assets/AWSlogo.jpg';

import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <br />
          <br />
          <br />
          <br />
          <br />
          <div>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={JSTS} alt="HTML icon"   style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>JavaScript and TypeScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={Java} alt="HTML icon" style={{ width: '100px', height: '100px' }} />
                  <p className='my-4'>JAVA </p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={Node} alt="HTML icon" style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={ReactImg} alt="HTML icon" style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={Redux} alt="HTML icon" style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>Redux </p>
              </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={Express} alt="HTML icon" style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>Express</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={SQL} alt="HTML icon" style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={Mongo} alt="HTML icon" style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>MONGO DB</p>
              </div>
              
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={ElasticSearch} alt="HTML icon" style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>Elastic Search </p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={Redis} alt="HTML icon" style={{ width: '100px', height: '100px' }}/>
                  <p className='my-4'>Redis </p>
              </div>
              
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='mx-auto' src={AWS} alt="HTML icon" style={{ width: '100px', height: '100px' }} />
                  <p className='my-4'> AWS </p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
