import { createListing } from "../api/listing/index.mjs";

export function setCreateListingFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async(e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries())
      
      try {
        await createListing(listing);
      } catch (error) {

      }
      
    });
  }
}