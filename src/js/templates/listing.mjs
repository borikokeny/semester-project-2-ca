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







// export function listingTemplateB(postData) {
 
//   const cardText = document.createElement('h5');
//   const listingTitle = document.querySelector('.card-text');
//   cardText.classList.add('listing');
//   cardText.innerText = postData.title;
//   listingTitle.appendChild(cardText)
  
//   if(postData.description) {
//     const description = document.createElement('p');
//     const listingDescription = document.querySelector('.card-text');
//     description.classList.add('description')
//     description.innerText = postData.description;
//     listingDescription.append(description)
//     // listing.append(description)
//   }

//   if(postData.endsAt) {
//     const endsAt = document.createElement('p');
//     const listingEndsAt = document.querySelector('.card-text');
//     endsAt.classList.add('endsAt')
//     endsAt.innerText = postData.endsAt;
//     endsAt.textContent = `Listing ends at: ${endsAt.innerText}`;
//     listingEndsAt.append(endsAt)
//   }

//   if(postData.media) {
//     const img = document.createElement('img');
//     const listingImage = document.querySelector('.card-img-top');
//     img.classList.add('img');
//     img.style.width = '100%'
//     img.style.objectFit = "cover";
//     listingImage.append(img)
//     img.src = postData.media;
//     img.alt = postData.title;
//     listingImage.append(img);

//   }

//   const bid = document.createElement('p');
//   const bidCounter = document.querySelector('.bid-counter');
//   bid.classList.add = ('mb-3');
//   bidCounter.innerText = postData._count.bids;
//   bidCounter.textContent = `Current BID: ${bidCounter.innerText}`;
//   bidCounter.append(bid);

//   return listing;
// }

// export function renderListingTemplate(postData, parent) {
//   // parent.innerHTML = listingTemplate(postData)

//   parent.append(listingTemplateB(postData))
//   //ez a kod teszi ki az egy listinget egy html oldalra
// }

// export function renderListingTemplates(postDataList, parent) {
//   parent.append(...postDataList.map(listingTemplateB))
//   //ez a kod rakja ki a listings/index.html oldalra a listingeket
// }