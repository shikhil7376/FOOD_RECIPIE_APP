import React from 'react'

export default function Header() {
  return (
      <header>
           <a href=''>
              Food Bae
           </a>
           <nav>
            <ul className='flex'>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>Checkout</a>
              </li>
            </ul>
           </nav>
      </header>
  )
}
