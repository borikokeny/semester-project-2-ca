import { viewListing } from "../api/listing/view.mjs";

export async function renderListingPage() {
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  const id = urlParam.get("id");

  const listing = await viewListing(id);

  const listingImage = document.querySelector("#listingImage");
  const listingTitle = document.querySelector("#listingTitle");
  const listingDescription = document.querySelector("#listingDescription");
  const listingEndsAt = document.querySelector("#listingEndsAt");

  document.title = listing.title;
  listingImage.src = listing.media[0] ?? `/images/placeholder.png`;
  listingTitle.innerHTML = listing.title;
  listingDescription.innerHTML = listing.description;
}

// import { viewListing } from "../api/listing/view.mjs";

// export async function renderListingPage() {
//   const queryString = window.location.search;
//   const urlParam = new URLSearchParams(queryString);
//   const id = urlParam.get("id");

//   const listing = await viewListing(id);

//   const listingImage = document.querySelector("#listingImage");
//   const listingTitle = document.querySelector("#listingTitle");
//   const listingDescription = document.querySelector("#listingDescription");
//   const listingEndsAt = document.querySelector("#listingEndsAt");

//   document.title = listing.title;
//   listingImage.src = listing.media[0] ?? `/images/placeholder.png`;
//   listingTitle.innerHTML = listing.title;
//   listingDescription.innerHTML = listing.description;
// }