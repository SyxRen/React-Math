import React from 'react';
import { ResponsiveBump } from '@nivo/bump'
import {BumpChartData} from './data'

const BumpChart = () => (
    <ResponsiveBump
        data={BumpChartData}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        colors={{ scheme: 'nivo' }}
        lineWidth={3}
        activeLineWidth={3}
        inactiveLineWidth={10}
        inactiveOpacity={0.15}
        pointSize={5}
        activePointSize={10}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        enableGridX={false}
        enableGridY={false}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        tooltip={({ serie }) => (
            <div
              style={{
                color: serie.color,
                background: '#333',
                padding: '12px 16px',
                borderRadius: 5
              }}
            >
              <strong>
                {serie.id}
              </strong>
            </div>
        )}
        sliceTooltip={({ slice }) => {
            return (
              <div
                style={{
                  background: 'white',
                  padding: '9px 12px',
                  border: '1px solid #ccc',
                }}
              >
                <div>x: {slice.id}</div>
                {slice.points.map(point => (
                  <div
                    key={point.id}
                    style={{
                      color: point.serieColor,
                      padding: '3px 0',
                    }}
                  >
                    <strong>{point.serieId}</strong> [{point.data.yFormatted}]
                  </div>
                ))}
              </div>
            );
          }}
       
        theme={{axis: {ticks: {text: { fill: "#999999"}}}}}
    />
)

export default BumpChart;