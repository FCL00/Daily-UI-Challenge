import React from "react";
import "./Home.css";
import TopBox from "@/components/TopBox/TopBox";
import LineChart from "@/components/LineChart/LineChartBox";
const home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <LineChart />
      </div>
      <div className="box box3">
        <LineChart />
      </div>
      <div className="box box4">Box 4</div>
      <div className="box box5">
        <LineChart />
      </div>
      <div className="box box6">
        <LineChart />
      </div>
      <div className="box box7">Box 7</div>
      <div className="box box8">Box 8</div>
      <div className="box box9">Box 9</div>
    </div>
  );
};

export default home;
