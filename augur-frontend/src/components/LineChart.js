// LineChart.js

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './LineChart.css'; // Import the LineChart.css file

const LineChart = ({ data }) => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        // Create or update chart instance when data changes
        if (chartContainer.current && data) {
            if (chartInstance.current) {
                // If chart instance already exists, update data
                chartInstance.current.data = data;
                chartInstance.current.update();
            } else {
                // Otherwise, create new chart instance
                const ctx = chartContainer.current.getContext('2d');
                chartInstance.current = new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        scales: {
                            x: {
                                grid: {
                                    color: '#e0e0e0', // Light gray grid color
                                },
                                ticks: {
                                    color: '#666', // Dark gray tick color
                                },
                            },
                            y: {
                                grid: {
                                    color: '#e0e0e0', // Light gray grid color
                                },
                                ticks: {
                                    color: '#666', // Dark gray tick color
                                },
                            },
                        },
                    },
                });
            }
        }
    }, [data]);

    return (
        <canvas ref={chartContainer} style={{ maxWidth: '600px', margin: '0 auto' }} />
    );
};

export default LineChart;
