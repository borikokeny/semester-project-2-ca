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

testTemplateA()
// testTemplateB()  kiutottem mert ez berendeli a 80-as sorszamu versenyzot



