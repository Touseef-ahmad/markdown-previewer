import React from 'react';

// navbar uses bootstrap navbar template
export const NavBar = () => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className='navbar-brand' href='https://www.google.com/'>
      <img
        src='https://www.nicepng.com/png/detail/187-1870373_44191585-markdown-logo.png'
        width='30'
        height='30'
        className='d-inline-block align-top'
        alt=''
      />
      &nbsp;&nbsp;&nbsp; Markdown Previewer
    </a>
    <span className='navbar-text'>You&apos;ll never see a better markdown previewer</span>
  </nav>
);
