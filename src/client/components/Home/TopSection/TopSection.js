import React from 'react';
import videoMP4 from '../../../assets/video/top-section-video.mp4';
import videWEBM from '../../../assets/video/top-section-video.webm';
import './topSection.scss'

export default function TopSection() {
  return (
    <section className="top-section">
      <div className="background-video">
        <video autoPlay muted loop>
          <source src={videoMP4} type="video/mp4" />
          <source src={videWEBM} type="video/webm" />
        </video>
      </div>
      <div className="top-section-content">
        <h1>Hostel Auction</h1>
        <p>A one-stop solution for NIT Kurukshetra students that provides trustworthy solutions and bridges the gap between the buyers and sellers. </p>
      </div>
    </section>
  );
}
