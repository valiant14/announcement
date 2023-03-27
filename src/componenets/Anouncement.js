import React,{useState,useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import bg from '../assets/bg.mp4'
import SideContainer from '../componenets/Anouncement_Components/sideContainer'
import MainContent from '../componenets/Anouncement_Components/mainContainer/index'
// import MainContent from '../componenets/Anouncement_Components/mainContainer/withTextDiv'
import News from '../componenets/Anouncement_Components/footers'
import axios from "axios";
import BG from './../assets/office/officeBG.mp4'

const Announcement = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => setCurrentTime(new Date()), 60000)
        refresh()
        return function cleanup() {
            clearInterval(timer)
        }
    },[])

    const refresh = () => {
        setTimeout(() => {
            window.location.reload()
        }, 60000);
    
    }

    function GetTime() {
        var hours = currentTime.getHours()
        var suffix = '';
        if (hours > 11) {
            suffix += "PM";
        } else {
            suffix += "AM";
        }
        var minutes = currentTime.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }
        var time = hours + ":" + minutes + " " + suffix;

        return time;
    }

    const times = currentTime.getHours()
    const MyCurrentTime = GetTime()
    return (
        <React.Fragment>
            <Row className='rowHeight'>
                <Col className='container'>
                    <Row>
                        <Col sm={3}>
                            <SideContainer times={times}/>
                        </Col>
                        <Col sm={6}>
                            <MainContent getTime={MyCurrentTime}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <News />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Announcement