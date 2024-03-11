// DistributorCard.js
import React from 'react';
import './DistributorCard.css'; // Import CSS file for styling

const DistributorCard = ({ distributor }) => {
    return (
        <div className="distributor-card">
            <h2>{distributor.name}</h2>
            <p>Year-to-Date Average: {distributor.ytdAverage}</p>
            <p>Last Month: {distributor.lastMonth}</p>
            <p>Forecasted This Month: {distributor.forecastedThisMonth}</p>
        </div>
    );
};

export default DistributorCard;
