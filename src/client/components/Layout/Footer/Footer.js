import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Header/logo.png';
import './footer.scss'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-data">
          <div className="footer-data-column">
            <div className="logo-container">
              <img src={logo} alt="logo" />
              Online auction platform
            </div>
            <p>
            A one-stop solution for NIT Kurukshetra students that provides trustworthy solutions and bridges the gap between the auctioneers and bidders.
            </p>
            <div className="social-container">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square" />
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram" />
              </a>
            </div>
          </div>
          <div className="footer-data-column">
            <div className="footer-data-column-title">Feedback</div>
            <ul>
              <li onClick={this.props.openContactUs}>Contact us</li>
              <li onClick={this.props.openBecomePartner}>Become a partner</li>
              <li onClick={this.props.openBugReport}>Report a bug</li>
            </ul>
          </div>
          <div className="footer-data-column">
            <div className="footer-data-column-title">Contacts</div>
            <ul>
              <li>
                <i className="fas fa-phone" />
+91 8130556876
              </li>
              <li>
                <i className="fas fa-envelope" />
customer.service@hostelauction.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt" />
NIT Kurukshetra, Thanesar, Kurukshetra, Haryana- 136119
              </li>
            </ul>
          </div>
          <div className="footer-data-column">
            <div className="footer-data-column-title">Navigation</div>
            <ul>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/lot/new">Create Lot</NavLink></li>
              <li><NavLink to="/lots">Lots</NavLink></li>
              <li><NavLink to="/contacts">Contacts</NavLink></li>
              <li><NavLink to="/terms">Terms of use</NavLink></li>
              <li><NavLink to="/rules">Rules</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="copyrights">
          <span>&copy; 2020 Hostel Auction</span>
        </div>
      </footer>
    );
  }
}
