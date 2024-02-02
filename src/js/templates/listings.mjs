import { viewListings } from "../api/listing/view.mjs";

export function listingTemplateA(postData) {
  return `<div class="listing card" id=${postData.id}>${postData.title}</div>`
}

export function listingTemplateB(postData) {
  const listing = document.createElement("div");
  listing.classList.add("listing", "col", "card", "shadow-sm", "mb-5");
  listing.style.width = '50%';


  // listing.innerText = postData.title;

  // const listing = document.createElement("div");
  // listing.classList.add("listing");
  // listing.innerText = postData.title;


  if(postData.media) {
    const img = document.createElement('img');
    // const listingImage = document.querySelector('card-img-container');
    img.classList.add('img', 'bd-placeholder-img', 'card-img-top', 'mb-4');
    img.style.width = '100%';
    img.style.objectFit = 'cover';
    // listingImage.append(img);
    img.src = postData.media;
    img.alt = postData.title;

    listing.append(img)
  }

  if(postData.title) {
    const title = document.createElement('h5');
    title.classList.add('card-text');
    title.innerText = postData.title;
    listing.append(title);
  }
  
  
  if(postData.description) {
    const description = document.createElement('p');
    description.innerText = postData.description;
    listing.append(description)
  }

    const endsAt = document.createElement('p');
    endsAt.innerText = postData.endsAt;
    endsAt.textContent = `Listing ends at: ${endsAt.innerText}`;
    listing.append(endsAt)
  
    const bid = document.createElement('p');
    bid.innerText = postData._count.bids;
    bid.textContent = `Current BID: ${bid.innerText}`;
    listing.append(bid)
 

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary', 'mb-3');
  button.innerText = "BID";
  listing.append(button)

  return listing;
}

// export function renderListingTemplate(postData, parent) {
//   // parent.innerHTML = listingTemplate(postData)

//   parent.append(listingTemplateB(postData))
//   //ez a kod teszi ki az egy listinget egy html oldalra
// }

export function renderListingTemplates(postDataList, parent) {
  parent.append(...postDataList.map(listingTemplateB))
  //ez a kod rakja ki a listings/index.html oldalra a listingeket
}










// export function listingTemplateA(postData) {
//   return `<div class="listings" id=${postData.id}>${postData.title}</div>`
// }

// export function listingTemplateB(postData) {

//   // const listing = document.createElement('div');
//   const cardText = document.createElement('h5');
//   const listingTitle = document.querySelector('.card-text');
//   cardText.classList.add('listings');
//   cardText.innerText = postData.title;
//   listingTitle.appendChild(cardText);

  
//   if(postData.description) {
//     const description = document.createElement('p');
//     // description.innerText = postData.description;
//     // listing.append(description)
//     const listingDescription = document.querySelector('.card-text');
//     description.classList.add('description')
//     description.innerText = postData.description;
//     listingDescription.append(description)
//   }

//   if(postData.endsAt) {
//     // const endsAt = document.createElement('p');
//     // endsAt.innerText = postData.endsAt;
//     // listing.append(endsAt)
//     const endsAt = document.createElement('p');
//     const listingEndsAt = document.querySelector('.card-text');
//     endsAt.classList.add('endsAt')
//     endsAt.innerText = postData.endsAt;
//     listingEndsAt.append(endsAt)
//   }

//   if(postData.media) {
//     // const img = document.createElement('img');
//     // img.src = postData.media;
//     // img.alt = postData.title;
//     // listing.append(img)

//     const img = document.createElement('img');
//     const listingImage = document.querySelector('.card-img-container');
//     img.classList.add('img');
//     img.style.width = '100%'
//     img.style.objectFit = "cover";
//     listingImage.append(img)
//     img.src = postData.media;
//     img.alt = postData.title;
//   }
//   return listing;
// }

// // export function renderListingTemplate(postData, parent) {
// //   // parent.innerHTML = listingTemplate(postData)

// //   parent.append(listingTemplateB(postData))
// //   //ez a kod teszi ki az egy listinget egy html oldalra
// // }

// export function renderListingTemplates(postDataList, parent) {
//   parent.append(...postDataList.map(listingTemplateB))
//   //ez a kod rakja ki a listings/index.html oldalra a listingeket
// }