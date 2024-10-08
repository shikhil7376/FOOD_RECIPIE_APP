import React from 'react'
import '../App.scss'
import CardDish from './CardDish';
import { useState,useContext } from 'react';
import Popup from './Popup';
import { AllMenuContext } from './AllMenuContext';
import AddToCart from './AddToCart';

export default function SpecialDishes(props) {
 let [showPopUp,setShowPopup] = useState(false)  
  let [currentDish,setCurrentDish] = useState('')

const allMenus = useContext(AllMenuContext)

 // lets show the popup
 function showPopupHandler(dishName){
    setShowPopup(true)
     setCurrentDish(dishName)
 }

 // lets close the popup
 function closePopupHandler(){
    setShowPopup(false)
 }

 let maxSpecialDishes = 8;
 let spcialMenus = allMenus.map((menuItem,index)=>{
 if(index<maxSpecialDishes){
    return (
       <CardDish menuItem={menuItem}
       showPopup={showPopupHandler}/>
)
 }
   
 }) 
  return (
    <section className='special-dishes'>
         {showPopUp && <Popup closePopup={closePopupHandler}
          currentDish={currentDish}
         ></Popup> }
        <div className='container'>
           <AddToCart/>
            <div className='special-dishes-content text-center'>
                <h2 className='text-gray-400 font-bold text-3xl'>Our Special Dishes</h2>
                <p className='text-gray-400'> Explore the significance of food in different cultures, including traditional ingredients, cooking methods, and the role of food in cultural celebrations and rituals.</p>
            </div>
            <div className='special-dishes-list '>
                <ul className='flex flex-wrap gap-30 '>
                {spcialMenus}
                </ul>
            </div>
        </div>
    </section>
  )
}
