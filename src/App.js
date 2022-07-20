import './App.css';
import freeCodeCampLogo from './images/freecodecamp.png';
import Button from './components/button.js';
import Counter from './components/counter.js';
import { useState } from 'react';


function App() {

const [clickCount, setClickCount] = useState(0);

const clickNumber = () => {
  setClickCount(clickCount + 1);
}

const clickReset = () => {
  setClickCount(0);
}

  return (
    <div className="App">
      <div className='logo-container'>
        <img 
        className='logo' 
        alt='freeCodeCamp Logo' 
        src={freeCodeCampLogo} />
      </div>
      <div className='counter-container'>
        <Counter 
        clickCount={clickCount} />
        <Button 
        text='Click'
        isClickButton={true}
        handleClick={clickNumber} />
        <Button 
        text='Reset'
        isClickButton={false}
        handleClick={clickReset} />
      </div>
    </div>
  );
}

export default App;
