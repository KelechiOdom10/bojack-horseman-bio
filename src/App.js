import React from 'react';
import './App.css';
import Bio from './components/Bio.js'


function App() {
  const data = [
    { link: '/assets/bojack.jpg', name: 'BoJack Horseman', actor: 'Will Arnet', description: 'A self-loathing, alcoholic, anthropomorphic horse.', quote: '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' },
    { link: '/assets/diane.jpg', name: 'Diane Nguyen',  actor: 'Will Arnett', description: 'A self-loathing, alcoholic, anthropomorphic horse.', quote: '"I Feel Like My Life Is Just A Series Of Unrelated Wacky Adventures."' },
    { link: '/assets/peanutbutter.jpg', name: 'Mr. Peanutbutter', actor: 'Paul F. Tompkins', description: 'An energetic and cheerful yellow Labrador Retrieve', quote: '“The universe is a cruel, uncaring void...eventually, you’ll be dead.”' },
    { link: '/assets/todd.jpg', name: 'Todd Chavez', actor: 'Aaron Paul', description: "A friendly and lovable human slacker who ended up at BoJack's house", quote: '“You Turn Yourself Around. That’s What It’s All About.”' },
    { link: '/assets/pc.jfif', name: 'Princess Carolyn', actor: 'Amy Sedaris', description: 'Earnest and unflagging, Princess Carolyn was a top agent at Vigor agency', quote: '"BoJack!"' },
    { link: '/assets/sarah.jpg', name: 'Sarah Lynn', actor: 'Kristen Schaal', description: "A human actress who played the Horse's precocious adoptive youngest daughter Sabrina", quote: '"Hey, did you hear Kazzaz got cancer?"' },
    { link: '/assets/herb.jpg', name: 'Herb Kazzaz', actor: 'Stanley Tucci', description: "BoJack's human former comedy partner, who created and wrote Horsin' Around", quote: '“Oh, BoJack, no. There is no other side. This is it.”'},
    { link: '/assets/hollyhock3.jpg', name: 'Hollyhock', actor: ' Aparna Nancherla', description: 'A 17-year-old filly first seen at the end of "That Went Well".', quote: '“Those voices... they go away, right?”' },
    { link: '/assets/butterscotch.jpg', name: 'Butterscotch', actor: 'Will Arnett', description: "BoJack's physically and verbally abusive father.", quote: '“Butterscotch Horseman. Charmed I’m sure.”'},
    { link: '/assets/beatrice.png', name: 'Beatrice Horseman', actor: 'Wendie Malick', description: "BoJack's neglectful, verbally abusive mother. ", quote: '“You ruined me, BoJack.”'},
    { link: '/assets/judah.png', name: 'Judah', actor: 'Diedrich Bader', description: "Human part-owner for Princess Carolyn's agency VIM.", quote: '“Is everything okay, Princess Carolyn?”'},
    { link: '/assets/kelsey.jpg', name: 'Kelsey Jannings', actor: 'Maria Bamford', description: "A divorced, lesbian, independent filmmaker", quote: '“Something inside you is broken and it can never be fixed”'}
  ]

  const bios = data.map(element => {
    return (
      <Bio
        link={element.link}
        name={element.name}
        actor={element.actor}
        description={element.description}
        quote={element.quote}
      />
    )
  })

  return (
    <div className="App">
      <h1>BoJack Horseman Characters</h1>
      <div className = 'list'>
        {bios}
      </div>
    </div>
  );
}


export default App;
