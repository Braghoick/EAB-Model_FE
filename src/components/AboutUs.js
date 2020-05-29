import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Footer from './Footer'

const AboutUs = () =>{
     return(
          <div>
               <Accordion>
                         <Accordion.Toggle className="d-flex m-auto" as={Button} variant="link" eventKey="0">
                              Conoce aún más sobre nosotros
                         </Accordion.Toggle>
 
                    <Accordion.Collapse className="about_us_body" eventKey="0">
                         <Card.Body>
                              <Footer />
                         </Card.Body>
                    </Accordion.Collapse>
               </Accordion>
          </div>
     )
}

export default AboutUs;