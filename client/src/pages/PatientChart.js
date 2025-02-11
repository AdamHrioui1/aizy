import React, { useState } from "react";
import Chart from "react-apexcharts";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed, so add 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const PatientChart = (props) => {
    let { Patient } = props
    const [options] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: Patient?.poids?.map(p => formatDate(p?.date))
        }
    });

    const [series] = useState([
        {
            name: "poid",
            data: Patient?.poids?.map(p => p?.poid)
        },
        {
            name: "taille",
            data: Patient?.tailles?.map(p => p?.taille)
        },
        {
            name: "imc",
            data: Patient?.tailles?.map((p, i) => (((Patient?.poids[i]?.poid * 10000) / (p?.taille * p?.taille)).toFixed(2)))
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
                    />
                </div>
            </div>
        </div>
    );
};

export default PatientChart;