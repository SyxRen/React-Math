import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

import Chord from './chord/'
import HeatMap from './heatmap/'
import BarChart from './barchart/'
import BumpChart from './bumpchart/'

export default class Maths extends React.Component{
    render(){
        return(
            <Col xs="6" style={{marginBottom: 20}}>
                <Card bg='dark' text='white'>
                    <Card.Header variant="top">
                        {this.props.type}
                    </Card.Header>
                    <Card.Body style={{height: 450}}>
                        {this.props.type === 'Heat Map' &&
                            <HeatMap/>
                        }
                        {this.props.type === 'Bar Chart' &&
                            <BarChart/>
                        }
                        {this.props.type === 'Bump Chart' &&
                            <BumpChart/>
                        }
                        {this.props.type === 'Chord' &&
                            <Chord/>
                        }
                    </Card.Body>
                    {this.props.type &&
                        <Card.Footer>
                            This is a {this.props.type} built using the Nivo library.
                        </Card.Footer>
                    }
                </Card>
            </Col>
        )
    }
}