import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InfoBox from "./infoBox";

function Searchbox({ addinfo }) {
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);

    function searchCity(event) {
        setCity(event.target.value);
    }
    async function handleSubmit(event) {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await searchWeather();
            addinfo(info);
            seterror(false);
        } catch (err) {
            seterror(true);
        }
    }

    let api_url = "https://api.openweathermap.org/data/2.5/weather"
    let api_key = "5db589f0a7a12b3a3ef6ec094c57c609";

    async function searchWeather() {
        let responce = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
        let jsonResponce = await responce.json();
        console.log(jsonResponce);
        let result = {
            city: city,
            feelsLike: jsonResponce.main.feels_like,
            Temp: jsonResponce.main.temp,
            maxTemp: jsonResponce.main.temp_max,
            minTemp: jsonResponce.main.temp_min,
            Humidity: jsonResponce.main.humidity,
            Weather: jsonResponce.weather[0].description
        }
        console.log(result);
        return result;
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="city" variant="outlined" value={city} onChange={searchCity} />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
                <br></br>
                {error && <h4 style={{ color: "red" }}>No such City exists!</h4>}
                <br></br>
            </form>
        </div >
    )
}
export default Searchbox

