import { useState } from 'react';
import './App.css'

const App = () => {
  const [info, setInfo] = useState()


  const fetchHandler = async () => {
    // brandenburg gate, germany

    let latitude = 52.516266;
    let longitude = 13.377775;
    let apiKey = "bb3d2d98459078abb132df015a9e175f";
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setInfo(responseData)
        console.log(responseData.sys)
      });
  };

  return (
    <div>
      <h3>Country: {info.sys.country}</h3>
      <button onClick={fetchHandler}>Fetch</button>
    </div>
  );
};

export default App;