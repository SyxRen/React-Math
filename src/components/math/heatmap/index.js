import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap'
import {HeatMapData} from './data'

const HeatMap = () => (
    <ResponsiveHeatMap
        colors={'nivo'}
        data={HeatMapData}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut',
            'junk',
            'sushi',
            'ramen',
            'curry',
            'udon'
        ]}
        indexBy="country"
        margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
        forceSquare={true}
        axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(0, 0, 0, 0.1)',
                rotation: -45,
                lineWidth: 4,
                spacing: 7
            }
        ]}
        fill={[ { id: 'lines' } ]}
        padding={5}
        animate={true}
        motionStiffness={80}
        motionDamping={9}
        cellHoverOthersOpacity={0.25}
        theme={{
            axis: {ticks: {text: { fill: "#999999"}}},
            tooltip: {container: {background: '#333', borderRadius: 5}}         
        }}
        tooltip={({ xKey, yKey, value, color }) => (
            <div style={{padding: '6px 8px'}}>
                <span style={{ color }}>{value} {xKey} in {yKey}</span>
            </div>
        )}
    />
)

export default HeatMap;