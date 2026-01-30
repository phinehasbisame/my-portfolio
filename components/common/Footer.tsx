import React from 'react'

const Footer: React.FC = () => {
    const Year = new Date().getFullYear()
  return (
    <footer className='flex items-center justify-center text-xs'>
        <span>&copy; {JSON.stringify(Year)} - Made with love by me | Inspired by Alfred Fianyo</span>
    </footer>
  )
}

export default Footer