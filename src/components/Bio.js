import React from 'react';
import {Card} from 'react-bootstrap';
import Character from '../components/Character'

function Bio(props) {
    return (
        <div className = 'box'>
            <Card style={{ width: '20rem', height: '24rem'}}>
            <Card.Img variant="top" src={props.link} />
                <Character 
                name = {props.name} 
                actor = {props.actor} 
                description = {props.description} 
                quote = {props.quote} />
            </Card>
        </div>
    )
}

export default Bio