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

  
  listing.classList.add("listing", "col"),

  
  listing.innerText = postData.title;
  // const listing = document.createElement("div");
  // listing.classList.add("listing");
  // listing.innerText = postData.title;


  if(postData.media) {
    const img = document.createElement('img');
    img.src = postData.media;
    img.alt = postData.title;
    listing.append(img)
  }

  if(postData.description) {
    const description = document.createElement('p');
    description.innerText = postData.description;
    listing.append(description)
  }

  if(postData.endsAt) {
    const endsAt = document.createElement('p');
    endsAt.innerText = postData.endsAt;
    listing.append(endsAt)
  }

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