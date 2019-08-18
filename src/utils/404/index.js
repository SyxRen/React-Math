import React from 'react'
import StarfieldAnimation from 'react-starfield-animation'
import background from './../../assets/stars.jpg'

class ErrorPage extends React.Component {
  render () {
    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'stretch',
            minHeight: 'calc(100vh - 56px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>
                
            <h1 style={{
                color: '#fff',
                fontSize: '3em',
                // fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
            }}>You Lost?</h1>

            <StarfieldAnimation numParticles={400} style={{
                position: 'absolute',
                zIndex: 1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}/>

        </div>
    )
  }
}

export default ErrorPage
