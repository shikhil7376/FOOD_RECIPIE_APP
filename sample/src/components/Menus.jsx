import React from 'react'
import { useEffect,useState} from 'react'
import Hero from './Hero'
import Header from './Header'
import SpecialDishes from './SpecialDishes'
import FilteredDishes from './FilteredDishes'
import {AllMenus} from './AllMenuContext'
//create a global context that can be shared to its children
/* step 1 : */


export default function Menus() {

  


  return (
<div className='bg-black h-auto overflow-hidden'>
    <Header/>
    <Hero/>
    <AllMenus>
    <SpecialDishes/>
    <FilteredDishes />
  </AllMenus>
   
</div>
  )
}
