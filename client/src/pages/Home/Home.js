import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Panel, Carousel } from 'react-bootstrap';
import image from '../../images/brushes.jpg';
import image2 from '../../images/getsorted3.png';
import image3 from '../../images/woman.jpg';
import image4 from '../../images/palette.jpg';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              
            <div>
                 <Jumbotron />
                <Panel>
              
            

<img width={600} height={400} alt="900x500" src={image2} />
<hr></hr>
      <p>Tired of buying duplicate makeup and beauty products? SortMySwag is here to organize your beauty items all in one place! Simply create a QR code for your item of choice, and add that to your Personal Inventory! You can also look up products easily by scanning a QR code to retrieve notes and information about the product. </p>
      <hr></hr>

      <div id="carousel">
                <Carousel>
  <Carousel.Item>
    <img width={500} height={500} alt="brushes" src={image} />
    
  </Carousel.Item>
  <Carousel.Item>
    <img width={500} height={500} alt="woman" src={image3} />
    
  </Carousel.Item>
  <Carousel.Item>
    <img width={500} height={500} alt="palette" src={image4} />
    
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
  };
};

export default Home;
