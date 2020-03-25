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
          <Card.Img variant="top" src='../assets/bojack.jpg' />
            <Character 
              name = 'Bojack Horseman' 
              actor = 'Will Arnett' 
              description = 'A self-loathing, alcoholic, anthropomorphic horse.' 
              quote = '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' />
        </Card>
        </div>
      </div>
    </div>
  );
}


export default App;
