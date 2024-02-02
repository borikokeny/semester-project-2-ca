import { viewListing } from "../api/listing/view.mjs";

export async function renderSingleListingPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const listing = await viewListing(id);

  const img = document.querySelector("#listingImg");
  const title = document.querySelector("#listingTitle");
  const description = document.querySelector("#listingDescription");
  const endsAt = document.querySelector("#listingEndsAt");
  const listingBids = document.querySelector("#listingBids");
  const biddingHistoryContainer = document.querySelector("#biddingHistoryContainer");
  const sellerContainer = document.querySelector("#sellerContainer");

  document.title = listing.title;
  img.src = listing.media[0];
  title.innerHTML = listing.title;
  description.innerHTML = listing.description;
  endsAt.innerHTML = listing.endsAt;
  endsAt.textContent = `Listing ends at: ${endsAt.innerText}`;
}