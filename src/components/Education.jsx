import React from 'react';
import Logo from '../assets/VIT_Logo.png';

const Education = () => {
  return (
    <div name='education' className='w-full h-screen  text-gray-300'>
       <div className='max-w-[1000px] max-h-[100px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
          <br />
          <br />
          <br />
          <br />
          <br />
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Education</p>
              </div>
              </div>
              <br />
          <br />
      <div class="mx-auto max-w-[1000px] border border-gray-400 shadow-md">
      
    <img src={Logo} alt="Image" class="w-48 h-auto p-4"/>
    <p class="flex-1 p-4">
      <b> VIT (Vellore Institute of Technology)</b> 
      <br />
      <b> BTech in Computer Science and Engineering</b>
      <br />

      <b>2018 - 2022 </b>
      <br />

      <b>CGPA: 9.07 / 10 </b>
      <br />
      <b> COURSEWORK:</b>
      <ul>
        <li> Data Structures and Algorithms</li>
        <li> Object Oriented Programming</li>
        <li> DBMS</li>
        <li> Cloud Computing </li>
        <li>Machine Learning</li>
        <li> Image Processing</li>
      </ul>
    </p>
  </div>
    </div>
    
  );
};

export default Education;
