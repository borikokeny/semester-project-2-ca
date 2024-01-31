// import { viewListings } from "../api/listing/view.mjs";
// import { renderListingCardTemplates } from "./listingCard.mjs";
 
// export async function renderListingTemplateNEW() {
//   const listingContainer = document.querySelector('#listing');

//   const renderListingsNEW = async (listings) => {
//     try {
//       renderListingCardTemplates(listings, listingContainer);
//     } catch (error) {
//       return(error, listingContainer)
//     }
//   }
// };

// try {
//   const listings = await viewListings();
//   renderListingsNEW(listings);
// } catch (error) {
//   return(error, listingContainer)
// }











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

  if(postData.endsAt) {
    const endsAt = document.createElement('p');
    endsAt.innerText = postData.endsAt;
    endsAt.textContent = `Listing ends at: ${endsAt.innerText}`;
    listing.append(endsAt)
  }

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary');
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