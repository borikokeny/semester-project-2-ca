function bidderInfo(bids) {
  const bidderCard = document.createElement("div");

  const bidderName = document.createElement("h4");
  bidderName.innerHTML = bids.bidderName;

  const amount = document.createElement("p");
  amount.innerHTML = bids.amount;

  const created = document.createElement("p");
  created.innerHTML = bids.created;

  bidderCard.appendChild(bidderName, amount, created);
}

export function renderBidderInfo(bids, parent) {
  parent.innerHtml = "";
  parent.append(...bids.map(bidderInfo));
}