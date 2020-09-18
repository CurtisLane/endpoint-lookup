import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export default function Search({handleClick}) {

    return (
        <>
            <Card className="col-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3 my-5">
                <Form>
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Search for a city and state in the US.</Form.Label>
                        <Form.Control type="text" placeholder="Ex: San Francisco, CA" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleClick}>
                        Search
                </Button>
                </Form>
            </Card>
        </>
    )
}