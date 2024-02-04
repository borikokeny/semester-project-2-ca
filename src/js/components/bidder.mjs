// import { API_AUCTION_URL } from "../api/constants.mjs";
// import { authFetch } from "../authFetch.mjs";

// const action = "/listings";

// async function viewBids() {
 
//   const bidsOnAListingURL = `${API_AUCTION_URL}${action}/${id}/bids`;

//   const response = await authFetch(bidsOnAListingURL);
  
//   return await response.json(); 
// }

// async function bidderInfo() {
//   const bids = await viewBids();
//   const bidsContainer = document.querySelector("#bidsContainer");

//   renderBidderInfo(bids, bidsContainer);
// }

// bidderInfo();

// function bidsHistory(bids){
//   const bidderCard = document.createElement("div");

//   const bidderName = document.createElement("h4");
//   bidderName.innerHTML = bids.bidderName;
  
//   const amount = document.createElement("p");
//   amount.innerHTML = bids.amount;
  
//   const created = document.createElement("p");
//   created.innerHTML = bids.created;
  
//   bidderCard.appendChild(bidderName, amount, created);
  
//   return bidderCard
// }


// export function renderBidderInfo(bidsList, parent) {
//   // parent.innerHtml = "";
//   parent.append(...bidsList.map(bidsHistory));
// }

