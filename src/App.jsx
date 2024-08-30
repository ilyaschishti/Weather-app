import { useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import "./App.css";

function App() {
  const weather = useWeather();

  // Fetch the current user's location on component mount
  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []);

  // Function to refresh weather based on current location and clear input
  const handleRefresh = () => {
    weather.fetchCurrentUserLocationData();
    weather.setSearchCity(''); // Clear the input field
  };

  return (
    <div className="App">
      <h2>Get Real-Time Weather Updates</h2>
      <Input />
      <br />
      <br />
      <Button onClick={weather.fetchData} value="Search" />
      <br />
      <br />
      <Card />
      <br />
      <Button onClick={handleRefresh} value="Weather for My Location" />
<br />
<br />
<br />
<br />
      <section  >
        <div>
          Struggle by ilyas
        </div>
      </section>
    </div>
  );
}

export default App;
