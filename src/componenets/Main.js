import React from 'react'
import {Row, Col} from 'react-bootstrap'
import bg from '../assets/bg.mp4'
import SideContainer from './sideContainer'
import MainContent from './mainContainer'

const Main = () => {
    return (
        <React.Fragment>
            <Row>
                <Col className='container'>
                    <Row>
                        <Col sm={3}>
                            <SideContainer/>
                        </Col>
                        <Col>
                            <div className='timeContainer'>8:00AM</div>
                            <MainContent />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Main