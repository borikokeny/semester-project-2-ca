import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

export async function  createListing(listing) {
  try {
    const createListingURL = API_AUCTION_URL + action;

    const response = await authFetch(createListingURL, {
      method,
      header: authFetch,
      body: JSON.stringify({
        title: listing.title,
        description: listing.description,
        endsAt: listing.endsAt,
        media: listing.media.split(","),
        tags: listing.tags.split(",")
      })
    })
    
    if (response.ok) {
      return await response.json();
    } else {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.errors[0].message;
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw error
  }

  // const listing = await response.json();

  // console.log(listing)
}