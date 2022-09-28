import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Fawez, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I’m a FullStack JavaScript developer, also
I'm a great communicator, dynamic and problem solving person.
through my experience I'd worked on a lot of projects that made me technically confident,
but I still aiming to learn more technologiesand that's why I'm looking to develop myknowledge skills.
</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
