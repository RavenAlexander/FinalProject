import React, { Component } from 'react';
import image from '../../images/redlippencil.jpg';
import image2 from '../../images/woman.jpg';
import image3 from '../../images/nails.jpg';
import image4 from '../../images/lipstick.jpg';
import image5 from '../../images/somuchswag.png';

//import Recipes from './Recipes.js';
import {Table, Panel, Button, Carousel, Jumbotron} from 'react-bootstrap';




class Inventory extends Component {
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
              <img className='bewd' width={600} height={400} alt='icon' src={image5}/>
              <h4>
                Your Inventory
              </h4>
              
      <p>Keep track of your items here! View notes, images, and more. Never buy a duplicate color by mistake again! </p>
     <hr></hr>
     

      <Table responsive>
  <thead>
    <tr>
      <th>Inventory</th>
      <th>Name</th>
      <th>Image</th>
      <th>Description</th>
      <th>Notes</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Button className="btn-margin" bsStyle="success">+</Button>
      <Button className="btn-margin" bsStyle="danger">-</Button></td>
      <td>Lip Pencil</td>
      <td><img className='bewd' width={200} height={200} alt='icon' src={image}/>
      <br></br>
      <Button className="btn-margin" bsStyle="primary">Upload Image</Button> | 
      <Button className="btn-margin" bsStyle="primary">Delete Image</Button>
      </td>
      <td>Kiss Cosmetics</td>
      <td>Rose Red</td>
     
    </tr>
    <tr>
    <td><Button className="btn-margin" bsStyle="success">+</Button>
      <Button className="btn-margin" bsStyle="danger">-</Button></td>
      <td>table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
     
    </tr>
    <tr>
    <td><Button className="btn-margin" bsStyle="success">+</Button>
      <Button className="btn-margin" bsStyle="danger">-</Button></td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      
    </tr>
  </tbody>

  
</Table>

<div id="carousel">
                <Carousel>
  <Carousel.Item>
    <img width={500} height={500} alt="woman" src={image2} />
    
  </Carousel.Item>
  <Carousel.Item>
    <img width={500} height={500} alt="nails" src={image3} />
    
  </Carousel.Item>
  <Carousel.Item>
    <img width={500} height={500} alt="lipstick" src={image4} />
   
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


export default Inventory;