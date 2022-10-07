import React from "react";
import  Chart  from "react-apexcharts";
import './Graphic.css'

export default function Graphic() {
  return (
    <React.Fragment>
        <div className="container-graphic">
            <h2>Skin Color</h2>
            <Chart className="graphic"
            type="donut"
            width={400}
            series={[2, 1, 1, 1, 4]}

            options={{
                labels:['Fair', 'Gold', 'White, Blue', 'White, red', 'Light']
            }}
            />


            <h2>Birth Year</h2>
            <Chart className="graphic"
            type="donut"
            width={400}
            series={[2, 1, 1, 1, 1, 1,1,1,1]}

            options={{
                labels:['19BBY', '112BBY', '33BBY', '41.9BBY', '52BBY', '47BBY', 'unknown', '24BBY', '57BBY']
            }}
            />
    </div>

    </React.Fragment>
  )
}
