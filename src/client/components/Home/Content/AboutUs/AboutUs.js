import React from 'react';
import SectionTitle from '../SectionTitle';
import './aboutUs.scss'

export default function AboutUs() {
  return (
    <section className="content-section second">
      <div>
        <SectionTitle className="white right" text="About us" />
        <div className="text-boxes-container">
          <p className="desktop-text">Hostel Auction is an online platform formed by a group of NIT Kurukshetra students, which provides a one-stop solution for the hostel auction process. This website benefits the students who are looking for a suitable platform to sell their goods while making a profit by selling them at their convenient rates. It helps them choose the right bidder and allows them to monitor their lots, their status, the transaction, and the delivery. It particularly aims to provide the final students the right platform to sell their items as they leave the hostel premises. </p>
          <p className="desktop-text">It also provides an excellent platform for students who are looking to buy new/pre-used goods at reasonable prices. It provides students with a wide variety of options to choose from. They can make biddings and manage their purchase and get the status of their order. This facility is especially beneficial for freshers who are new to the hostel and are looking for places to buy necessary stuff.</p>
          <p className="desktop-text">With the help of this website, we want to make the buying and selling of new/previously-used items a more manageable and hassle-free process. Instead of depending on other sources, students can directly interact with the other residents of the hostel in order to buy/sell items. This makes the process easier and smoother. </p>
        </div>
      </div>
    </section>
  );
}
