import React from 'react';
import Logo from '../assets/SurveySparrow_Logo.png';

const Work = () => {
  return (
    <div name='work' className='w-full h-screen  text-gray-300'>
       <div className='max-w-[1000px] max-h-[100px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
          <br />
          <br />
          <br />
          <br />
          <br />
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work Experience</p>
              </div>
              </div>
              <br />
          <br />
      
      <div class="mx-auto max-w-[1000px] border border-gray-400 shadow-md">
     
    <img src={Logo} alt="Image" class="w-48 h-auto p-4"/>
    <p class="flex-1 p-4">
      <b>SurveySparrow </b> 
      <br />
      <b>Software Developer </b> 
      <br />
      <b>2022 - Present </b> 
      <br />
      
      <br />
      <p> <b>About the company:  </b>
      SurveySparrow is an all-in-one omnichannel conversational experience
management SaaS product with customizable surveys, automation, and
insights in one platform. Used by McKinsey , Honda, Godrej , Meesho , CleverTap and many.</p>
<br />
      
        <p> <b>Role:</b> Part of the core team responsible for introducing new features and enhancements in survey builder and collection of surveys through different mediums like mail,SMS, WhatsApp and other channels</p>
        <p> <b>Tech Stack Used:</b> Full Stack (Front end and Back end) Development Node
JS , React , Redux , PostgreSQL, Sequelize ORM, hapi , Redis, ElasticSearch ,
REST API Development, AWS Cloud services. </p>
     
    </p>
  </div>
    </div>
    
  );
};

export default Work;
