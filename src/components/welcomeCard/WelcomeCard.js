import React from 'react'
import welcomeCard from './welcomeCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const WelcomeCard = () => {
  return ( 
      <div className='col d-flex justify-content-center'>
          <Card id='main-container' className='h-100 text-center shadow p-3 mb-5 bg-white rounded border-0 rounded'>
              <Card.Header as="h5" className='card-header text-center w-100 fs-12 text-white-400 shadow-sm border-0 bg-secondary'>Take A Personality Test</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text className='text-white-100'>
                        Only honest answers guarantee honest results
                    </Card.Text>
                  <Button variant="secondary border-0" className='btn btn-outline-dark btn-sm'>Let's Go</Button>
                </Card.Body>
            </Card>
      </div>
  )
}

export default WelcomeCard