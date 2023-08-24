import { useRef, useState } from "react";
import axios from "axios";

import SpinnerLoading from "./templates/SpinnerLoading/SpinnerLoading";
import UserInput from "./templates/UserInput/UserInput";
import Output from "./templates/Output/Output";

import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState();
  const [btnClicked, setBtnClicked] = useState(false);
  // country flag
  const [flagURL, setFlagURL] = useState("");

  const latitude = useRef();
  const longitude = useRef();
  const apiKey = "bb3d2d98459078abb132df015a9e175f";

  const fetchHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.current.value}&lon=${longitude.current.value}&appid=${apiKey}`
      );

      const responseData = await response.json();
      setInfo(responseData);
      console.log(responseData);

      const reponseFlag = await axios.get(
        `https://restcountries.com/v3.1/alpha/${responseData.sys.country}`
      );
      setFlagURL(reponseFlag.data[0].flags.png);
      setBtnClicked(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const loadingState = btnClicked && isLoading;
  const fetchedState = btnClicked && !isLoading;

  return (
    <div className="container">
      {loadingState && <SpinnerLoading />}
      {fetchedState && <Output info={info} flagURL={flagURL} />}
      {!btnClicked && (
        <UserInput
          fetchHandler={fetchHandler}
          latitude={latitude}
          longitude={longitude}
        />
      )}
    </div>
  );
};

export default App;
