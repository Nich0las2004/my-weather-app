import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [info, setInfo] = useState();
  const [btnClicked, setBtnClicked] = useState(false);

  const latitude = useRef();
  const longitude = useRef();
  const apiKey = "bb3d2d98459078abb132df015a9e175f";

  const fetchHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.current.value}&lon=${longitude.current.value}&appid=${apiKey}`
      );

      const responseData = await response.json();
      setInfo(responseData);
      console.log(responseData);

      setBtnClicked(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      {btnClicked && (
        <div className="info">
          <h3>Name: {info.name}</h3>
          <h3>Country: {info.sys.country}</h3>
          <h3>Weather: {info.weather[0].main}</h3>
          <h3>Weather description: {info.weather[0].description}</h3>
          <h3>Humidity: {info.main.humidity}</h3>
          <h3>Wind Speed: {info.wind.speed}</h3>
        </div>
      )}
      {!btnClicked && (
        <form onSubmit={fetchHandler}>
          <label htmlFor="latitude">Enter a latitude:</label>
          <input defaultValue="38.897957" ref={latitude} id="latitude" type="text" required />
          <label htmlFor="longitude">Enter a longitude:</label>
          <input defaultValue="-77.036560" ref={longitude} id="longitude" type="text" required />
          <button>Fetch</button>
        </form>
      )}
    </div>
  );
};

export default App;
