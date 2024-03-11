// Dashboard.js

import React, { useState, useEffect } from 'react';
import DistributorCard from './DistributorCard';
import LineChart from './LineChart';
import './Dashboard.css'; // Import CSS for styling

const Dashboard = () => {
    const [distributors, setDistributors] = useState([]);
    const [selectedMetrics, setSelectedMetrics] = useState([]);
    const [filterCriteria, setFilterCriteria] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');

    useEffect(() => {
        // Mock data for demonstration
        const mockData = [
            {
                id: 1,
                name: 'Distributor A',
                data: [
                    { month: 'Jan', value: 1000 },
                    { month: 'Feb', value: 800 },
                    { month: 'Mar', value: 1200 },
                    // Add more data points as needed
                ],
                region: 'North',
                productCategory: 'Beverages'
            },
            {
                id: 2,
                name: 'Distributor B',
                data: [
                    { month: 'Jan', value: 1200 },
                    { month: 'Feb', value: 1000 },
                    { month: 'Mar', value: 1300 },
                    // Add more data points as needed
                ],
                region: 'South',
                productCategory: 'Snacks'
            },
            // Add more distributors as needed
        ];
        setDistributors(mockData);
    }, []);

    // Handle change in selected metrics
    const handleMetricsChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedMetrics([...selectedMetrics, value]);
        } else {
            setSelectedMetrics(selectedMetrics.filter(metric => metric !== value));
        }
    };

    // Handle change in filter criteria
    const handleFilterChange = (event) => {
        setFilterCriteria(event.target.value);
    };

    // Handle change in sort criteria
    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };

    // Apply filters and sorting to distributors
    let filteredDistributors = [...distributors];
    if (filterCriteria) {
        filteredDistributors = filteredDistributors.filter(distributor =>
            distributor.region === filterCriteria || distributor.productCategory === filterCriteria
        );
    }
    if (sortCriteria) {
        filteredDistributors.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
    }

    return (
        <div className="dashboard-container">
            <h1>Augur Dashboard</h1>
            <div className="controls">
                <div className="metrics">
                    {/* Checkboxes for selecting metrics */}
                </div>
                <div className="filters">
                    <label>Filter by:</label>
                    <select value={filterCriteria} onChange={handleFilterChange}>
                        <option value="">--Select--</option>
                        <option value="North">North Region</option>
                        <option value="South">South Region</option>
                        {/* Add options for other filter criteria */}
                    </select>
                </div>
                <div className="sorting">
                    <label>Sort by:</label>
                    <select value={sortCriteria} onChange={handleSortChange}>
                        <option value="">--Select--</option>
                        <option value="ytdAverage">Year-to-Date Average Quantity</option>
                        <option value="lastMonth">Quantity Shipped Last Month</option>
                        {/* Add options for other sorting criteria */}
                    </select>
                </div>
            </div>
            <div className="line-chart">
                {/* Include LineChart component with data */}
                <LineChart data={distributors} />
            </div>
            <div className="distributor-list">
                {/* Distributor list */}
                {filteredDistributors.map((distributor) => (
                    <DistributorCard key={distributor.id} distributor={distributor} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
