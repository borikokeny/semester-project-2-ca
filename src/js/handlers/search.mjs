// import { viewListings } from "../api/listing/view.mjs";

// export async function search() {
//   const listings = await viewListings();
//   const searchForm = document.querySelector("#searchForm");
//   const searchInput = document.querySelector("input[type=search]");

//   if (searchForm) {
//     searchForm.addEventListener("submit", (e) => {
     
//       e.preventDefault();
//       const searchValue = searchInput.value.trim();

//       if (searchValue === "") {
//         searchResults([]);
//         return;
//       }

//       const filteredListings = listings.filter((listing) => {
//         const title = listing.title.toLowerCase();
//         const description = listing.description.toLowerCase();

//         return title.includes(searchValue) || description.includes(searchValue);
//       });

//       searchResults(filteredListings);
//     });
//   }
// }

// function searchResults(filteredListings) {
//   const filterContainer = document.querySelector('#search-result'); 
//   filterContainer.innerHTML = "";
// }






import { listingTemplateA } from "../templates/listings.mjs";
import { viewListings } from "../api/listing/view.mjs";

export async function searchListings() {
  const listings = await viewListings();

  // const searchForm = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#search");

 
    search.onkeyup = function (event) {
    
      console.log(event);

      const searchValue = event.target.value.trim().toLowerCase();

      const filterListings = listings.filter(function (postData) {
        if (postData.title.toLowerCase().startsWith(searchValue)) {
          return true;
        }
      });

      listingTemplateA(filterListings);
  };  
}







// import { viewListings as renderListings } from "../api/listing/view.mjs";

// export function renderBySearch(listings) {
//   const searchForm = document.querySelector("#searchForm");
//   const search = document.querySelector("#search");

//   searchForm.onclick = function(event) {
//     event.preventDefault();

//     const searchValue = search.value.trim().toLowerCase();
   
//     const filteredListings = listings.filter(function (listingToRender) {
//      if (listingToRender.title.toLowerCase().includes(searchValue)) {
//        return true;       
//      }
 
//      for (let i = 0; i < listingToRender.diets.length; i++) {
//        if (listingToRender.description.toLowerCase().includes(searchValue)) {
//          return true;
//        }
//      }
 
//     //  for (let i = 0; i < listingToRender.extendedIngredients.length; i++) {
//     //    if (listingToRender.extendedIngredients[i].name.toLowerCase().includes(searchValue)) {
//     //      return true;
//     //    }
//     //  }
 
//     })   
 
//     renderListings(filteredListings);


//   }

//   renderBySearch(listings);
// }





// import { viewListings } from "../api/listing/view.mjs";


// // const arrListing = Array.from(postData); 
// // console.log(postData)

// // const listingsToRender = listings;

// export async function renderBySearch() {
//   const filterContainer = document.querySelector('.filter-container');
//   const searchForm = document.querySelector('.searchForm');
//   const search = document.querySelector('#search');
//   const listings = await viewListings();

//   if(searchForm) {
//     searchForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const filteredValue = search.value.trim();

//       if (filteredValue === "") {

//       }
//     })
//   }

//   filterContainer.innerHTML = "";

//   listings.forEach(function (listing) {
//        filterContainer.innerHTML += `<div class="filter">${listing.title}</div>`; 
//       });
//   };

//   renderBySearch();

//   search.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const filteredValue = e.target.value.trim().toLowerCase();

//     const filteredListings = listings.filter(function (listing) {
//       if (listing.title.toLowerCase().startsWith(filteredValue)) {
//         return true;
//     }
//   });


//   // listingsToRender = filteredListings;


//   // search.onkeyup = function() {
  
//   //   const filteredValue = e.target.value.trim().toLowerCase();

//   //   const filteredListings = listings.filter(function (listing) {
//   //     if (listing.title.toLowerCase().startsWith(filteredValue)) {
//   //       return true;
//   //     }
//     });



