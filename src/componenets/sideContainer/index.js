import React from "react";
import Seder from '../../assets/sederLogo.png'
import {Row, Col} from 'react-bootstrap'
import Sun from '../../assets/Sun.png'
import Cloud from '../../assets/Cloud2.png'
import axios from 'axios';

const SideContainer = () => {
    const [data, setData] = React.useState([]);
    const [dates, setDates] = React.useState([]);

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
            console.log(response)
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
      }, []);

      console.log(dates)

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
                                <img src={Sun} alt="..." className="sun-weather"/>
                                <img src={Cloud} alt="..." className="cloud-weather"/>
                            <h3 className="Date">{dates}</h3>
                            </div>
                        )
                    })}
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}


export default SideContainer