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

// async function testTemplate() {
//   const listings = await listingMethods.viewListings();
//   const container = document.querySelector("#listings");
//   templates.renderListingTemplates(listings, container);
// }

// testTemplate()








// listing.createListing()
// listing.updateListing()
// listing.removeListing()
// listing.viewListing()
// listing.viewListings().then(console.log)

// listing.viewListing("49a1cc57-89d2-41bf-a6b6-e3c220755cce").then(console.log)




// removeListing("4a9f3045-2941-4299-97a4-aa0207d912f5")


