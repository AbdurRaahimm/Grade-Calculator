import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const menuItems = [
    { name: 'CGPA', link: '/cgpa' },
    { name: 'GPA', link: '/' },

  ]
  return (
    <header className='flex justify-between bg-white text-black  font-bold items-center px-5 py-2 shadow-md'>
      <Link to='/' className='text-2xl font-bold'>Grade Calculator</Link>
      <nav>
        <ul className='flex space-x-4 divide-x-2 divide-blue-300 '>
          {
            menuItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link} style={({ isActive }) => {
                  return isActive ? { 
                    color: 'blue' ,
                    borderBottom: '2px dashed blue'
                  } : { color: 'black' }
                }} className='text-black ml-5'>{item.name}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
