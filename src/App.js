import React from 'react';
import './App.css';
import Character from './components/Character.js';
import {Card, Button} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <div className = 'list'>
        <Card style={{ width: '20rem', height: '26rem', padding: '-10px'}}>
          <Card.Img variant="top" src='../assets/bojack.jpg' />
          <Card.Body>
            <Character 
              name = 'Bojack Horseman' 
              actor = 'Will Arnett' 
              description = 'A self-loathing, alcoholic, anthropomorphic horse.' 
              quote = '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' />
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src='../assets/bojack.jpg' />
          <Card.Body>
            <Character 
              name = 'Bojack Horseman' 
              actor = 'Will Arnett' 
              description = 'A self-loathing, alcoholic, anthropomorphic horse who began as a young bright-eyed actor but has since grown bitter, deeply depressed.' 
              quote = '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' />
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src='../assets/bojack.jpg' />
          <Card.Body>
            <Character 
              name = 'Bojack Horseman' 
              actor = 'Will Arnett' 
              description = 'A self-loathing, alcoholic, anthropomorphic horse who began as a young bright-eyed actor but has since grown bitter, deeply depressed.' 
              quote = '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' />
          </Card.Body>
        </Card>
        <Card style={{ width: '20rem'}}>
          <Card.Img variant="top" src='../assets/bojack.jpg' />
          <Card.Body>
            <Character 
              name = 'Bojack Horseman' 
              actor = 'Will Arnett' 
              description = 'A self-loathing, alcoholic, anthropomorphic horse who began as a young bright-eyed actor but has since grown bitter, deeply depressed.' 
              quote = '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}


export default App;
