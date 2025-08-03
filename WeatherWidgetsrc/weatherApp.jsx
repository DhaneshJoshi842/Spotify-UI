import { useState } from "react";
import Searchbox from "./searchBox";
import InfoBox from "./infoBox";

function WeatherApp() {
    let [weatherinfo, setweatherinfo] = useState("");

    function addinfo(info) {
        setweatherinfo(info);
    }
    let style = { fontWeight: "bold", color: "#445566" };
    return (
        <div>
            <h2 style={style}>Temperature Tracker</h2>
            <Searchbox addinfo={addinfo} />
            <InfoBox info={weatherinfo} />
        </div >
    )
}
export default WeatherApp