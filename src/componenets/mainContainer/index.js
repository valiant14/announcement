import React from "react";
import {Row, Col, Carousel} from 'react-bootstrap'
import Office1 from '../../assets/office/office1.jpg'
import Office2 from '../../assets/office/office2.jpg'
import Office3 from '../../assets/office/office3.jpg'

const MainContent = ({getTime}) => {
    const [changeText, setChangeText] = React.useState(0)

    const SLIDES = [
        {
          title: "What is Lorem Ipsum?",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        {
          title: "Why do we use it?",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
          title: "Where can I get some?",
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
        },
      ];



    const test = () => {
        if(changeText != SLIDES.length - 1){
            setChangeText(changeText + 1)
        }
        if(changeText === SLIDES.length -1) {
            setChangeText(0)
        }
    }

    return (
        <div className="border-content">

            <div className="square">
                <Row>
                    <div className="annoucement-bg">
                        <div className="main-bg">
                            <h1>Announcement</h1>
                        </div>
                    </div>
                    <Col sm={4}>
                        <div className="title-card">
                            <h1>{SLIDES[changeText].title}</h1>
                            <p>{SLIDES[changeText].text}</p>
                        </div>
                    </Col>
                    <Col>
                            <div className="timeContainer">{getTime}</div>
                            <div className="main-card" >
                                <Carousel className="image-content" onSlide={test}>
                                    <Carousel.Item interval={30000} >
                                        <img
                                        className="imagePic"
                                        src={Office2}
                                        alt="First slide"                                                                       
                                        />
                                        <Carousel.Caption >
                                        <h5>First slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item interval={30000}>
                                        <img
                                        className="imagePic"
                                        src={Office2}
                                        alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                        <h5>Second slide label</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item interval={30000}>
                                        <img
                                        className="imagePic"
                                        src={Office3}
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
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default MainContent