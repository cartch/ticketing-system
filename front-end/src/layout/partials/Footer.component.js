import React from 'react';

export const Footer = () => {
  return (
    <div className='text-center copy-right'>
      &copy; Ticketing System {new Date().getFullYear()}
    </div>
  );
};
