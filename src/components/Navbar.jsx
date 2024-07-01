import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const menuItems = [
    { name: 'GPA', link: '/' },
    { name: 'CGPA', link: '/cgpa' }

  ]
  return (
    <header className='flex justify-between bg-black text-white items-center px-3 py-2'>
      <h1 className='text-2xl font-bold'>Grade Calculator</h1>
      <nav>
        <ul className='flex space-x-4 '>
          {
            menuItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link} style={({isActive})=>{
                  return isActive ? {color: 'red'} : {color: 'white'}
                }} className='text-white'>{item.name}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
