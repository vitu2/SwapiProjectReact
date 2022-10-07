import React, { useState } from 'react';
import { Card, CardContent, CardDescription, Grid } from 'semantic-ui-react';
import Graphic from './Graphic'
import 'semantic-ui-css/semantic.min.css'
import './People.css'



export default function People({ data }) {


  return (
    <>
    <Graphic />
    <h1>People</h1>
    <div className="cards-container">
    <Grid columns={2} >
      {data.map((people, i) => {
        return (
          <Grid.Column key={i}>
            <Card fluid>
              <Card.Content>
                <Card.Header>Name: {people.name}</Card.Header>
                <Card.Description>
                  <strong>Birth Year</strong>
                  <p >{people.birth_year}</p>
                  <strong>Eye Color</strong>
                  <p>{people.eye_color}</p>
                  <strong>Gender</strong>
                  <p>{people.gender}</p>
                  <strong>Mass</strong>
                  <p>{people.mass} KG</p>
                  <strong>Skin Color</strong>
                  <p>{people.skin_color}</p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      } )}
    </Grid>
    <br />
    <br />
        
    </div>
    </>
  )
}

