import React from 'react'

const lotWasSold = (price) => (
  <div className="lot-result-container sold">
    <span className="auction-result-status">Sold</span>
    <div className="lot-result-container-text">This item was sold for: {price}$</div>
  </div>
)

const lotWasSoldToYou = (price) => (
  <div className="lot-result-container sold-to-you">
    <span className="auction-result-status">Sold</span>
    <div className="lot-result-container-text">You have bought this item for: {price}$</div>
  </div>
)

const lotWasNotSold = () => (
  <div className="lot-result-container finished">
    <span className="auction-result-status">Finished</span>
    <div className="lot-result-container-text">Item is bought</div>
  </div>
)

export default function AuctionResults({ closed, actualUserBid, currUserId, currPrice }) {
  if (closed && !actualUserBid) return lotWasNotSold();
  if (closed && actualUserBid && currUserId && actualUserBid === currUserId) return lotWasSoldToYou(currPrice);
  if (closed && actualUserBid) return lotWasSold(currPrice);
  return null;
}
