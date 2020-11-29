import React from 'react';
import './contacts.scss'

export default class Contacts extends React.Component{
  constructor(props) {
    super(props);
    this.map = null
    this.mapContainer = React.createRef();
  }

 

  render() {
    return(
      <section className="contacts-section">
        <div className="contacts-container">
          <div className="contact-info">
            <div className="contacts-data-column">
              <div className="contacts-data-column-title">Departments</div>
              <div className="contacts-data-column-list">
                <div  className="contacts-data-column-item">
                  <div className="contacts-data-column-item-name">
                    Department of customer service
                  </div>
                  <div>
                    +91 8130556876
                  </div>
                  <div>
                    customer.service@hostelauction.com
                  </div>
                </div>
                <div  className="contacts-data-column-item">
                  <div className="contacts-data-column-item-name">
                    Technical support
                  </div>
                  <div>
                    +91 8129786534
                  </div>
                  <div>
                    technical.support@hostelauction.com
                  </div>
                </div>
                <div  className="contacts-data-column-item">
                  <div className="contacts-data-column-item-name">
                    Legal Department
                  </div>
                  <div>
                    +91 9876543210
                  </div>
                  <div>
                    legal.department@hostelauction.com
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts-data-column">
              <div className="contacts-data-column-title">Social networks</div>
              <div className="contacts-data-column-list">
                <div  className="contacts-data-column-item social">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square" />
                    Hostel Auction
                  </a>
                </div>
                <div  className="contacts-data-column-item social">
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter-square" />
                    @hostel_auction
                  </a>
                </div>
                <div  className="contacts-data-column-item social">
                  <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram" />
                    @hostel_auction
                  </a>
                </div>
              </div>
            </div>
            <div className="contacts-data-column">
              <div className="contacts-data-column-title">Address</div>
              <div className="contacts-data-column-list">
                <div  className="contacts-data-column-item social">
                  <i className="fas fa-map-marker-alt" />
                  NIT Kurukshetra, Thanesar, Kurukshetra, Haryana - 136119
                </div>
              </div>
            </div>
          </div>
          <div className="map" ref={this.mapContainer} />
        </div>
      </section>
    )
  }

}
