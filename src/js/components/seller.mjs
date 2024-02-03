function sellerInfo (seller) {
  const sellerCard = document.createElement("div");

  // const sellerAvatar = document.createElement("img");
  // sellerAvatar.src = seller.avatar;
  // sellerAvatar.classList.add("img");
  // sellerCard.appendChild(sellerAvatar);

  const sellerName = document.createElement("h3");
  sellerName.textContent = seller.name;
  sellerCard.appendChild(sellerName);

  const sellerEmail = document.createElement("p");
  sellerEmail.textContent = seller.email;
  sellerCard.appendChild(sellerEmail);

  return sellerCard;
}

export function renderSellerInfo(seller, parent) {
  parent.innerHTML = "";
  parent.append(sellerInfo(seller));
}