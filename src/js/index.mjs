import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listingMethods from "./api/listing/index.mjs";

const path = location.pathname;

if (path === '/profile/login/') {
  listeners.setLoginFormListener()
} else if (path === '/profile/register/') {
  listeners.setRegisterFormListener()
} else if (path === '/listing/create/') {
  listeners.setCreateListingFormListener()
} else if (path === '/listing/edit/') {
  listeners.setUpdateListingFormListener()
}

async function testTemplateA() {
  const listings = await listingMethods.viewListings();
  const container = document.querySelector("#listings");
  templates.renderListingTemplates(listings, container);

  //ez a kod jeleniti meg a listing/index.html-en a listingeket
}

// async function testTemplate() {
//   const listings = await listingMethods.viewListings();
//   const listing = listings.pop()
//   const container = document.querySelector("#listing");
//   templates.renderListingTemplate(listing, container);

//    //ez a kod rakja fel az utolso listinget az oldalra
// }

async function testTemplateB() {
  const listings = await listingMethods.viewListings();
  const listing = listings[25];
  const container = document.querySelector("#listing");
  templates.renderListingTemplate(listing, container);

   //ez a kod rakja fel a kiszemelt sorszamu listinget az oldalra
}

testTemplateA()
testTemplateB()








// listing.createListing()
// listing.updateListing()
// listing.removeListing()
// listing.viewListing()
// listing.viewListings().then(console.log)

// listing.viewListing("49a1cc57-89d2-41bf-a6b6-e3c220755cce").then(console.log)




// removeListing("4a9f3045-2941-4299-97a4-aa0207d912f5")


