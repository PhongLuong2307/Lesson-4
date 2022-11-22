/* Lesson 4 */

// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   let [currentCount, setCurrentCount] = useState(0);

//   console.log(currentCount);

//   const increase = () => {
//     currentCount += 1;
//     setCurrentCount(currentCount);
//   }

//   const decrease = () => {
//     currentCount -= 1;
//     setCurrentCount(currentCount);
//   }

//   return (
//     <React.Fragment>
//       <h1>{currentCount}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </React.Fragment>
//   );
// }

// export default App;


/* Lesson 5 */

import './App.css';
import React from "react";
import StateTutorial from './StateTutorial';
// import { useState } from 'react';

function App() {
  return (
    <React.Fragment>
      {/* <h1>Hello</h1> */}
      <StateTutorial></StateTutorial>
    </React.Fragment>
  )
}

export default App;