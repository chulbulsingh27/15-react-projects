import { useEffect, useState } from 'react';
import { Question } from './accordian/Question';
import './App.css';

import { Category } from './menu/Category';
import { Menu } from './menu/Menu';
import items from './menu/data'
import Tabs from './tabs/Tabs';
import { Slider } from './slider/Slider';
import { LoremIpsum } from './lorem-ipsum/LoremIpsum';
import { SingleColor } from './color-generator/SingleColor';
import Values from 'values.js';
import { Main } from './grocery-bud/Main';
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
  //const allCategories = ['all', ...new Set(items.map((item) => item.category))]
  //console.log(allCategories)
  //const [menuItems,setMenuItems] = useState(items)
  //const [categories,setCategories] = useState(allCategories)
  //console.log(items);
  //  const filterItems = (category) => {
  //   if(category === 'all'){
  //     setMenuItems(items);
  //     return;
  //   }
  //   let newItems = items.filter((item) => item.category === category)
  //   setMenuItems(newItems);
  //  }
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [lists, setLists] = useState(new Values('#f15025').all(10))
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setLists(colors)
      //console.log(colors)
    } catch (error) {
      setError(true);
      console.log(error)
    }
    //console.log('hello')
  }

  return (

    <div className="w-full py-8">
      <Main />

      {/* <div className='flex flex-row items-center justify-center space-x-4'>
        <p className='text-2xl font-bold'>Color generator</p>
        <form onSubmit={handleSubmit} className='space-x-4'>
          <input className='border-2 rounded-md ' type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" />
          <button type="submit">btn</button>

        </form>

      </div> */}
      {/* <div className='grid grid-cols-5 gap-5 p-6'>
        {
          lists.map((color, index) => {
            return (
              <>
                <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
              </>
            )
          })
        }

      </div> */}

      {/* <SingleColor /> */}
      {/* <LoremIpsum /> */}
      {/* <Slider /> */}
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
