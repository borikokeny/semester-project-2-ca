import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listingMethods from "./api/listing/index.mjs";
import * as pages from "./pages/index.mjs";


const path = location.pathname;

if (path === '/profile/login/') {
  listeners.setLoginFormListener()
} else if (path === '/profile/register/') {
  listeners.setRegisterFormListener()
} else if (path === '/profile/') {
  listeners.setCreateListingFormListener()
} else if (path === '/listing/') {
  pages.renderListingPage()
}
// else if (path === '/listing/create/') {
//   listeners.setCreateListingFormListener()
// } 

// else if (path === '/listing/edit/') {
//   listeners.setUpdateListingFormListener()
// } 

async function testTemplate() {
  const listings = await listingMethods.viewListings();
  const listing = listings.pop()
  const container = document.querySelector("#listing");
  templates.renderListingTemplate(listing, container);
}

testTemplate()









// listing.createListing()
// listing.updateListing()
// listing.removeListing()
// listing.viewListing()
// listing.viewListings().then(console.log)

listingMethods.viewListing("55ce30fd-5c9b-47d9-bfea-90c72031cdfc").then(console.log)




// removeListing("4a9f3045-2941-4299-97a4-aa0207d912f5")


