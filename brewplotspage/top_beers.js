function init() {
    d3.json("/json/top_beers.json").then(data=>{

    // beer ID array
    let beerId = data.beer_id;
    let firstBeer = beerId[0];

    updatePlotly(firstBeer);
    });
}

//  top ten in each category

function updateTable(beerId) {
    d3.json("/json/top_beers.json").then(data=>{
    
    let beerId = data.beer_id;
    let beerName = data.beer_name;
    let beerType = data.beer_type;
    let beerBrewery = data.beer_brewery;
    let beerAvgibu = data.avg_ibu;
    let beerAbv = data.abv;
    let beerAstringency = data.astringency;
    let beerBody = data.body;
    let beerAlcohol = data.alcohol;
    let beerBitter = data.bitter;
    let beerSweet = data.sweet;
    let beerSour = data.sour;
    let beerSalty = data.salty;
    let beerFrutis = data.frutis;
    let beerHoppy = data.hoppy;
    let beerSpices = data.spices;
    let beerMalty = data.malty;

    })};