import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

import { ResponsiveHeatMap } from '@nivo/heatmap'

const chartData = [
    {
      "country": "AD",
      "hot dog": 79,
      "hot dogColor": "hsl(277, 70%, 50%)",
      "burger": 99,
      "burgerColor": "hsl(165, 70%, 50%)",
      "sandwich": 56,
      "sandwichColor": "hsl(204, 70%, 50%)",
      "kebab": 14,
      "kebabColor": "hsl(179, 70%, 50%)",
      "fries": 7,
      "friesColor": "hsl(302, 70%, 50%)",
      "donut": 19,
      "donutColor": "hsl(176, 70%, 50%)",
      "junk": 86,
      "junkColor": "hsl(334, 70%, 50%)",
      "sushi": 13,
      "sushiColor": "hsl(87, 70%, 50%)",
      "ramen": 80,
      "ramenColor": "hsl(238, 70%, 50%)",
      "curry": 31,
      "curryColor": "hsl(79, 70%, 50%)",
      "udon": 52,
      "udonColor": "hsl(95, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 64,
      "hot dogColor": "hsl(349, 70%, 50%)",
      "burger": 84,
      "burgerColor": "hsl(182, 70%, 50%)",
      "sandwich": 74,
      "sandwichColor": "hsl(137, 70%, 50%)",
      "kebab": 12,
      "kebabColor": "hsl(239, 70%, 50%)",
      "fries": 38,
      "friesColor": "hsl(123, 70%, 50%)",
      "donut": 62,
      "donutColor": "hsl(285, 70%, 50%)",
      "junk": 11,
      "junkColor": "hsl(241, 70%, 50%)",
      "sushi": 35,
      "sushiColor": "hsl(322, 70%, 50%)",
      "ramen": 49,
      "ramenColor": "hsl(318, 70%, 50%)",
      "curry": 21,
      "curryColor": "hsl(352, 70%, 50%)",
      "udon": 27,
      "udonColor": "hsl(169, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 20,
      "hot dogColor": "hsl(21, 70%, 50%)",
      "burger": 27,
      "burgerColor": "hsl(169, 70%, 50%)",
      "sandwich": 74,
      "sandwichColor": "hsl(32, 70%, 50%)",
      "kebab": 27,
      "kebabColor": "hsl(210, 70%, 50%)",
      "fries": 58,
      "friesColor": "hsl(43, 70%, 50%)",
      "donut": 83,
      "donutColor": "hsl(276, 70%, 50%)",
      "junk": 10,
      "junkColor": "hsl(6, 70%, 50%)",
      "sushi": 20,
      "sushiColor": "hsl(12, 70%, 50%)",
      "ramen": 77,
      "ramenColor": "hsl(159, 70%, 50%)",
      "curry": 11,
      "curryColor": "hsl(99, 70%, 50%)",
      "udon": 15,
      "udonColor": "hsl(159, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 23,
      "hot dogColor": "hsl(258, 70%, 50%)",
      "burger": 56,
      "burgerColor": "hsl(247, 70%, 50%)",
      "sandwich": 99,
      "sandwichColor": "hsl(71, 70%, 50%)",
      "kebab": 69,
      "kebabColor": "hsl(162, 70%, 50%)",
      "fries": 45,
      "friesColor": "hsl(326, 70%, 50%)",
      "donut": 10,
      "donutColor": "hsl(326, 70%, 50%)",
      "junk": 42,
      "junkColor": "hsl(61, 70%, 50%)",
      "sushi": 48,
      "sushiColor": "hsl(35, 70%, 50%)",
      "ramen": 5,
      "ramenColor": "hsl(353, 70%, 50%)",
      "curry": 75,
      "curryColor": "hsl(8, 70%, 50%)",
      "udon": 26,
      "udonColor": "hsl(53, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 53,
      "hot dogColor": "hsl(156, 70%, 50%)",
      "burger": 79,
      "burgerColor": "hsl(123, 70%, 50%)",
      "sandwich": 50,
      "sandwichColor": "hsl(334, 70%, 50%)",
      "kebab": 90,
      "kebabColor": "hsl(282, 70%, 50%)",
      "fries": 14,
      "friesColor": "hsl(83, 70%, 50%)",
      "donut": 71,
      "donutColor": "hsl(12, 70%, 50%)",
      "junk": 84,
      "junkColor": "hsl(33, 70%, 50%)",
      "sushi": 63,
      "sushiColor": "hsl(147, 70%, 50%)",
      "ramen": 26,
      "ramenColor": "hsl(33, 70%, 50%)",
      "curry": 99,
      "curryColor": "hsl(295, 70%, 50%)",
      "udon": 38,
      "udonColor": "hsl(211, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 64,
      "hot dogColor": "hsl(88, 70%, 50%)",
      "burger": 74,
      "burgerColor": "hsl(123, 70%, 50%)",
      "sandwich": 24,
      "sandwichColor": "hsl(249, 70%, 50%)",
      "kebab": 98,
      "kebabColor": "hsl(124, 70%, 50%)",
      "fries": 17,
      "friesColor": "hsl(302, 70%, 50%)",
      "donut": 30,
      "donutColor": "hsl(283, 70%, 50%)",
      "junk": 0,
      "junkColor": "hsl(99, 70%, 50%)",
      "sushi": 24,
      "sushiColor": "hsl(290, 70%, 50%)",
      "ramen": 67,
      "ramenColor": "hsl(116, 70%, 50%)",
      "curry": 48,
      "curryColor": "hsl(0, 70%, 50%)",
      "udon": 64,
      "udonColor": "hsl(72, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 53,
      "hot dogColor": "hsl(292, 70%, 50%)",
      "burger": 90,
      "burgerColor": "hsl(158, 70%, 50%)",
      "sandwich": 93,
      "sandwichColor": "hsl(42, 70%, 50%)",
      "kebab": 100,
      "kebabColor": "hsl(122, 70%, 50%)",
      "fries": 32,
      "friesColor": "hsl(202, 70%, 50%)",
      "donut": 61,
      "donutColor": "hsl(216, 70%, 50%)",
      "junk": 62,
      "junkColor": "hsl(199, 70%, 50%)",
      "sushi": 87,
      "sushiColor": "hsl(205, 70%, 50%)",
      "ramen": 43,
      "ramenColor": "hsl(61, 70%, 50%)",
      "curry": 94,
      "curryColor": "hsl(46, 70%, 50%)",
      "udon": 36,
      "udonColor": "hsl(190, 70%, 50%)"
    },
    {
      "country": "AO",
      "hot dog": 90,
      "hot dogColor": "hsl(39, 70%, 50%)",
      "burger": 52,
      "burgerColor": "hsl(67, 70%, 50%)",
      "sandwich": 29,
      "sandwichColor": "hsl(177, 70%, 50%)",
      "kebab": 17,
      "kebabColor": "hsl(152, 70%, 50%)",
      "fries": 42,
      "friesColor": "hsl(298, 70%, 50%)",
      "donut": 53,
      "donutColor": "hsl(161, 70%, 50%)",
      "junk": 90,
      "junkColor": "hsl(357, 70%, 50%)",
      "sushi": 53,
      "sushiColor": "hsl(76, 70%, 50%)",
      "ramen": 90,
      "ramenColor": "hsl(128, 70%, 50%)",
      "curry": 33,
      "curryColor": "hsl(229, 70%, 50%)",
      "udon": 100,
      "udonColor": "hsl(229, 70%, 50%)"
    },
    {
      "country": "AQ",
      "hot dog": 10,
      "hot dogColor": "hsl(86, 70%, 50%)",
      "burger": 33,
      "burgerColor": "hsl(171, 70%, 50%)",
      "sandwich": 75,
      "sandwichColor": "hsl(267, 70%, 50%)",
      "kebab": 58,
      "kebabColor": "hsl(169, 70%, 50%)",
      "fries": 98,
      "friesColor": "hsl(53, 70%, 50%)",
      "donut": 10,
      "donutColor": "hsl(315, 70%, 50%)",
      "junk": 18,
      "junkColor": "hsl(36, 70%, 50%)",
      "sushi": 57,
      "sushiColor": "hsl(358, 70%, 50%)",
      "ramen": 8,
      "ramenColor": "hsl(143, 70%, 50%)",
      "curry": 85,
      "curryColor": "hsl(168, 70%, 50%)",
      "udon": 27,
      "udonColor": "hsl(78, 70%, 50%)"
    }
]


const MyResponsiveHeatMap = ({ data /* see data tab */ }) => (
    <ResponsiveHeatMap
        data={data}
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
        animate={true}
        motionStiffness={80}
        motionDamping={9}
        // hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
        // height={150}
    />
)
  

export default class Maths extends React.Component{
    render(){
        return(
            <Card bg='dark' text='white'>
                <Card.Header variant="top">
                    Heatmap
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col style={{height: 450}}>
                            <MyResponsiveHeatMap data={chartData}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Text>
                                This heatmap was done right.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )
    }
}