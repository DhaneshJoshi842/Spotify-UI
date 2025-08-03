// Inside TeslaHome.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TeslaHome.css';
import videoSrc from './TeslacarsAssets/tesla vidio.mp4';
import logo from './TeslacarsAssets/logo (1).png';

const TeslaHome = () => {
    const [infoIndex, setInfoIndex] = useState(0);

    const infoContent = [
        <div>
            <h2 style={{ color: 'white', fontSize: '35px' }}>Find Tesla for You</h2>
            <p style={{ color: 'white', fontSize: '25px' }}>Discover which model is best for you and your lifestyle</p>
            <button style={{ color: 'white', backgroundColor: 'black', border: 'none', fontSize: '22px' }}>Help Me Choose</button>
        </div>,
        <div>
            <h2 style={{ color: 'white', fontSize: '35px' }}>Model Y Starting At $36,490</h2>
            <h2 style={{ color: 'white', fontSize: '35px' }}>After Federal Tax Credit</h2>
            <p style={{ color: 'white', fontSize: '25px' }}>Eligible buyers qualify for $7,500 federal tax credit</p>
            <button style={{ color: 'black', backgroundColor: 'white', border: 'none', fontSize: '22px' }}>Shop Available</button>&nbsp;&nbsp;
            <button style={{ color: 'white', backgroundColor: 'black', border: 'none', fontSize: '22px' }}>Demo Drive</button>
        </div>,
        <div>
            <h2 style={{ color: 'white', fontSize: '35px' }}>New Model 3</h2>
            <p style={{ color: 'white', fontSize: '25px' }}>Reengineered from the ground up</p>
            <p style={{ color: 'white', fontSize: '25px' }}>Be the first to get behind the wheel. Demo Drive now</p>
            <button style={{ color: 'black', backgroundColor: 'white', border: 'none', fontSize: '22px' }}>Demo Drive</button>&nbsp;&nbsp;
            <button style={{ color: 'white', backgroundColor: 'black', border: 'none', fontSize: '22px' }}>Custom Order</button>
        </div>,
        <div>
            <h2 style={{ color: 'white', fontSize: '35px' }}>5000 Free Supercharging Miles</h2>
            <p style={{ color: 'white', fontSize: '25px' }}>Take delivery of a new Model X, Model S, or Model Y by March 31 and receive 5000 free supercharging miles for cash or finance purchase</p>
            <button style={{ color: 'white', backgroundColor: 'black', border: 'none', fontSize: '22px' }}>Shop Available</button>
        </div>
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setInfoIndex((prevIndex) => (prevIndex + 1) % infoContent.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main">
            <video autoPlay loop muted className="bg-video">
                <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="nav">
                <img className="logo" src={logo} alt="Tesla Logo" style={{ height: '60px', marginTop: '18px' }} />
                <div id="additionals">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '25px', fontWeight: 'border', marginTop: '18px' }}>Vehicles</Link>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '25px', fontWeight: 'border', marginTop: '18px' }}>Energy</Link>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '25px', fontWeight: 'border', marginTop: '18px' }}>Discover</Link>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '25px', fontWeight: 'border', marginTop: '18px' }}>Charging</Link>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '25px', fontWeight: 'border', marginTop: '18px' }}>Shop</Link>
                </div>
                <div className="icons">
                    <i className="fas fa-question" style={{ margin: '5px' }}></i>
                    <i className="fa-solid fa-globe" style={{ margin: '5px' }}></i>
                    <i className="fa-solid fa-user" style={{ margin: '5px' }}></i>
                </div>
            </div>
            <Link to="/models" className="Models_btn" style={{ textDecoration: 'none' }}>
                <button style={{ color: 'black', fontSize: '30px', fontWeight: 500, borderRadius: '10px', cursor: 'pointer' }}>
                    See All Models
                </button>
            </Link>
            <div className="info">
                {infoContent[infoIndex]}
            </div>
        </div>
    );
};

export default TeslaHome;

