import React, { useEffect, useState } from 'react';
import Title from "./components/title";
import { person } from './data';
import BoxItem from './components/box';
import End from './components/end';
import { Container } from 'react-bootstrap';

const App = () => {
    const [statePerson, setPerson] = useState(person)
    const showData = () => {
        setPerson(person)
    }
    const delData = () => {
        setPerson([]);
    }
    // to show empty data in start
    useEffect(() => {
        setPerson([]);
    }, [])

    return (
        <div className='text-style text-color'>
            <Container className='py-5'>
                <Title />
                <BoxItem person={statePerson} />
                <End delPer={delData} showPer={showData} />
            </Container>
        </div>
    )
}

export default App
