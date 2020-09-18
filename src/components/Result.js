import React from 'react'
import { Card } from 'react-bootstrap'

export default function Result({city, state, population, growth, lat, long}) {

    return (
        <>
            <Card className="col-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3 mb-5 bg-secondary text-light p-4">
                <Card.Title>
                    {city}, {state}
                </Card.Title>
                <Card.Text>
                    Population: {population}
                </Card.Text>
                <Card.Text>
                    Growth From Year 2000 to 2013: {growth}
                </Card.Text>
                <Card.Text>
                    Latitude: {lat}
                </Card.Text>
                <Card.Text>
                    Longitude: {long}
                </Card.Text>
            </Card>
        </>
    )
}