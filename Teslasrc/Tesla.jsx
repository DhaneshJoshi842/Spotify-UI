import React, { useState } from 'react';
import './Teslacars.css';
import { Link } from 'react-router-dom';

// Import images from src folder
import image1 from './TeslacarsAssets/image-1.png';
import image2 from './TeslacarsAssets/image-2.png';
import image3 from './TeslacarsAssets/image-3.png';
import image4 from './TeslacarsAssets/image-4.png';
import cybertruckImage from './TeslacarsAssets/cybertruck.webp';
import logo from './TeslacarsAssets/logo (1).png';

const Tesla = () => {
    const [vehicleData, setVehicleData] = useState({
        backgroundImage: image1,
        mph: "1.9 s",
        topSpeed: "200 mph",
        maxRange: "396 mi",
        modelName: "Model S",
        price: "$79,990",
    });

    const vehicles = {
        modelS: {
            backgroundImage: image1,
            mph: "1.9 s",
            topSpeed: "200 mph",
            maxRange: "396 mi",
            modelName: "Model S",
            price: "$79,990",
        },
        model3: {
            backgroundImage: image2,
            mph: "1.7 s",
            topSpeed: "220 mph",
            maxRange: "415 mi",
            modelName: "Model 3",
            price: "$39,990",
        },
        modelX: {
            backgroundImage: image4,
            mph: "1.5 s",
            topSpeed: "240 mph",
            maxRange: "458 mi",
            modelName: "Model X",
            price: "$89,990",
        },
        modelY: {
            backgroundImage: image3,
            mph: "1.3 s",
            topSpeed: "250 mph",
            maxRange: "510 mi",
            modelName: "Model Y",
            price: "$49,990",
        },
        cyberTruck: {
            backgroundImage: cybertruckImage,
            mph: "2.9 s",
            topSpeed: "130 mph",
            maxRange: "500 mi",
            modelName: "Cyber Truck",
            price: "$39,900",
        },
    };

    const handleVehicleClick = (vehicle) => {
        setVehicleData(vehicles[vehicle]);
    };

    return (
        <div className="header" style={{ backgroundImage: `url(${vehicleData.backgroundImage})` }}>
            <div id="upper_div">
                <img id="logo" src={logo} alt="logo not present" />
                <div id="model">
                    <Link
                        className="model_element"
                        style={{
                            textDecoration: 'none',
                            cursor: 'pointer',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: 'black'
                        }}
                        to="/"  // This navigates to the home route
                    >
                        Home
                    </Link>
                    <a className="model_element" style={{
                        cursor: 'pointer',
                        fontSize: '30px',  // Adjust the font size as needed
                        fontWeight: 'bold',
                        color: 'black'
                    }} onClick={() => handleVehicleClick('modelS')}>Model S</a>
                    <a className="model_element" style={{
                        cursor: 'pointer',
                        fontSize: '30px',  // Adjust the font size as needed
                        fontWeight: 'bold',
                        color: 'black'
                    }} onClick={() => handleVehicleClick('model3')}>Model 3</a>
                    <a className="model_element" style={{
                        cursor: 'pointer',
                        fontSize: '30px',  // Adjust the font size as needed
                        fontWeight: 'bold',
                        color: 'black'
                    }} onClick={() => handleVehicleClick('modelX')}>Model X</a>
                    <a className="model_element" style={{
                        cursor: 'pointer',
                        fontSize: '30px',  // Adjust the font size as needed
                        fontWeight: 'bold',
                        color: 'black'
                    }} onClick={() => handleVehicleClick('modelY')}>Model Y</a>
                    <a className="model_element" style={{
                        cursor: 'pointer',
                        fontSize: '30px',  // Adjust the font size as needed
                        fontWeight: 'bold',
                        color: 'black'
                    }} onClick={() => handleVehicleClick('cyberTruck')}>Cyber Truck</a>
                </div>
                <button id="reserve_btn">
                    Reserve Now In <span id="price">{vehicleData.price}</span>
                </button>
            </div>
            <div className="lower_div">
                <div className="lower_div_info">
                    <div id="mph">{vehicleData.mph}</div>
                    <div id="top_speed">{vehicleData.topSpeed}</div>
                    <div id="max_range">{vehicleData.maxRange}</div>
                    <div id="line"></div>
                    <div id="Model_name">{vehicleData.modelName}</div>
                </div>
                <div className="static_info">
                    <p id="mph_para">60 mph</p>
                    <p id="top_speed_para">Top Speed</p>
                    <p id="max_range_para">Max Range</p>
                </div>
            </div>
        </div>
    );
};

export default Tesla;
