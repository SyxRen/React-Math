import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default class Content extends React.Component{
  render(){
    return(
      <Container>
        <Row style={{ paddingTop: 20}}>
          {this.props.children}
        </Row>
      </Container>
    )
  }
}