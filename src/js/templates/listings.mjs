export function listingTemplateA(postData) {
  return `<div class="listings" id=${postData.id}>${postData.title}</div>`
}

export function listingTemplateB(postData) {

  // const listing = document.createElement('div');
  const cardText = document.createElement('h5');
  const listingTitle = document.querySelector('.card-text');
  cardText.classList.add('listings');
  cardText.innerText = postData.title;
  listingTitle.appendChild(cardText);

  
  if(postData.description) {
    const description = document.createElement('p');
    // description.innerText = postData.description;
    // listing.append(description)
    const listingDescription = document.querySelector('.card-text');
    description.classList.add('description')
    description.innerText = postData.description;
    listingDescription.append(description)
  }

  if(postData.endsAt) {
    // const endsAt = document.createElement('p');
    // endsAt.innerText = postData.endsAt;
    // listing.append(endsAt)
    const endsAt = document.createElement('p');
    const listingEndsAt = document.querySelector('.card-text');
    endsAt.classList.add('endsAt')
    endsAt.innerText = postData.endsAt;
    listingEndsAt.append(endsAt)
  }

  if(postData.media) {
    // const img = document.createElement('img');
    // img.src = postData.media;
    // img.alt = postData.title;
    // listing.append(img)

    const img = document.createElement('img');
    const listingImage = document.querySelector('.card-img-container');
    img.classList.add('img');
    img.style.width = '100%'
    img.style.objectFit = "cover";
    listingImage.append(img)
    img.src = postData.media;
    img.alt = postData.title;
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