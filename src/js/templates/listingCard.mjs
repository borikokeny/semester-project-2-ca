function listingCardTemplate(postData) {
  const cardToClickOn = document.createElement('a');
  cardToClickOn.classList.add('col', 'card-to-click-on');
  cardToClickOn.href = `/listing/?id=${postData.id}`;
  cardToClickOn.style.width = '33%';

  const listingCard = document.createElement('div');
  listingCard.classList.add('card', )

  const cardImage = document.createElement('img');
  cardImage.src = postData.media[0];
  cardImage.classList.add('listingImage', 'card-img-top');
  cardImage.style.width = '100%';
  cardImage.style.height = '225';
  cardImage.style.objectFit = 'cover';
  cardImage.alt = postData.title;
  listingCard.append(cardImage);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = postData.title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-text');
  cardDescription.textContent = postData.description;

  const listingEndsAt = document.createElement('p');
  listingEndsAt.classList.add('card-text');
  listingEndsAt.innerText = postData.endsAt;
  //   listing.append(endsAt)

  return cardToClickOn;
}

export function renderListingCardTemplate(postData, parent) {
  parent.innerHTML = "";
  parent.append(listingCardTemplate(postData));
}

export function renderListingCardTemplates(postDataList, parent) {
  parent.innerHTML = "";
  parent.append(...postDataList.map(listingCardTemplate));
}