import React,{useRef, useEffect} from "react";
import Seder from '../../../assets/sederLogo.png'
import {Row, Col} from 'react-bootstrap'
import Sun from '../../../assets/Sun.png'
import Moon from '../../../assets/Moon.png'
import Cloud from '../../../assets/Cloud2.png'
import axios from 'axios';
import Rain from '../../../assets/raining.png'
import Umbrella from '../../../assets/umbrella.png'

const SideContainer = ({times}) => {
    const [data, setData] = React.useState([]);
    const [dates, setDates] = React.useState([]);
    const [isWeather, setIsWeather] = React.useState(false)

    const ref = useRef(null)

    React.useEffect(() => {
        const options = {
          method: "GET",
          url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
          params: { q: "Riyadh", days: "1" },
          headers: {
            "X-RapidAPI-Key": "75968c2122mshc78b53ce5e5c7a8p122f51jsnba08182291e0",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
          }
        };
        const value = []
        const dateValue = []
        axios
          .request(options)
          .then((response) => {
            // console.log(response)
            response.data.forecast.forecastday.map(item => {
              value.push(item.day)
              dateValue.push(item.date)
              setData(value)
              setDates(dateValue)
            })
           
          })
          .catch(function (error) {
            setData(error);
          });
          if(times > 12) {
            setIsWeather(true)
          }
          else {
            setIsWeather(true)
            // setIsWeather(true)
          }
      }, []);


      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const monthDate = dates.toLocaleString().split('-')
      const template = `${months[monthDate[1] - 1]} ${monthDate[2]} ${monthDate[0]}`

      const SunnyDay = () => {
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
                    {data.map(item => {
                      console.log(item)
                        return (
                            <div className="weather-widget">
                            <h1 className="Location">Riyadh, {item.avgtemp_c}<span>&#176;</span>&nbsp;C</h1>
                                <img src={Sun} alt="..." className="sun-weather"/>
                                <img src={Cloud} alt="..." className="cloud-weather"/>
                                {/* <img src={Rain} alt="..." className="rain-weather"/> */}
                                {/* <img src={Umbrella} alt="..." className="rain-weather-umbrella"/> */}
                                {/* <img src={Cloud} alt="..." className="cloud-weather2"/> */}
                            <h3 className="Date">{template}</h3>
                            <h1 className="copyrights">Shared Services <br></br>&nbsp;IT Department</h1>
                            </div>
                        )
                    })}
                    </Col>  
                </Row>
            </div>
        </React.Fragment>
        )
      }

      const Raining = () => {

        const randomNumber = (limit) => {
          return Math.floor(Math.random() * limit);
        };

        const rain = document.querySelector(".rain");
        for (let i = 0; i < 250; i++) {
          const rainDrop = document.querySelector(".rains");
          const aNumber = randomNumber(20);
          const timeDelay = randomNumber(10);
          const animDuration = randomNumber(5) + Math.random() + 0.2;
          rainDrop.style.left = `${aNumber}%`;
          rainDrop.style.animationDelay = `${timeDelay}s`;
          rainDrop.style.animationDuration = `${animDuration}s`;
          rain.appendChild(rainDrop);
        }

       return (
         <>
          <div className="rain">
            <span className='rains'></span>
            <span className='rains'></span>
            <span className='rains'></span>
            <span className='rains'></span>
            <span className='rains'></span>
            <span className='rains'></span>
            <span className='rains'></span>
            <span className='rains'></span>
            <span className='rains'></span>
          </div>
         </>
       )
     }

      const Night = () => {
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
                    {data.map(item => {
                        return (
                            <div className="weather-widget">
                            <h1 className="Location">Riyadh, {item.avgtemp_c}<span>&#176;</span>&nbsp;C</h1>
                                <img src={Moon} alt="..." className="moon-weather"/>
                                <img src={Cloud} alt="..." className="cloud-weather-night"/>
                            <h3 className="Date">{template}</h3>
                            </div>
                        )
                    })}
                    </Col>
                </Row>
            </div>
                <Row>
                  <h1 className="copyrights">Shared Services <br></br>&nbsp;IT Department</h1>
                </Row>
        </React.Fragment>
        )
      }

    return (
        // <React.Fragment>
        //     <div className="side-Container">
        //         <Row>
        //             <Col>
        //                 <img src={Seder} alt="..." className="sederLogo"/>
        //             </Col>
        //         </Row>
        //         <Row>
        //             <Col>
        //             {data.map(item => {
        //                 return (
        //                     <div className="weather-widget">
        //                     <h1 className="Location">Riyadh, {item.avgtemp_c}<span>&#176;</span>&nbsp;C</h1>
        //                         <img src={Sun} alt="..." className="sun-weather"/>
        //                         <img src={Cloud} alt="..." className="cloud-weather"/>
        //                     <h3 className="Date">{template}</h3>
        //                     </div>
        //                 )
        //             })}
        //             </Col>
        //         </Row>
        //     </div>
        // </React.Fragment>
        <>
            {isWeather === true ?  SunnyDay() : SunnyDay()}
        </>
    )
}


export default SideContainer