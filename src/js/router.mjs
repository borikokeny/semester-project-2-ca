import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listingMethods from "./api/listing/index.mjs";

const path = location.pathname;

switch (path) {
  case '/profile/login/':
    listeners.setLoginFormListener()
    break;
  case '/profile/register/':
    listeners.setRegisterFormListener()
    break;  
  case '/':
    listeners.setLogoutFormListener()
    break;  
  case '/profile/':
    templates.renderProfile()
    listeners.setUpdateProfileListener()
    listeners.setCreateListingFormListener()
    break;
  case '/listing/edit/':
    listeners.setUpdateListingFormListener()
    break;
  case '/listing/tryListing/':
    templates.renderSingleListingPage()
    break;
}

// if (path === '/profile/login/') {
//   listeners.setLoginFormListener()
// } else if (path === '/profile/register/') {
//   listeners.setRegisterFormListener()
// } else if (path === '/') {
//   listeners.setLogoutFormListener()
// } else if (path === '/listing/create/') {
//   listeners.setCreateListingFormListener()
// } else if (path === '/listing/edit/') {
//   listeners.setUpdateListingFormListener()
// } else if (path === '/listing/tryListing/') {
//   templates.renderSingleListingPage()
// }