import React from 'react';
import './App.css';
import Bio from './components/Bio.js'


function App() {
  return (
    <div className="App">
      <h1>Bojack Horseman Characters</h1>
      <div className = 'list'>
        <Bio 
          link = '/assets/bojack.jpg'
          name = 'Bojack Horseman' 
          actor = 'Will Arnett' 
          description = 'A self-loathing, alcoholic, anthropomorphic horse.' 
          quote = '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' 
        />
      </div>
    </div>
  );
}


export default App;
