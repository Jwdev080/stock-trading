import React from 'react';
import './trade.css'; // Ensure you have the appropriate CSS styles

const data = [
  { id: 1, country: 'US', symbol: 'US100', value: '18601.0' },
  { id: 2, country: 'US', symbol: 'US30', value: '40027.6', change: '+0.080%' },
  { id: 3, country: 'HK', symbol: 'HK50', value: '19604.2' },
  { id: 4, country: 'DE', symbol: 'DE40', value: '18792.3' },
  { id: 5, country: 'US', symbol: 'US500', value: '5314.4' },
];

const MostTraded = () => {
  return (
    <div className="most-traded">
      <h2>Most traded</h2>
      <div className="trades-list">
        {data.map((item) => (
          <div key={item.id} className="trade-item">
            <div className="trade-info">
              <img 
                src={`https://www.countryflags.io/${item.country}/shiny/64.png`} 
                alt={`${item.country} flag`}
                className="flag-icon"
              />
              <div className="trade-details">
                <span className="trade-symbol">{item.symbol}</span>
                <span className="trade-value">{item.value}</span>
                {item.change && (
                  <div className="trade-change">
                    <span>{item.change}</span>
                  </div>
                )}
              </div>
            </div>
            <button className="trade-button">Trade</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostTraded;
