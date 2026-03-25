import { useState } from 'react'
import './App.css'

function App() {

  const [goalCalories, setGoalCalories] = useState(2000); 
    // When rendering this in JSX, using toLocaleString method to insert comma where needed and to make a string. For calculations though keep it as a number
  const [goalValue,setGoalValue] = useState('');
  const [foodNameValue, setFoodNameValue] = useState('');
  const [foodCalValue, setFoodCalValue] = useState('');
  const [foodList,setFoodList] = useState([]);
  // Hard coded this at first to test out the reduce method out before using the foodList state object
    // const testObject = [{
    //   name: "Chicken",
    //   calories: 200
    // }
    //   ,{
    //     name: "Chicken",
    //     calories: 100
    //   }, {
    //     name: "Chicken",
    //     calories: 300
    //   }
    // ];

  const totalConsumedCalories = foodList.reduce((sum, foodItem) => {
    return sum + foodItem.calories;
  },0);

  const totalRemainingCalories = goalCalories - totalConsumedCalories;

  function handleGoalInput(e) {
    setGoalValue(+e.target.value);
    // I used the unary plus operator here to convert the string into a number. This will also help in using this number
      // for the calculations to get the remaining calories
  }

  function updateGoal() {
    setGoalCalories(goalValue)
  }

  function formatNumber(number) {
    return number.toLocaleString();
  }

  function handleFoodNameInput(e) {
    setFoodNameValue(e.target.value);
  }

  function handleFoodCalInput(e) {
    setFoodCalValue(+e.target.value);
  }

  function addFood() {
    const newFoodItem = {
      id: crypto.randomUUID(),
      name: foodNameValue,
      calories: foodCalValue
    }

    const updatedFoodList = [...foodList, newFoodItem]
    setFoodList(updatedFoodList)
  
    setFoodNameValue('');
    setFoodCalValue('');
  }

  function deleteFood(foodItem) {
    const updatedFoodList = foodList.filter((listItem) => listItem.id !== foodItem);
    setFoodList(updatedFoodList);
  }

  
  return (
    <>
      <div className="header">

        <div className="logo">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-icon lucide-flame big-icon-style"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
          <h1 className="logo-name">CalTrack</h1>
        </div>
        <p className="title-subheading">Set your daily goal, log your meals, stay on track.</p>

      </div>
      
      <div className="cards-container">
        <div className="card-one">

          <div className="calorie-display">

            <div className="goal-calories">
              <p className='display-style'>Goal</p>
              <h2 className='cal-number-style'>{formatNumber(goalCalories)}</h2>
              <p className='cal-style'>cal</p>
            </div>
            
            <div className="consumed-calories divide-border">
              <p className='display-style'>Consumed</p>
              <h2 className='cal-number-style'>{formatNumber(totalConsumedCalories)}</h2>
              <p className="cal-style">cal</p>
            </div>

            <div className="remaining">
              <p className='display-style'>Remaining</p>
              <h2 className='cal-number-style green'>{formatNumber(totalRemainingCalories)}</h2>
              <p className='cal-style'>cal</p>
            </div>
            
          </div>
          
          {/* If I decided to add the progress bar, it would go somewhere around here */}

          <div className="border" ></div>

          <div className="daily-calorie-goal">
            <div className='icon-flex'>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-goal-icon lucide-goal small-icon-style"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>
              <h3 className="subheading">Daily Calorie Goal</h3>
            </div>
            <div className="goal-form">
              <input type="number" placeholder="Current: 2000 cal" className="goal-input-style" value={goalValue} onChange={handleGoalInput} id="goal-input"/>
              <button className="update-goal" onClick={updateGoal}>Update Goal</button>
            </div>
            
          </div>

        </div>

        <div className="card-two">

          <div className="todays-log">

            <div className='icon-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame-icon lucide-flame small-icon-style"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
              <h3 className="subheading">Today's Log</h3>
            </div>
            
             {foodList.length === 0 && (
             <p className="default-message">No food logged yet. Start adding meals below</p> 
             )}
              
             {foodList.length > 0 && (
                <ul className="list-container">
                  {foodList.map((foodItem) => (
                    <li className="list-item" key={foodItem.id}>
                      <div>
                        <p className="food-name">{foodItem.name}</p>
                        <p className="food-cal">{foodItem.calories} cal</p>
                      </div>
                      <button className="delete-btn" onClick={() => deleteFood(foodItem.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2 trash-icon-size"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                    </li>
                  ))}
                </ul>
              )}
             
          </div>

           <div className="border"></div>

            <div className="log-food">

              <div className='icon-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple-icon lucide-apple small-icon-style"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></svg>
                <h3 className="subheading">Log Food</h3>
              </div>

              <div className="log-food-form">
                
                <input type="text" placeholder="Food name" className="food-name-input" value={foodNameValue} onChange={handleFoodNameInput}/>
                <input type="number" placeholder="Calories" className="food-cal-input" value={foodCalValue} onChange={handleFoodCalInput}/>
                <button className="add-food" onClick={addFood}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus plus-icon"><path d="M5 12h14"/><path d="M12 5v14"/>
                  </svg>
                  Add Food
                </button>

              </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default App
