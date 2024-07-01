import React from 'react'

export default function Footer() {
  return (
    <footer className='py-3'>
      <p className='text-center text-gray-500 text-xl'>
        © 2024-{new Date().getFullYear()} Grade Calculator | Developed by 
        <a href='' target='_blank' className='text-blue-500'> Abdur Rahim</a>
        </p>
    </footer>
  )
}
