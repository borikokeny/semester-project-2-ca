export function listingTemplateA(postData) {
  return `<div class="listing" id=${postData.id}>${postData.title}</div>`
}

export function listingTemplateB(postData) {
  const listing = document.createElement("div");
  listing.classList.add("listing"),
  listing.innerText = postData.title;

  return listing;

  
  // const cardText = document.createElement('p');
  // const listingTitle = document.querySelector('.card-text');
  // cardText.classList.add('listing');
  // cardText.innerText = postData.title;
  // listingTitle.appendChild(cardText)
  
  // if(postData.description) {
  //   const description = document.createElement('p');
  //   const listingDescription = document.querySelector('.card-text');
  //   description.classList.add('description')
  //   description.innerText = postData.description;
  //   listingDescription.append(description)
  //   // listing.append(description)
  // }

  // if(postData.endsAt) {
  //   const endsAt = document.createElement('p');
  //   const listingEndsAt = document.querySelector('.card-text');
  //   endsAt.classList.add('endsAt')
  //   endsAt.innerText = postData.endsAt;
  //   listingEndsAt.append(endsAt)
  // }

  // if(postData.media) {
  //   const img = document.createElement('img');
  //   const listingImage = document.querySelector('.card-img-top');
  //   img.classList.add('img');
  //   listingImage.append(img)
  //   img.src = postData.media;
  //   img.alt = postData.title;
  //   // listing.append(img)
  // }
  // return listing;
}

export function renderListingTemplate(postData, parent) {
  // parent.innerHTML = listingTemplate(postData)

  parent.append(listingTemplateB(postData))
  //ez a kod teszi ki az egy listinget egy html oldalra
}

// export function renderListingTemplates(postDataList, parent) {
//   parent.append(...postDataList.map(listingTemplateB))
//   //ez a kod rakja ki a listings/index.html oldalra a listingeket
// }