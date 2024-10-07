import React from 'react';

function Experience({ org, title, date, description }) {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <div className='flex flex-col sm:flex-row gap-8 w-full items-start sm:items-center'>
        {/* Organization and Date Section */}
        <div className='flex flex-col text-left sm:text-right sm:mr-8 w-40'>
          <h1 className='text-xl font-semibold'>{org}</h1>
          <h3 className='text-sm my-1 text-gray-600 dark:text-gray-400'>{date}</h3>
        </div>

        {/* Timeline Connector */}
        <div className='relative flex items-center'>
          {/* Dot */}
          <div className='w-3 h-3 bg-[#ec6e59] rounded-full z-10'></div>
          {/* Line connecting dots */}
          <div className='absolute top-4 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-400 dark:bg-gray-600'></div>
        </div>

        {/* Title and Description Section */}
        <div className='flex flex-col w-full'>
          <h1 className='text-lg font-semibold mb-1'>{title}</h1>
          {/* <p className='font-light text-gray-700 dark:text-gray-300 leading-relaxed sm:text-justify'>
            {description}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
