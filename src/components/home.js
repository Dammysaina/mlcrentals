import React from "react";
import Map from "./map";
import "../assests/css/home.css"



const Home = () => {
    return (
        <div className="home_container">
            <div>
                <p>The most affortable place to stay in the san franciso bay area</p>
            </div>
            <div>
                <div >
                    <Map />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home