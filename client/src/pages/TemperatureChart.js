import React, { useState } from "react";
import Chart from "react-apexcharts";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed, so add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const TemperatureChart = (props) => {
    let { Temperatures } = props
    Temperatures = Temperatures.reverse()
    
    const [options] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: Temperatures?.map(p => formatDate(p?.createdAt))
        }
    });

    const [series] = useState([
        {
            name: "entrée",
            data: Temperatures?.map(p => p?.entre)
        },
        {
            name: "sortie",
            data: Temperatures?.map(p => p?.sortie)
        },
    ]);

    return (
        <div
            style={{
                padding: 20,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div className="row">
                <div className="mixed-chart"
                    style={{
                        padding: 10,
                        border: '1px solid #dce8ff',
                        borderRadius: '8px',
                    }}
                >
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="800"
                        style={{ zIndex: -1 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TemperatureChart;