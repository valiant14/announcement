import React,{useState,useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import bg from '../assets/bg.mp4'
import SideContainer from './sideContainer'
import MainContent from './mainContainer'
import News from './newContainer'

const Main = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => setCurrentTime(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    },[])

    var time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    const toRegularTime = (militaryTime) => {
        const [hours, minutes] = militaryTime.split(':');
        return `${(hours > 12) ? hours - 12 : hours}:${minutes} ${(hours >= 12) ? 'PM' : 'AM'}`;
    }
    
    return (
        <React.Fragment>
            <Row>
                <Col className='container'>
                    <Row>
                        <Col sm={3}>
                            <SideContainer/>
                        </Col>
                        <Col>
                            <div className='timeContainer'>{toRegularTime(time)}</div>
                            <MainContent />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <News />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Main