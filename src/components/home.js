import React from "react";
import Map from "./map";
import "../assests/css/home.css"



const Home = () => {
    return (
        <div className="home_container">
            <div className="affordable_place">
                <p>The Most Affortable Place To Stay In The San Franciso Bay Area</p>
            </div>
            <div className="map_select">
                <div className="map_container">
                    <Map alt="map" />
                </div>
                <div className="select_container">
                   <div>

                    </div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home