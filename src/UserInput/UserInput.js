const UserInput = ({ fetchHandler, latitude, longitude }) => {
  return (
    <form onSubmit={fetchHandler}>
      <label htmlFor="latitude">Enter a latitude:</label>
      <input
        defaultValue="38.897957"
        placeholder="Latitude"
        ref={latitude}
        id="latitude"
        type="text"
        required
      />
      <label htmlFor="longitude">Enter a longitude:</label>
      <input
        defaultValue="-77.036560"
        placeholder="Longitude"
        ref={longitude}
        id="longitude"
        type="text"
        required
      />
      <button>Fetch</button>
    </form>
  );
};

export default UserInput;
