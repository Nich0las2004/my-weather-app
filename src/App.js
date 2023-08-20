import { useState } from 'react';
import './App.css'

const App = () => {
  const [info, setInfo] = useState()
  const [btnClicked, setBtnClicked] = useState(false)

  let latitude = 52.516266;
  let longitude = 13.377775;
  let apiKey = "bb3d2d98459078abb132df015a9e175f";

  const fetchHandler = async () => {
    try{
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      )
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      setInfo(responseData);
      console.log(responseData);
      
      setBtnClicked(true)
    }
    catch(err){
      console.log(err)
    }
  };

  return (
    <div>
      {btnClicked && <h3>Country: {info.sys.country}</h3>}
      <button onClick={fetchHandler}>Fetch</button>
    </div>
  );
};

export default App;