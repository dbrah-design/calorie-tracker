import './App.css'

function App() {
  
  return (
    <>
      <div className="header">

        <div className="logo">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame big-icon-style"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
          <h1 className="logo-name">CalTrack</h1>
        </div>
        <p className="title-subheading">Set your daily goal, log your meals, stay on track.</p>

      </div>
      

      <div className="cards-container">
        <div className="card-one">

          
          <div className="calorie-display">

            <div className="goal-calories">
              <p className='display-style'>Goal</p>
              <h2 className='cal-number-style'>2,000</h2>
              <p className='cal-style'>cal</p>
            </div>
            
            <div className="consumed-calories divide-border">
              <p className='display-style'>Consumed</p>
              <h2 className='cal-number-style'>0</h2>
              <p className="cal-style">cal</p>
            </div>

            <div className="remaining">
              <p className='display-style'>Remaining</p>
              <h2 className='cal-number-style green'>2,000</h2>
              <p className='cal-style'>cal</p>
            </div>
            
          </div>

          <div className="border" ></div>

          <div className="daily-calorie-goal">
            <div className='icon-flex'>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal small-icon-style"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>
              <h3>Daily Calorie Goal</h3>
            </div>
            <div className="goal-form">
              <input type="number" placeholder="Current: 2000 cal" className="goal-input-style" id="goal-input"/>
              <button className="update-goal">Update Goal</button>
            </div>
            
          </div>

        </div>

        <div className="card-two">

          <div className="todays-log">

            <div className='icon-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame small-icon-style"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
              <h3 className="todays-log-title">Today's Log</h3>
            </div>
            
            {/* {<p className="default-message">No food logged yet. Start adding meals below</p>} */}

            <ul className="list-container">
              <li className="list-item">
                <div>
                  <p className="food-name">Tuna</p>
                  <p className="food-cal">100 cal</p>
                </div>
                <button className="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2 trash-icon-size"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
              </li>
            </ul>

          </div>

           <div className="border" ></div>

           <div className="log-food">

            <div className='icon-flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple-icon lucide-apple small-icon-style"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></svg>
              <h3>Log Food</h3>
            </div>

            <div className="log-food-form">
              
              <input type="text" placeholder="Food name" className="food-name-input"/>
              <input type="number" placeholder="Calories" className="food-cal-input"/>
              <button className="add-food">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus plus-icon"><path d="M5 12h14"/><path d="M12 5v14"/>
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
