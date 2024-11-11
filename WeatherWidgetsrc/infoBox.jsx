import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


function InfoBox({ info }) {

    let hot_url = "https://www.abc27.com/wp-content/uploads/sites/55/2023/07/GettyImages-1226628621.jpg?w=1280";
    let cold_url = "https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rainy_url = "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let def_url = "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/10/featured-use-weather-app-macos-ventura.jpg";
    return (
        <Card sx={{ maxWidth: 345 }} className="info_card">
            <CardMedia
                sx={{ height: 140 }}
                image={info ? (info.Humidity > 80 ? rainy_url : info.Temp > 20 ? hot_url : cold_url) : def_url}
                title="info"
            />
            <CardContent>
                {info ?
                    <div>

                        <h2 style={{ display: "inline-block" }}>{info.city}</h2>
                        &nbsp;&nbsp;
                        {info.Humidity > 80 ? <ThunderstormIcon /> : info.Temp > 20 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        <h4>Temprature:{info.Temp} &deg;C</h4>
                        <h4>Humidity:{info.Humidity}</h4>
                        <h4>Maximum Temp:{info.maxTemp} &deg;C</h4>
                        <h4>Minimum Temp:{info.minTemp} &deg;C</h4>

                        <h5>Weather can be described as {info.Weather} and feels like {info.feelsLike} &deg;C</h5>
                    </div>





                    : <h3>Search City!!</h3>}
            </CardContent>

        </Card>
    )
}

export default InfoBox