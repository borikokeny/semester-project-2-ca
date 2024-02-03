import { viewListing } from "../api/listing/view.mjs";
import { renderSellerInfo } from "../components/seller.mjs";

export async function renderSingleListingPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const listing = await viewListing(id);

  const img = document.querySelector("#listingImg");
  const title = document.querySelector("#listingTitle");
  const description = document.querySelector("#listingDescription");
  const endsAt = document.querySelector("#listingEndsAt");
  const bids = document.querySelector("#listingBids");
  const biddingHistoryContainer = document.querySelector("#biddingHistoryContainer");
  const sellerInfo = document.querySelector("#sellerInfo");


  document.title = listing.title;
  img.src = listing.media[0];
  title.innerHTML = listing.title;
  description.innerHTML = listing.description;
  endsAt.innerHTML = listing.endsAt;
  endsAt.textContent = `Listing ends at: ${endsAt.innerText}`;
  bids.innerHTML = listing._count.bids;
  bids.textContent = `Current BID: ${bids.innerText}`;
  
  renderSellerInfo(listing.seller, sellerInfo);
}
