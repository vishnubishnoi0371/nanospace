import React from 'react';
import Icons from './Icons';

const Button = ({ children, onClick, className = '', type = 'button', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 flex items-center gap-2 common-transition hover:bg-blue-600 text-white rounded-full font-medium py-2 px-4 ${className}`}
      type={type}
      {...props}
    >
      {children} <span className='mt-1'><Icons icon='arrow-icon' /></span>
    </button>
  );
};

export default Button;
