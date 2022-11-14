import React from "react";
import {Row, Col, Carousel} from 'react-bootstrap'


const MainContent = () => {

    return (
        <div className="border-content">

            <div className="square">
                <Row>
                <div className="annoucement-bg">
                    <div className="main-bg">
                    </div>
                    <div className="main-title">
                        <h1>Announcement</h1>
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
                            <div className="main-card" >
                                <Carousel className="image-content">
                                    <Carousel.Item interval={30000} >
                                        <img
                                        className="d-block w-100"
                                        src="https://img.freepik.com/free-photo/two-people-holding-hands-together-with-love-warmth-wooden-table_1150-26177.jpg?w=2000"
                                        alt="First slide"                                                                         
                                        />
                                        <Carousel.Caption >
                                        <h5>First slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item interval={30000}>
                                        <img
                                        className="d-block w-100"
                                        src="https://miro.medium.com/max/1400/1*OEnS6-DEn56szCwdOs2mrA.jpeg"
                                        alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                        <h5>Second slide label</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item interval={30000}>
                                        <img
                                        className="d-block w-100"
                                        src="https://cdn.pixabay.com/photo/2018/01/04/19/43/love-3061483__340.jpg"
                                        alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                        <h5>Third slide label</h5>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>    
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default MainContent