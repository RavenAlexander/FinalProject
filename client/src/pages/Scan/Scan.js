import React, { Component } from 'react';
import image from '../../images/scanpic.jpg';
import image2 from '../../images/lippieqr.png';
import image3 from '../../images/arrow.jpg';
import image4 from '../../images/lipstick.jpg';
import image5 from '../../images/palette.jpg';
import image6 from '../../images/3brushes.jpg';
import image7 from '../../images/snatched.png';
import Jumbotron from '../../components/Jumbotron';
import {Button, Panel, Carousel, Table, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';




class Scan extends Component {
  login() {
    this.props.auth.login()
  }
  render() {
    const { isAuthenticated } = this.props.auth
    
    
    
    
      return (
        

        <div className='container'>
          {
          isAuthenticated() && (
            <div>
              
              <Jumbotron />
              <Panel>
              <img className='camera' width={600} height={400} alt='icon' src={image7}/>
              
              <br></br>
              <Table responsive>
  
  <tbody>
  <tr>
    
      <td><img className='camera' width={200} height={200} alt='icon' src={image}/>
      <br></br>
      <Button className="btn-margin" bsStyle="primary">Scan QR Code</Button>
      <br></br>
      <Button className="btn-margin" bsStyle="primary">Upload QR Image</Button></td>
      <td><img className='arrow' width={200} height={200} alt='icon' src={image3}/></td>
      <td><img className='qrcode' width={200} height={200} alt='icon' src={image2}/>
      <br></br>
      <form>
        <FormGroup
          controlId="formBasicText"
        
        >
          <ControlLabel>Result:</ControlLabel>
          <FormControl
            type="input"
            placeholder="Lip Pencil Kiss Cosmetics Rose Red"
         
          />
          <FormControl.Feedback />
          <Button className="btn-margin" bsStyle="primary">Add to Inventory</Button>
        </FormGroup>
      </form></td>
    </tr>
    
   
  </tbody>

  
</Table>
     
            
            <div id="carousel">
                <Carousel>
  <Carousel.Item>
    <img width={500} height={500} alt="lipstick" src={image4} />
   
  </Carousel.Item>
  <Carousel.Item>
    <img width={500} height={500} alt="palette" src={image5} />
   
  </Carousel.Item>
  <Carousel.Item>
    <img width={500} height={500} alt="3brushes" src={image6} />
   
  </Carousel.Item>
</Carousel>
</div>
            <Panel.Footer>Copyright Raven Alexander</Panel.Footer>
        </Panel>
              </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                  href={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
          
        </div>
      )
    }
  }


export default Scan


