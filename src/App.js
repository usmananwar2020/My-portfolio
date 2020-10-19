import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import LineChart from './components/LineChart'
import BubbleChart from './components/BubbleChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';
import Home from './pages/Home';
import './pages/style.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"


function App() {
  return (
    <div className="App">
      <div>
        <Home />
      </div>
      {/* <div className='chart'>
        <LineChart />
        <BubbleChart />
        <BarChart/>
        <PieChart/>
        <DoughnutChart/>
      </div> */}
    </div>
  );
}
export default App;
