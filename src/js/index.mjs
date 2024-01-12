import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as listing from "./api/listing/index.mjs";

const path = location.pathname;

if (path === '/profile/login/') {
  setLoginFormListener()
} else if (path === '/profile/register/') {
  setRegisterFormListener()
}

// listing.createListing()
// listing.updateListing()
// listing.removeListing()
// listing.viewListing()
// listing.viewListings().then(console.log)

// listing.viewListing("49a1cc57-89d2-41bf-a6b6-e3c220755cce").then(console.log)




// removeListing("4a9f3045-2941-4299-97a4-aa0207d912f5")


// {id: "4a9f3045-2941-4299-97a4-aa0207d912f5", title: "Example Post 2", description: "Blala", media: [],…}
// created
// : 
// "2024-01-11T14:00:50.317Z"
// description
// : 
// "Blala"
// endsAt
// : 
// "2024-01-18T12:40:55.637Z"
// id
// : 
// "4a9f3045-2941-4299-97a4-aa0207d912f5"
// media
// : 
// []
// tags
// : 
// []
// title
// : 
// "Example Post 2"
// updated
// : 
// "2024-01-11T14:00:50.317Z"
// _count
// : 
// {bids: 0}
