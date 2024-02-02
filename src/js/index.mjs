import "./router.mjs";
import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listingMethods from "./api/listing/index.mjs";


async function testTemplateA() {
  const listings = await listingMethods.viewListings();
  const container = document.querySelector("#listings");
  container.classList.add('album', 'py-5', 'bg-body-tertiary', 'container')
  templates.renderListingTemplates(listings, container);


  //ez a kod jeleniti meg a listings/index.html-en a listingeket
}

async function testTemplateB() {
  const listings = await listingMethods.viewListings();
  const listing = listings[80];
  const container = document.querySelector("#listing");
  templates.renderListingTemplate(listing, container);

   //ez a kod rakja fel a kiszemelt sorszamu listinget az oldalra
}

testTemplateA()
testTemplateB()



