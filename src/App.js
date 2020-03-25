import React from 'react';
import './App.css';
import Character from './components/Character.js';
import {Card, Button} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Character 
            name = 'Bojack Horseman' 
            actor = 'Will Arnett' 
            description = 'He is a self-loathing, alcoholic, anthropomorphic horse currently in his 50s. Though he began as a young bright-eyed actor, he has since grown bitter, deeply depressed, and jaded about Hollywoo and who he has become post-fame.' 
            quote = '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' />
        </Card.Body>
      </Card>
    </div>
  );
}


export default App;
