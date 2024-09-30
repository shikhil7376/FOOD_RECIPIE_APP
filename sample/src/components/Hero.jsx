import React from 'react'
import '../App.scss'
export default function Hero() {
  return (
    <div className='hero'>
      <img src='https://cdn.pixabay.com/photo/2024/05/06/17/06/french-fries-8743802_1280.jpg' style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }} />
      <div className='hero-content text-or'>
           <h2 className='font-bold'>Its all about good food & taste</h2>
           {/* <p className='text-gray-400'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p> */}
      </div>
      <div className="absolute bottom-0  left-0 w-full fade_bottom">
      </div>
    </div>
  )
}
