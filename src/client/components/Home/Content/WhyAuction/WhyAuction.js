import React from 'react';
import SectionTitle from '../SectionTitle'
import './whyAuction.scss'

export default function WhyAuction() {
  return(
    <section className="content-section why-auction">
      <div>
        <SectionTitle className="left" text="Why hostel auction?"/>
        <div className="cards-container">
          <figure className="card">
            <img src="https://www.pngrepo.com/png/58847/170/auction.png"/>
            <figcaption>
              <h3>Custom Lots</h3>
              <p>Buy and sell goods of your choice with ease. Choose from a wide variety of options at reasonable prices from your preferred seller and put your items on display for a broad audience. </p>
            </figcaption>
          </figure>
          <figure className="card">
            <img src="https://www.pngrepo.com/png/284854/170/secure-shield-shield.png"/>
            <figcaption>
              <h3>Secure transfers</h3>
              <p>Secure transfer of money and goods between the buyer and the seller. Choose from the wide varieties of payment and delivery options available.    </p>
            </figcaption>
          </figure>
          <figure className="card">
            <img src="https://www.pngrepo.com/png/9721/170/coin-stack.png"/>
            <figcaption>
              <h3>Mutual benefit</h3>
              <p>Bridges the gap between the buyers and sellers by providing an excellent solution in one place that makes the auction process very smooth and easy. </p>
            </figcaption>
          </figure>
          <figure className="card">
            <img src="https://www.pngrepo.com/png/17334/170/comments.png"/>
            <figcaption>
              <h3>Community</h3>
              <p>
An excellent platform for the student community looking for a suitable place to sell their goods and those looking for a place to buy new or pre-used goods at reasonable prices.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
