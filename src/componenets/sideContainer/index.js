import React from "react";
import Seder from '../../assets/sederLogo.png'
import {Row, Col} from 'react-bootstrap'
import Sun from '../../assets/Sun.png'
import Cloud from '../../assets/Cloud2.png'


const SideContainer = () => {
    return (
        <React.Fragment>

            <div className="side-Container">
                <Row>
                    <Col>
                        <img src={Seder} alt="..." className="sederLogo"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="weather-widget">
                            <h1 className="Location">Riyadh, 25<span>&#176;</span>C&nbsp;</h1>
                                <img src={Sun} alt="..." className="sun-weather"/>
                                <img src={Cloud} alt="..." className="cloud-weather"/>
                            <h3 className="Date">13 November 2022</h3>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}


export default SideContainer