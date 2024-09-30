import React from 'react'
import { useState,useContext,useEffect } from 'react';
import Pagination from './Pagination';
import CardDish from './CardDish';
import { AllMenuContext } from './AllMenuContext';

export default function FilteredDishes({}) {

  let [menuCategory,setMenuCategory] = useState([])
  let [singleDish,setSingleDish]=useState([])
  let allMenus= useContext(AllMenuContext)

  let [filteredDishes,setFilteredDishes] = useState([])
  let [activeDish,setActiveDish] = useState("Beef")
  let [currentPage,setCurrentPage] = useState(1)
  let [itemsPerPage,setItemsPerPage] = useState(4)
  
  let indexOfLastDish = currentPage * itemsPerPage
  let indexOfFirstDish = indexOfLastDish - itemsPerPage
  let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)
  
  async function getAllTheCategories(){
     const API_URL ="https://www.themealdb.com/api/json/v1/1/categories.php";
     let response = await fetch(API_URL)
     let categoryData = await response.json()
     setMenuCategory(categoryData.categories)
  }
  
  async function getOnlyOneDish(){
    const API_URL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL)
    let singleDishData = await response.json()
    console.log("singleDishdata",singleDishData.meals);
     setSingleDish(singleDishData.meals)
  }
  
      useEffect(()=>{ 
           getAllTheCategories()
           getOnlyOneDish()
      },[])




  
   

   

// lets show only single dishes

    let maxItem = 4
     let singleDishItems = singleDish.map((item,index)=>{
      if(index<maxItem){
        return(
          <li>
          <img src={item.strMealThumb} alt="" className='br'  />
          <h4>{item.strMeal}</h4>
      </li>
        )
      }
   
     })


     console.log("singleDishItems:-",singleDishItems);

 // show dishes on click
    function showFilterdDishesHandler(category){
      setSingleDish([])
      setActiveDish(category)
        let filteredDishesAre = allMenus.filter((item)=>{
                return item.strCategory === category
            }).map((menuItem)=>{
                return (
                    <CardDish menuItem={menuItem}/>
                )
            })
            setFilteredDishes(filteredDishesAre)
    }
    

    // show all the categories
let allCategories = menuCategory.map((item)=>{
    return(
        <li className={item.strCategory ==activeDish?"active":""} onClick={()=>{showFilterdDishesHandler(item.strCategory)}}>{item.strCategory}</li>
    )
})

  return (
    <div className='filtred-dishes'>
      <div className='container'>
        <div className='text-center'>
        <h2 className='text-gray-400 text-3xl font-bold'>Choose your dishes </h2>
        <p className='text-gray-400'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
        </div>
        <div className='filterd-dishes'>
           <ul>
              {allCategories}
           </ul>
        </div>
        <div className='filtered-dishes-results'>
            <ul className='flex flex-wrap gap-30'>
              {singleDishItems}
              { singleDishItems!=0 || filteredDishes.length!=0  ? showTheseDishesNow:
              <div className='alert'>
             <h3>Sorry, No items found.</h3>
             <h4>Please choose another menu</h4>
                </div>}
            </ul>
            <Pagination filteredDishes ={filteredDishes}
               itemsPerPage={itemsPerPage}
               currentPage={currentPage}
               setCurrentPage ={setCurrentPage}
            ></Pagination>
        </div>
      </div>
    </div>
  )
}
