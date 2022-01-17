import React from 'react';
import './App.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

  const formattedData = [
    { sector: 'Basic Materials', perChange: -0.52, noOfStocks: 0 },
    { sector: 'Communications', perChange: 6, noOfStocks: 0 },
    { sector: 'Communication Services', perChange: -3.29, noOfStocks: 0 },
    { sector: 'Conglomerates', perChange: -4, noOfStocks: 0 },
    { sector: 'Consumer Cyclical', perChange: -4.39, noOfStocks: 0 },
    { sector: 'Consumer Defensive', perChange: -2.84, noOfStocks: 0 },
    { sector: 'Energy', perChange: 3.74, noOfStocks: 0 },
    { sector: 'Financial Services', perChange: 4.14, noOfStocks: 0 },
    { sector: 'Healthcare', perChange: -6.44, noOfStocks: 0 },
    { sector: 'Industrials', perChange: -2.63, noOfStocks: 0 },
    { sector: 'Miscellaneous', perChange: -14.29, noOfStocks: 0 },
    { sector: 'Others', perChange: -1.19, noOfStocks: 0 },
    { sector: 'Real Estate', perChange: -3.78, noOfStocks: 0 },
    { sector: 'Services', perChange: -19.12, noOfStocks: 0 },
    { sector: 'Technology', perChange: -5.04, noOfStocks: 0 },
    { sector: 'Utilities', perChange: -2.52, noOfStocks: 0 }
  ]

  function App(){

  return (
    <div className="App">
     <h1>Formatted Data</h1>
     <BarChart
        width={1200}
        height={300}
        data={formattedData}
        margin={{
          top: 25, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sector" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="perChange" fill="skyblue" />
        <Bar dataKey="noOfStocks" fill="gray" />
      </BarChart>
    </div>
  );
}

export default App;
