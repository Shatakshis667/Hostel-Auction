import React from 'react';
import SectionTitle from '../SectionTitle';
import './gotInterested.scss'

export default function GotInterested({ history }) {
  const openPlaceALot = () => {
    history.push('/lot/new');
  };
  const openSearchLots = () => {
    history.push('/lots');
  };
  return (
    <section className="content-section fourth">
      <div>
        <SectionTitle className="white right" text="Got interested?" />
        <div className="text-container">
          <h3>Let's try!</h3>
          <p>Want to sell something? Place your first item on our platform</p>
          <button type="button" className="button-common" onClick={openPlaceALot}>Place an Item</button>
          <p>Looking for something?</p>
          <button type="button" className="button-common" onClick={openSearchLots}>Search an Item</button>
          <p>Or look at the recent placed items</p>
          <i className="fas fa-angle-double-down arrow-down-last-section" />
        </div>

      </div>
    </section>
  );
}
