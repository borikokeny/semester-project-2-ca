import { viewListings } from "../api/listing/view.mjs";

export function listingTemplateB(postData) {
  const listing = document.createElement("a");
  listing.href = `/listing/?id=${listing.id}`;
  listing.classList.add("listings", "col", "card", "shadow-sm", "mb-5");
  listing.style.textDecoration = "none";
  listing.style.width = '50%';


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


export function renderListingTemplates(postDataList, parent) {
  parent.append(...postDataList.map(listingTemplateB))
  //ez a kod rakja ki a listings/index.html oldalra a listingeket
}
