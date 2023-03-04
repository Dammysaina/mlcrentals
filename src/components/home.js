import React from "react";
import Map from "./map";
import "../assests/css/home.css";
import SEARCH from "../assests/images/search.svg";
import POOL from "../assests/images/poolside.svg";
import Card from "./card";

const Home = () => {
  return (
    <div>
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
              <select
                name="languages"
                id="lang"
                className="select_neighborhoodone"
              >
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
              <select
                name="languages"
                id="lang"
                className="select_neighborhoodtwo"
              >
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
              <img src={SEARCH} alt="searchbutton" />
            </div>
          </div>
        </div>
      </div>
      <div className="minimum_container">
        <div className="minimum_living">
          <p>Minimum Living Cost Takes Care Of Everything</p>
        </div>
        <div className="pool_container">
          <div className="pool_image">
            <img src={POOL} alt=" house" />
          </div>
          <div>
            {Selection.map((selectionItem) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Card
                  className="whatwedo_card"
                  image={selectionItem.image}
                  header={selectionItem.header}
                  body={selectionItem.body}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
