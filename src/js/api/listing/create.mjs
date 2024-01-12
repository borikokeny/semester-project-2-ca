import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

export async function createListing(postData) {
  const createListingURL = API_AUCTION_URL + action;

  const response = await authFetch(createListingURL, {
    method,
    body: JSON.stringify(postData)
  })

  return await response.json()

  // const listing = await response.json();

  // console.log(listing)
}