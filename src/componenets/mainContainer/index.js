import React from "react";
import {Row, Col} from 'react-bootstrap'


const MainContent = () => {
    return (
        <div className="border-content">

            <div className="square">
                <Row>
                <div className="annoucement-bg">
                    <div className="main-bg">
                    </div>
                    <div className="main-title">
                        <h1>Annoucement</h1>
                    </div>
                </div>
                    <Col sm={4}>
                        <div className="title-card">
                            <h1>Lorem Ipsum</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                             It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
                              from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
                              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by 
                              Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="bg-card">
                            <div className="main-card"></div>
                        </div>    
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default MainContent