import { viewListing } from "../api/listing/view.mjs";

export function listingTemplateA(postData) {
  return `<div class="listing" id=${postData.id}>${postData.title}</div>`
}

export function listingTemplateB(postData) {
  const listing = document.createElement("div");
  listing.classList.add("listing");
  listing.innerText = postData.title;

  // if(postData.media) {
  //   const img = document.createElement('img');
  //   img.src = listing.media;
  //   img.alt = postData.title;
  //   listing.append(img)
  // }
  return listing;
}

export function renderListingTemplate(postData, parent) {
  // parent.innerHTML = listingTemplate(postData)

  parent.append(listingTemplateB(postData))
}

// export function renderListingTemplates(postDataList, parent) {
//   parent.append(...listingList.map(listingTemplateB))
// }