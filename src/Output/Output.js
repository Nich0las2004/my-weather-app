const Output = ({info, flagURL}) => {
  return (
    <div className="info">
      <h3>Name: {info.name}</h3>
      <h3 style={{ display: "flex", alignItems: "center" }}>
        Country: <img src={flagURL} alt={`${info.sys.country} Flag`} />
      </h3>
      <h3>Weather: {info.weather[0].main}</h3>
      <h3>Weather description: {info.weather[0].description}</h3>
      <h3>Humidity: {info.main.humidity}</h3>
      <h3>Wind Speed: {info.wind.speed}</h3>
    </div>
  );
};

export default Output;
