
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    var pricePoint = "";
    function printPrice(priceRating){
      for (var i=1; i <= priceRating; i++) { 
          pricePoint += "$";
      }
          var finalPrice = pricePoint;
          pricePoint = "";
           return finalPrice;
        }
    
    function drawBlock(restaurant) {
        return `
        <div style="width: 200px; margin: 5px; padding: 5px; border-radius: 5%; background-color: lightgray; font-weight: bold;">
            <h2 style="font-weight: bold; margin-bottom: 0px;">${restaurant.name}</h2>
            <p style="color: gray; margin-bottom: 0px;">${restaurant.type}</p>
            <span style="font-size: 30px; color: #55cf34;">${printPrice(restaurant.priceRating)}</span>
        </div>
        `
    }
    
    return `
    <div style="display: flex; flex-direction: row;">
        ${restaurants.map(drawBlock).join("")}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}

// <div class="text-center mt-5">
// <code>${JSON.stringify(restaurants)}</code>
// </div>