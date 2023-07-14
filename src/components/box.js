import React from 'react'
import { Row, Col } from 'react-bootstrap';

const BoxItem = ({ person }) => {

    return (
        <div>
            <Row className='box justify-content-between'>
                <Col>
                    {person.length ? (
                        person.map((item) => {
                            return (
                                <div key={item.id} className='d-flex p-4 bord-bot'>
                                    <img className='img-style mx-4' src='1.jpeg' alt='img' />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            )
                        })
                    ) : <h1>لا يوجد مواعيد</h1>}
                </Col>
            </Row>

        </div>
    )
}

export default BoxItem
