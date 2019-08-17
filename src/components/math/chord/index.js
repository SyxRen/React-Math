import React from 'react';
import { ResponsiveChord } from '@nivo/chord';
import { TableTooltip, Chip } from '@nivo/tooltip';

import {ChordData} from './data'

const ArcTooltip = ({ arc }) => (
    <TableTooltip
      rows={[
        [
          <Chip key="chip" color={arc.color} />,
          <span style={{ color: arc.color }} key="id">{arc.label}</span>,
          arc.formattedValue
        ]
      ]}/>
  );
  
const RibbonTooltip = ({ ribbon }) => (
    <TableTooltip
      rows={[
        [
          <Chip key="chip" color={ribbon.source.color} />,
          <span style={{ color: ribbon.source.color }} key="id">{ribbon.source.id}</span>,
          ribbon.source.value,
        ],
        [
          <Chip key="chip" color={ribbon.target.color} />,
          <span style={{ color: ribbon.target.color }} key="id">{ribbon.target.id}</span>,
          ribbon.target.value,
        ],
      ]}
    />
  );
  
  

const Chord = ({ matrix /* see matrix tab */ }) => (
    <ResponsiveChord
        matrix={ChordData}
        keys={[ 'John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim' ]}
        margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
        valueFormat=".2f"
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        arcOpacity={1}
        arcBorderWidth={1}
        arcBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        ribbonOpacity={0.5}
        ribbonBorderWidth={1}
        ribbonBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        enableLabel={true}
        label="id"
        labelOffset={12}
        labelRotation={-90}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
        colors={{ scheme: 'nivo' }}
        isInteractive={true}
        arcHoverOpacity={1}
        arcHoverOthersOpacity={0.25}
        ribbonHoverOpacity={0.75}
        ribbonHoverOthersOpacity={0.25}
        animate={true}
        motionStiffness={90}
        motionDamping={7}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 70,
                itemWidth: 80,
                itemHeight: 14,
                itemsSpacing: 0,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#777'
                        }
                    }
                ]
            }
        ]}
        theme={{
            axis: {ticks: {text: { fill: "#999999"}}},
            tooltip: {container: {background: '#333', borderRadius: 5}}         
        }}
        arcTooltip={ArcTooltip}
        ribbonTooltip={RibbonTooltip}
    />
)

export default Chord;