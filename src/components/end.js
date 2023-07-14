import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
const End = ({ delPer, showPer }) => {

    return (
        <div>
            <Row className='mt-2 justify-content-center'>
                <Col className='d-flex justify-content-between'>
                    <Button variant="dark px-5 py-2" onClick={delPer}>حذف</Button>
                    <Button variant="dark px-5 py-2" onClick={showPer}>اضافة</Button>
                </Col>
            </Row>
        </div >
    )
}

export default End
