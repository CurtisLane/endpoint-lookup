import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

/* Simple input with search button inside a bootstrap card with minimal styling. Input changes update the hook and set the data-value of the button dynamicall to be used in App.js for the search parameter. */

export default function Search({handleClick}) {

    const [valueState, setValueState] = useState('')

    const handleInputChange = e => {
        setValueState(e.target.value)
    }

    return (
        <>
            <Card className="col-12 col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3 my-5 bg-secondary text-light p-4">
                <Form>
                    <Form.Group controlId="formBasicSearch">
                        <Form.Label>Search for a city and state in the US.</Form.Label>
                        <Form.Control onChange={handleInputChange} type="text" placeholder="Ex: San Francisco, CA" />
                    </Form.Group>
                    <Button data-value={valueState} className="mb-2" variant="primary" type="button" onClick={handleClick}>
                        Search
                </Button>
                </Form>
            </Card>
        </>
    )
}