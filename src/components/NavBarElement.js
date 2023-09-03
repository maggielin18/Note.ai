import React from "react";

export const NavBarElement = [
  {
    id: 1,
    title: '[New Note]',
    icon: <img src={require('../assets/dashboard.png')} alt="NavBar Icon" className='navBarIcons'/>,
    link: '/new-note',
    onClick: () => { console.log('New Note clicked'); }  // Replace with your actual function
  },
  {
    id: 2,
    title: '[Recents]',
    icon: <img src={require('../assets/dashboard.png')} alt="NavBar Icon" className='navBarIcons'/>,
    onClick: () => { console.log('Recents clicked'); }  // Replace with actual function
  },
  {
    id: 3,
    title: '[Favorites]',
    icon: <img src={require('../assets/dashboard.png')} alt="NavBar Icon" className='navBarIcons'/>,
    onClick: () => { console.log('Favorites clicked'); }  // Replace with actual function
  },
  {
    id: 4,
    title: '[Folders]',
    icon: <img src={require('../assets/dashboard.png')} alt="NavBar Icon" className='navBarIcons'/>,
    onClick: () => { console.log('Folders clicked'); }  // Replace with actual function
  },
  {
    id: 5,
    title: '[Tags]',
    icon: <img src={require('../assets/dashboard.png')} alt="NavBar Icon" className='navBarIcons'/>,
    onClick: () => { console.log('Tags clicked'); }  // Replace with actual function
  }
];

