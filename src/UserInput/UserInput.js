import classes from "./UserInput.module.css";

const UserInput = ({ fetchHandler, latitude, longitude }) => {
  return (
    <form className={classes.form} onSubmit={fetchHandler}>
      <label 
      className={classes.labels}
      htmlFor="latitude">Enter a latitude:</label>
      <input
        className={classes.inputs}
        defaultValue="38.897957"
        placeholder="Latitude"
        ref={latitude}
        id="latitude"
        type="text"
        required
      />
      <label 
      className={classes.labels}
      htmlFor="longitude">Enter a longitude:</label>
      <input
        className={classes.inputs}
        defaultValue="-77.036560"
        placeholder="Longitude"
        ref={longitude}
        id="longitude"
        type="text"
        required
      />
      <button className={classes.button}>Fetch</button>
    </form>
  );
};

export default UserInput;
