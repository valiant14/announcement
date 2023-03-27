import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";

//change center image
import imagePic from "../../../assets/sederLogo.png";
import imagePic0 from "../../../assets/0.jpg";

const MainContent = ({ getTime }) => {
  const [changeText, setChangeText] = React.useState(0);
  const [view, setview] = React.useState(false)

  const SLIDES = [
    {
      title: "",
      textEN:
        "",
      textAR:
        "",
    },
    {
      title: "",
      textEN:
        "",
      textAR:
        ""
    },
    {
      title: "",
      textEN:
        "",
      textAR:
        "",
    },
  ];

  const test = () => {
    if (changeText != SLIDES.length - 1) {
      setChangeText(changeText + 1);
    }
    if (changeText === SLIDES.length - 1) {
      setChangeText(0);
    }
  };

  return (
    <>

        <Row>
          <div className="timeContainer">{getTime}</div>
          <Col sm={12}>
          <div className="square">
          <div className="annoucement-bg">
            <div className="main-bg">
              {/* <h1>News</h1> */}
            </div>
          </div>
            
            <div className="main-card">
              <Carousel onSlide={test}>
                <Carousel.Item interval={30000}>
                  {view ? <img className="imagePic" src={imagePic} alt="First slide" /> : <img className="imagePic-Announcement" src={imagePic0} alt="First slide" />}              
                  {/* <img className="imagePic-Announcement" src={imagePic} alt="First slide" /> */}
                <Carousel.Caption>
                    {/* <h5>First slide label</h5> */}
                    {/* <p >
                    شركة مجموعة سدر " الشريك الرئيسي " لملتقى التطوع الأول تحت رعاية امير منطقة مكة المكرمة
                    </p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item interval={30000}>
                  <img className="imagePic" src={sederLogo} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={30000}>
                  <img className="imagePic" src={sederLogo} alt="First slide" />
                </Carousel.Item> */}
              </Carousel>
                    {/* <p className="paraG">
                    شركة مجموعة سدر " الشريك الرئيسي " لملتقى التطوع الأول تحت رعاية امير منطقة مكة المكرمة
                    </p> */}
            </div>
            </div>
          </Col>
        </Row>
    </>

  );
};

export default MainContent;
