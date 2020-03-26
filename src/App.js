import React from 'react';
import './App.css';
import Character from './components/Character.js';
import {Card, Button} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <h1>Bojack Horseman Characters</h1>
      <div className = 'list'>
        <div className = 'box'>
        <Card style={{ width: '20rem', height: '24rem'}}>
          <Card.Img variant="top" src='../assets/bojack.jpg' />
            <Character 
              name = 'Bojack Horseman' 
              actor = 'Will Arnett' 
              description = 'A self-loathing, alcoholic, anthropomorphic horse.' 
              quote = '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' />
        </Card>
        </div>

        <div className = 'box'> 
        <Card style={{ width: '20rem', height: '24rem'}}>
          <Card.Img variant="top" src='../assets/diane.jpg' />
            <Character 
              name = 'Diane Nguyen' 
              actor = 'Alison Brie' 
              description = 'A Vietnamese-American third-wave feminist from Boston' 
              quote = '“Sometimes Life’s A B**** And Then You Keep Living.”' />
        </Card>
        </div>

        <div className = 'box'> 
        <Card style={{ width: '20rem', height: '24rem'}}>
          <Card.Img variant="top" src='../assets/peanutbutter.jpg' />
            <Character 
              name = 'Mr. Peanutbutter' 
              actor = 'Paul F. Tompkins' 
              description = 'An energetic and cheerful yellow Labrador Retrieve' 
              quote = '“The universe is a cruel, uncaring void...eventually, you’ll be dead.”' />
        </Card>
        </div>

        <div className = 'box'> 
        <Card style={{ width: '20rem', height: '24rem'}}>
          <Card.Img variant="top" src='../assets/bojack.jpg' />
            <Character 
              name = 'Bojack Horseman' 
              actor = 'Will Arnett' 
              description = 'A self-loathing, alcoholic, anthropomorphic horse.' 
              quote = '“The universe is a cruel, uncaring void...eventually, you’ll be dead.”' />
        </Card>
        </div>
      </div>
    </div>
  );
}


export default App;
