import React from 'react'
import Like from './like'
import {Container, Card} from 'react-bootstrap'

export default function Photo({photo}) {
    return (
        <Container> 
            <Card>
                <Card.Title>
                   <h1>Spacestagram</h1> 
                </Card.Title>
                <Card.Img src={photo.url} alt="giant orange ball"/>
                <Card.Body>
                    <h4>{photo.title} - {photo.date}</h4>
                    <Card.Text>
                      <p>{photo.explanation}</p>
                    </Card.Text>
                </Card.Body>
                <Like/> 
            </Card>
      </Container>
    )
}
