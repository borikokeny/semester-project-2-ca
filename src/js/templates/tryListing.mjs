import { viewListing } from "../api/listing/view.mjs";

export async function renderSingleListingPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const listing = await viewListing(id);

  const listingImage = document.querySelector("#listingImageContainer");
  const listingTitle = document.querySelector("#listingTitle");
  const listingDescription = document.querySelector("#listingDescription");
  const listingEndsAt = document.querySelector("#listingEndsAt");
  const listingBids = document.querySelector("#listingBids");
  const biddingHistoryContainer = document.querySelector("#biddingHistoryContainer");
  const sellerContainer = document.querySelector("#sellerContainer");

  document.title = listing.title;
  listingImage.src = listing.media[0];
  listingTitle.innerHTML = listing.title;
  listingDescription.innerHTML = listing.description;
}