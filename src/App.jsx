import './App.css'

function App() {
  
  return (
    <>
      <div className="header">

        <div className="logo">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame flame-icon-style"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
          <h1 className="logo-name">CalTrack</h1>
        </div>
        <p className="title-subheading">Set your daily goal, log your meals, stay on track.</p>

      </div>
      

      <div className="cards-container">
        <div className="card-one">

          <div className="calorie-display">
            <div className="goal-calories">
              <p>Goal</p>
              <h2>2,000</h2>
              <p>cal</p>
            </div>
            <div className="consumed-calories">
              <p>Consumed</p>
              <h2>0</h2>
              <p>cal</p>
            </div>

            <div className="remaining">
              <p>Remaining</p>
              <h2>2,000</h2>
              <p>cal</p>
            </div>
            
          </div>

          <div className="border" ></div>

          <div className="daily-calorie-goal">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>
             <h3>Daily Calorie Goal</h3>
            <input type="text" placeholder="Current: 2000cal"/>
            <button>Update Goal</button>
          </div>

        </div>

        <div className="card-two">

          <div className="todays-log">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>
            <h3>Today's log</h3>
            <p>No food logged yet. Start adding meals below</p>
          </div>

           <div className="border" ></div>

           <div className="log-food">

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple-icon lucide-apple"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></svg>
              <h3>Log Food</h3>
            </div>

            <input type="text" placeholder="Food name" />
            <input type="text" placeholder="Calories" />
            <button><span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg></span> Add Food</button>
            
           </div>

        </div>
      </div>
    </>
  )
}

export default App
