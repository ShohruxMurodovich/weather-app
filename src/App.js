import { useState, useEffect } from 'react';
import wind from "./Assets/Images/wind.png";
import wet from "./Assets/Images/wet.png";
import umbrella from "./Assets/Images/umbrella.png";
import Images from "./Helper/Images"
import Loader from "./Assets/Images/loader.gif"



import "./Assets/Main.css"

function App() {

  const APIKEY = "5b6cead7343ca43653b06278c6564ff0"
  const [city, setCity] = useState("Tashkent")
  const [data, setData] = useState({
    isFetched: false,
    data: {},
    error: false,
  })
  const [unit , setUnit] = useState("metric")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${unit}`)
      .then((res) => res.json())
      .then((data) => setData({
        isFetched: true,
        data: data,
        error: false,
      }))
  }, [city , unit])

  const handleSearch = (evt) => {
    if (evt.code === "Enter") {
      setCity(evt.target.value)
      evt.target.value = null
    }
  }

  console.log(data.data);

  return (
    <div className="container">

      <h2 className='title'>Right now in <input className='input' onKeyUp={handleSearch} type="text" />.</h2>

      {
        data.isFetched ? (
          <case>
            <h2 className='city-name'>{data.data.name}</h2>

            <div className="inner-case">

              <div className="wrapper">
                <Images code={data.data.weather[0].id}/>
                <p className='city-temp'>{Math.round(data.data.main.temp)} °C</p>
              </div>

              <div className="wind">

                <div className="wind-case">
                  <img className="wind-icon" src={wind} alt="Wind icon" />
                  <p className="wind-text">{data.data.wind.speed}.mph</p>
                </div>

                <div className="wind-case">
                  <img className="wind-icon" src={wet} alt="wet icon" />
                  <p className="wind-text">{data.data.main.humidity} %</p>
                </div>

                <div className="wind-case">
                  <img className="wind-icon" src={umbrella} alt="umbrella icon" />
                  <p className="wind-text">{data.data.clouds.all} %</p>
                </div>

              </div>

            </div>

          <div className="btn-case">
            <button className='btn metric' type='button' onClick={() => setUnit("metric")}>°C</button>
            <button className='btn standard' type='button' onClick={() => setUnit("standard")}>℉</button>
            </div>

          </case>
        ) : (
          <img className='loader' src={Loader} alt='Loader'/>
        )
      }


    </div>
  );
}

export default App;
