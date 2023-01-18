import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import sederLogo from "../../../assets/sederLogo.png";
import Office2 from "../../../assets/office/office2.jpg";
import Office3 from "../../../assets/office/office3.jpg";
import football from '../../../assets/football.jpg'
import gidam from '../../../assets/gidam.jpg'
import Ceremony from '../../../assets/ceremony.jpeg'
import Weekends from '../../../assets/weekends.jpeg'
import GM from '../../../assets/GM.jpeg'
import PMO from '../../../assets/PMO.png'
import PMO2 from '../../../assets/PMO2.png'
import RainingAAAA from '../../../assets/rain202.png'

const MainContent = ({ getTime }) => {
  const [changeText, setChangeText] = React.useState(0);

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
          {/* <Col sm={4}>
            <div className="title-card">
              <h1>{SLIDES[changeText].title}</h1>
              <p>{SLIDES[changeText].textAR}</p>
              <p>{SLIDES[changeText].textEN}</p>
            </div>
          </Col> */}
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
                  <img className="imagePic" src={sederLogo} alt="First slide" />
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
