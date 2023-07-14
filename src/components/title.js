import React from 'react'
import { Row, Col } from 'react-bootstrap';

import { person } from './../data';

const Title = () => {
    return (
        <Row className='justify-content-between'>
            <Col>
                <h1> عدد حالات الانظار هو {person.length} </h1>
            </Col>
        </Row>
    )
}

export default Title
