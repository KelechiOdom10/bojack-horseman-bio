import React from 'react'

function Character(props) {
    return (
        <div>
        <h2>{props.name}</h2>
        <p className = 'voiced'>Voiced by <a href = '#'>{props.actor}</a></p>
        <p>{props.description}</p>
        <blockquote>{props.quote}</blockquote>
        </div>
    )
  }

  export default Character;