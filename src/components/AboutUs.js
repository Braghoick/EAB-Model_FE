import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const AboutUs = () =>{
     return(

          <div>
               <Accordion defaultActiveKey="1">
                         <Accordion.Toggle className="d-flex m-auto" as={Button} variant="link" eventKey="0">
                              Conoce aun mas sobre nosotros
                         </Accordion.Toggle>
                    <Card>
                    <Accordion.Collapse className="about_us_body" eventKey="0">
                         <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                    </Card>
               </Accordion>
          </div>
     )
}

export default AboutUs;