import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
// const method = "get";

export async function viewListings() {
  try {
    const updateListingURL = `${API_AUCTION_URL}${action}`;

    const response = await authFetch(updateListingURL)

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch {
    throw new Error("Network error");
  }
}

export async function viewListing(id) {
  try {
    if (!id) {
      throw new Error("Get needs a post ID")
    }

    const viewListingURL = `${API_AUCTION_URL}${action}/${id}`;

    const response = await authFetch(viewListingURL);

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
    throw new Error(error);
    }
  }