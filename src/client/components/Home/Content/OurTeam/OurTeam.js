import React from 'react';
import SectionTitle from '../SectionTitle';
import './ourTeam.scss';
import amit from './photos/amit.jpg';
import shatakshi from './photos/shatakshi.jpg';
import rashi from './photos/rashi.jpg';
import vanshika from './photos/vanshika.jpg';

export default function OurTeam() {
  return (
    <section className="content-section third">
      <div>
        <SectionTitle className="left" text="Our team" />
        <div className="content-container">
          <div className="our-team-card">
            <div className="image-container">
              <img src={rashi} alt="CEO photo" />
            </div>
            <div className="name-container">
              Rashi
            </div>
            <div className="position-container">
              Developer
            </div>
            <p className="text-container-team">
              "We at Hostel Auction aim to benefit the entire student community of our college with our services."
            </p>
          </div>
          <div className="our-team-card">
            <div className="image-container">
              <img src={shatakshi} alt="CEO photo" />
            </div>
            <div className="name-container">
              Shatakshi
            </div>
            <div className="position-container">
              Developer
            </div>
            <p className="text-container-team">
              "The goal of Hostel Auction is to meet the needs of both buyers and sellers by providing them with our easy-to-use and effective services."
            </p>
          </div>
          <div className="our-team-card">
            <div className="image-container">
              <img src={vanshika} alt="CEO photo" />
            </div>
            <div className="name-container">
              Vanshika
            </div>
            <div className="position-container">
              Developer
            </div>
            <p className="text-container-team">
              "Hostel Auction is a one-place solution for both the auctioneers and bidders."
            </p>
          </div>
          <div className="our-team-card">
            <div className="image-container">
              <img src={amit} alt="CEO photo" />
            </div>
            <div className="name-container">
              Amit
            </div>
            <div className="position-container">
              Developer
            </div>
            <p className="text-container-team">
              "Hostel Auction has helped numerous students in buying and selling stuff with ease with secure transactions and monitoring. "
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
