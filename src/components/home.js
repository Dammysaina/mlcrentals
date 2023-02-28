import React from "react";
import Map from "./map";
import "../assests/css/home.css";

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
            <select name="languages" id="lang" placeholder="All types">
              <option value="javascript">All Type</option>
              <option value="php">PHP</option>
              <option value="java">Java</option>
              <option value="golang">Golang</option>
              <option value="python">Python</option>
              <option value="c#">C#</option>
              <option value="C++">C++</option>
              <option value="erlang">Erlang</option>
            </select>
          </div>
          <div>
            <select name="languages" id="lang" placeholder="All types">
              <option value="javascript">Neighborhood</option>
              <option value="php">PHP</option>
              <option value="java">Java</option>
              <option value="golang">Golang</option>
              <option value="python">Python</option>
              <option value="c#">C#</option>
              <option value="C++">C++</option>
              <option value="erlang">Erlang</option>
            </select>
          </div>
          <div className="select_image">
            <img src="" alt="searchbutton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
