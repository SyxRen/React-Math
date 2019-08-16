import React from 'react';
import { CardColumns, Container, Row, Col } from 'react-bootstrap';

export default class Content extends React.Component{
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <CardColumns sm style={{ paddingTop: 20}}>
              {this.props.children}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    )
  }
}