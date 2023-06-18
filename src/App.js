import { useEffect, useState } from 'react';
import { Question } from './accordian/Question';
import './App.css';
import { Category } from './menu/Category';
import { Menu } from './menu/Menu';
import items from './menu/data'
import Tabs from './tabs/Tabs';
import { Slider } from './slider/Slider';
//import data from './accordian/data';

//import data from './birthday-reminder/data';
//import { Lists } from './birthday-reminder/Lists';
//import { Modal } from './birthday-reminder/Modal';
//import { Review } from './reviews/Review';
//import { Loading } from './tours/Loading';
//import { Tours } from './tours/Tours';
//const url = 'https://course-api.com/react-tours-project '
//import { TimeTravel } from './components/TimeTravel';
//import { Game } from './components/Game';

function App() {
  //const [people,setPeople] = useState(data);
  // const [loading,setLoading] = useState(false);
  // const [tours,setTours] = useState([]);
  // const removeTour = (id)=> {
  //   const newTours = tours.filter((tour)=> tour.id !== id);
  //   setTours(newTours);

  // }
  // const fetchTours = async () => {
  //   setLoading(true)
  //   try{
  //     const response = await fetch(url)
  //     const tours = await response.json()
  //     setLoading(false)
  //     setTours(tours)
  //   } catch(err){
  //     setLoading(false)
  //     console.log(err)

  //   }
  //     console.log(tours)
  // };
  // useEffect(() => {
  //   fetchTours()

  // },[])
  // if(loading){
  //   return(
  //     <p>Loading...</p>
  //   )
  // }
  // if(tours.length === 0){
  //   return (
  //     <div>
  //       <p className='flex items-center justify-center text-2xl font-bold p-2 '> No tours left ..</p>
  //       <button className = 'px-[1000px] text-blue-800 text-lg font-bold' onClick = {fetchTours}>refresh</button>
  //     </div>
  //   )
  // }
 // const [questions,setQuestions] = useState(data);
 const allCategories =  ['all',...new Set(items.map((item) => item.category))]
 console.log(allCategories)
 const [menuItems,setMenuItems] = useState(items)
 const [categories,setCategories] = useState(allCategories)
 //console.log(items);
 const filterItems = (category) => {
  if(category === 'all'){
    setMenuItems(items);
    return;
  }
  let newItems = items.filter((item) => item.category === category)
  setMenuItems(newItems);
 }
 
  return (
    <div className="w-full">
      <Slider />
      {/* <Tabs /> */}
      {/* <p className='underline flex items-center justify-center py-4 text-2xl font-bold text-black'>
        Our Menu
      </p>
      <Category filterItems={filterItems} categories={categories}/>
      <Menu items={menuItems}/> */}
      {/* <div className=' w-[800px] '>
        
        {questions.map((question)=> {
          return <Question key={question.id} {...question}  />

        })}
      </div> */}
  
      {/* <Review /> */}
      {/* <Game /> */}
      {/* <TimeTravel /> */}
      {/* <h2 className='text-center text-2xl font-extrabold p-2'>Birthday reminder project</h2> */}
      {/* <Modal/> */}
      {/* <Lists /> */}
      {/* <Tours tours={tours} removeTour={removeTour} /> */}
    </div>
  );
}

export default App;
