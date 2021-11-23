var topBeersObjects = [
    {label: "abv",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:[' Schorschbock 57%',' Schorschbock 31%',
        'Samuel Adams UtopiasBoston Beer Company (Samuel Adams)',
        'My Name Is Legion', 'Colossus', 'Chocolate Rain', 'Black Tuesday',
        "Barrel Roll No. 3 Pugachev's Cobra", 'Double Ice Bock', 'World Wide Stout'],
        beer_type: ['Bock - Eisbock', 'Bock - Eisbock', 'Strong Ale - American',
        'Bock - Eisbock', 'Strong Ale - American', 'Stout - American Imperial',
        'Stout - American Imperial', 'Stout - Russian Imperial', 'Bock - Eisbock',
        'Stout - American Imperial'],
        attribute_score: [57,31,28,22,20,19.6,19.5,18.9,18,18],
        brewery: ['Schorschbock','Schorschbock','Boston Beer Company (Samuel Adams)',
        'Lehe Pruulikoda', 'DuClaw Brewing Company', 'The Bruery', 'The Bruery',
        'Hangar 24 Brewing', 'Southampton Publick House',
        'Dogfish Head Craft Brewery']
    },
    {label: "astringency",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Montmorency Vs Balaton','Sour Reserve','Hometown Blonde',
        'Experimental Raspberry','Sour In The Rye - Kumquats','Iris','Brut IPA',
        'The Wright Pils','Red Poppy','Fresh Cut'],
        beer_type: ['Wild Ale','Lambic - Gueuze','Pilsner - German','Lambic - Fruit',
        'Wild Ale','Lambic - Traditional','IPA - Brut',
        'Pilsner - Bohemian / Czech','Sour - Flanders Red Ale',
        'Pilsner - Bohemian / Czech'],
        attribute_score: [83, 81, 77, 76, 70, 69, 68, 66, 66, 65],
        brewery: ['Jester King Brewery','Upland Brewing Company',
        'New Glarus Brewing Company','Hanssens Artisanaal bvba','Bruery Terreux',
        'Brasserie Cantillon','Anderson Valley Brewing Company',
        'Great Lakes Brewing Co.','The Lost Abbey','Peak Organic Brewing Company']
    },
    {label: "alcohol",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Pumking - Rum Barrel Aged',
        "Brewer's Reserve Bourbon Barrel Quadruple Ale",
        'Sustenance Black Beer - Bourbon Barrel-Aged','Wee Heavy - Barrel-Aged',
        'Bourbon Barrel Ale','Golden Delicious','Bourbon DIPA',
        "Barrel Aged Brrrbon (Brothers' Reserve Series)", 'Santo Ron Diego',
        'Wulver'],
        beer_type: ['Pumpkin Beer','Quadrupel (Quad)','Lager - Schwarzbier',
        'Scotch Ale / Wee Heavy','Strong Ale - English','Tripel','IPA - Belgian',
        'Winter Warmer','Strong Ale - American','Scotch Ale / Wee Heavy'],
        attribute_score: [139, 130, 126, 123, 122, 120, 120, 118, 114, 112],
        brewery: ['Southern Tier Brewing Company','Central Waters Brewing Co.',
        "Short's Brewing Company", 'AleSmith Brewing Company',
        'The Schlafly Tap Room','Captain Lawrence Brewing Co.',
        'Hardywood Park Craft Brewery','Widmer Brothers Brewing Company',
        'The Lost Abbey','Thirsty Dog Brewing Company']
    },
    {label: "body",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Victory At Sea - Peanut Butter','Chocolate Milk Stout','Moo-HooChiato',
        'The Chocolate Manifesto','White Chocolate Moo-Hoo Milk Stout',
        'Sweet Baby Jesus!', "Down 'N Dirty Chocolate Oatmeal Stout",
        'Box Of Chocolate','Hold On To Sunshine',
        'All That Is And All That Ever Will Be'],
        beer_type: ['Porter - Imperial','Stout - Sweet / Milk','Stout - Sweet / Milk',
        'Stout - Sweet / Milk','Stout - Sweet / Milk','Porter - American',
        'Stout - Oatmeal','Quadrupel (Quad)','Stout - Sweet / Milk',
        'Stout - Sweet / Milk'],
        attribute_score: [197, 196, 186, 183, 179, 178, 175, 166, 163, 160],
        brewery: ['Ballast Point Brewing Company','4 Hands Brewing Co.',
        'Terrapin Beer Company','Flying Monkeys Craft Brewery',
        'Terrapin Beer Company','DuClaw Brewing Company',
        'Tyranena Brewing Company','Charleville Vineyard Microbrewery',
        'Tree House Brewing Company','Tree House Brewing Company']
    },
    {label: "bitterness",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Earl Coffee Oatmeal Stout','Black Racer','Java Stout',
        'Heavy Seas Black Cannon','Regular Coffee',
        'Hop In The Dark Cascadian Dark Ale','BREWtality - Espresso Black Bier',
        'Cherry Bean Coffee Stout','The Devil Made Me Do It!','Coffee Bender'],
        beer_type: ['Stout - Oatmeal','IPA - Black / Cascadian Dark Ale','Stout - American',
        'IPA - Black / Cascadian Dark Ale','Cream Ale',
        'IPA - Black / Cascadian Dark Ale','Lager - Schwarzbier',
        'Stout - Foreign / Export','Porter - Imperial','Brown Ale - American'],
        attribute_score: [150, 148, 146, 145, 144, 144, 143, 140, 139, 139],
        brewery: ['Hill Farmstead Brewery','Bear Republic Brewing Co.',
        "Bell's Brewery - Eccentric Café & General Store", 'Heavy Seas Beer',
        'Carton Brewing Company','Deschutes Brewery','Midnight Sun Brewing Co.',
        'Brau Brothers Brewing Co. LLC','Tyranena Brewing Company',
        'Surly Brewing Company']
    },
    {label: "fruitiness",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Sour In The Rye - Kumquats','King Julius','Juice Machine','Very Green',
        'JJJuliusss','Femme Fatale Yuzu Pale','Montmorency Vs Balaton',
        'Serendipity','Doubleganger','Society & Solitude #4'],
        beer_type: ['Wild Ale','IPA - New England','IPA - New England','IPA - New England',
        'IPA - New England','Brett Beer','Wild Ale','Fruit and Field Beer',
        'IPA - New England','IPA - New England'],
        attribute_score: [222, 217, 211, 209, 207, 207, 204, 202, 201, 200],
        brewery: ['Bruery Terreux','Tree House Brewing Company',
        'Tree House Brewing Company','Tree House Brewing Company',
        'Tree House Brewing Company','Evil Twin Brewing','Jester King Brewery',
        'New Glarus Brewing Company','Tree House Brewing Company',
        'Hill Farmstead Brewery']
    },
    {label: "hoppiness",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['MMMKAY','Trinity IPA','Pursuit Of Hoppiness','The Oracle',
        'St-Ambroise India Pale Ale','Moondog Ale', "Triple Hop'd Lager", 'IPL',
        'Heller Bock Saphir','Uncle Rusty'],
        beer_type: ['Lager - India Pale Lager (IPL)','IPA - English','Red Ale - Imperial',
        'IPA - Imperial','IPA - English',
        'Bitter - English Extra Special / Strong Bitter (ESB)',
        'Lager - India Pale Lager (IPL)','Lager - India Pale Lager (IPL)',
        'Bock - Maibock','Red Ale - Imperial'],
        attribute_score: [193, 172, 172, 171, 171, 171, 158, 154, 152, 151],
        brewery: ["Short's Brewing Company", 'Trinity Brewhouse','Grand Teton Brewing Co.',
        "Bell's Brewery - Eccentric Café & General Store" ,'McAuslan Brewing',
        'Great Lakes Brewing Co.','Bitburger Brauerei','Straub Brewery',
        'Brauerei Hofstetten Krammer GmbH & Co. KG','Columbus Brewing Company']
    },
    {label: "ibu",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name: ['Hoptimum', 'Lake Erie Monster', 'Pliny The Younger',
        'Unearthly (Imperial India Pale Ale)', 'Permanent Funeral',
        "A Little Sumpin' Extra! Ale", 'Myrcenary Double IPA', 'Gubna', 'G-Bot',
        'Dorado'],
        beer_type: ['IPA - Imperial','IPA - Imperial','IPA - Imperial','IPA - Imperial',
        'IPA - Imperial','IPA - Imperial','IPA - Imperial','IPA - Imperial',
        'IPA - Imperial','IPA - Imperial'],
        attribute_score: [82.5, 82.5, 82.5, 82.5, 82.5, 82.5, 82.5, 82.5, 82.5, 82.5],
        brewery: ['Sierra Nevada Brewing Co.','Great Lakes Brewing Co.',
        'Russian River Brewing Company','Southern Tier Brewing Company',
        '3 Floyds Brewing Co.','Lagunitas Brewing Company',
        'Odell Brewing Company','Oskar Blues Grill & Brew',
        'New England Brewing Co.','Ballast Point Brewing Company']
    },
    {label: "maltiness",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Victory At Sea - Peanut Butter','Sweet Baby Jesus!',
        'Raincloud - Peanut Butter', "Down 'N Dirty Chocolate Oatmeal Stout",
        'Bourbon Barrel Aged Dark Star: Coffee Edition',
        'Bourbon Barrel Black Maple','Moment Of Clarity','Day & Night',
        'Sumatra Mountain Brown','Scurry'],
        beer_type: ['Porter - Imperial','Porter - American','Porter - Robust',
        'Stout - Oatmeal','Stout - Oatmeal','Porter - Imperial',
        'Stout - Sweet / Milk','Barleywine - American','Brown Ale - American',
        'Altbier'],
        attribute_score: [304, 265, 259, 239, 233, 233, 231, 230, 218, 218],
        brewery: ['Ballast Point Brewing Company','DuClaw Brewing Company',
        'Foolproof Brewing Company','Tyranena Brewing Company',
        'Fremont Brewing Company', "Jackie O's Pub & Brewery",
        'Tree House Brewing Company','Trillium Brewing Company',
        'Founders Brewing Company','Off Color Brewing']
    },
    {label: "rating",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Eisbock','Marshmallow Handjee','Heady Topper','King Julius',
        'Zenne Y Frontera','Very Hazy','Pliny The Younger','Drone Witch',
        'Bourbon County Brand Coffee Stout','Juice Machine'],
        beer_type: ['Bock - Eisbock','Stout - Russian Imperial','IPA - New England',
        'IPA - New England','Lambic - Traditional','IPA - New England',
        'IPA - Imperial','Bière de Champagne / Bière Brut',
        'Stout - American Imperial','IPA - New England'],
        attribute_score: [4.83, 4.81, 4.76, 4.76, 4.75, 4.75, 4.75, 4.74, 4.73, 4.71],
        brewery: ['Kulmbacher Kommunbräu','3 Floyds Brewing Co.','The Alchemist',
        'Tree House Brewing Company','Brouwerij 3 Fonteinen',
        'Tree House Brewing Company','Russian River Brewing Company',
        'Heirloom Rustic Ales','Goose Island Beer Co.',
        'Tree House Brewing Company']
    },
    {label: "saltiness",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Gozu','Hitachino Nest Anbai Ale','Old Pro',
        '26.2 BrewBoston Beer Company (Samuel Adams)','Gose','Salty Scot',
        'Suburban Beverage','Original ','Harborside','Golden Gate Gose'],
        beer_type: ['Sour - Gose','Sour - Gose','Sour - Gose','Sour - Gose','Sour - Gose',
        'Scotch Ale / Wee Heavy','Sour - Gose','Sour - Gose','Sour - Gose',
        'Sour - Gose'],
        attribute_score: [66, 64, 60, 51, 48, 47, 46, 44, 43, 41],
        brewery: ['Westbrook Brewing Co.','Kiuchi Brewery','Union Craft Brewing Company',
        'Boston Beer Company (Samuel Adams)','Upright Brewing Company',
        'Parallel 49 Brewing Company','Perennial Artisan Ales','Ritterguts Gose',
        'Night Shift Brewing','Almanac Beer Co.']
    },
    {label: "sourness",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Sour In The Rye - Kumquats','Sour Reserve','Gozu',
        'Experimental Raspberry','Incorrigible','La Roja - Grand Reserve',
        'Lambic','Persimmon Lambic','Old Growth','Oude Geuze De Cam'],
        beer_type: ['Wild Ale','Lambic - Gueuze','Sour - Gose','Lambic - Fruit',
        'Sour - Berliner Weisse','Sour - Flanders Red Ale','Lambic - Traditional',
        'Lambic - Fruit','Sour - Flanders Oud Bruin','Lambic - Gueuze'],
        attribute_score: [323, 284, 270, 241, 241, 238, 233, 233, 230, 229],
        brewery: ['Bruery Terreux','Upland Brewing Company','Westbrook Brewing Co.',
        'Hanssens Artisanaal bvba','New Holland Brewing Company',
        'Jolly Pumpkin Artisan Ales','Rivertown Brewery & Barrel House',
        'Upland Brewing Company','Trinity Brewing Company','De Cam Geuzestekerij']
    },
    {label: "spices",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:["Billy's Chilies Beer (Timberline Series)", 'Chipotle Smoked Porter',
        'Underlig Jul', "Benji's Chipotle Smoked Imperial Porter", 'Chipotle Ale',
        'Chili Pepper Ale','Indra Kunindra','Barrel-Aged Framinghammer - Mole',
        'Mexican Cake','Autumnal Molé Stout'],
        beer_type: ['Chile Beer','Chile Beer','Herb and Spice Beer','Porter - Smoked',
        'Chile Beer','Chile Beer','Stout - Foreign / Export','Porter - Baltic',
        'Stout - American Imperial','Chile Beer'],
        attribute_score: [184, 179, 178, 173, 170, 169, 169, 165, 161, 160],
        brewery: ['Twisted Pine Brewing Company','Pipeworks Brewing Company',
        'Nøgne Ø - Det Kompromissløse Bryggeri A/S','Tyranena Brewing Company',
        'Rogue Ales','Six Rivers Brewery','Ballast Point Brewing Company',
        "Jack's Abby Brewing", 'Westbrook Brewing Co.','Ska Brewing Co.']
    },
    {label: "sweetness",
        placement: [1,2,3,4,5,6,7,8,9,10],
        beer_name:['Braggot','Double Or Nothing','Box Of Chocolate','Équinoxe Du Printemps',
        'Dark Heathen Triple Bock', "Brother Adam's Bragget Ale",
        'Moment Of Clarity','Barmy','Hive 56','Serendipity'],
        beer_type: ['Braggot','Barleywine - American','Quadrupel (Quad)',
        'Scotch Ale / Wee Heavy','Bock - Doppelbock','Braggot',
        'Stout - Sweet / Milk','Strong Ale - American','Brown Ale - Belgian Dark',
        'Fruit and Field Beer'],
        attribute_score: [263, 238, 219, 217, 216, 209, 208, 206, 205, 204],
        brewery: ['Kuhnhenn Brewing Company','Otter Creek Brewing',
        'Charleville Vineyard Microbrewery','Brasserie Dieu du Ciel!',
        'Kuhnhenn Brewing Company','Atlantic Brewing Company / Mainely Meat BBQ',
        'Tree House Brewing Company','Ballast Point Brewing Company',
        'Allagash Brewing Company','New Glarus Brewing Company']
    },
    
]

var data = {
    labels: topBeersObjects[0].beer_name,
    datasets: [ {
        label: topBeersObjects[0].beer_name,
        data: topBeersObjects[0].attribute_score,
        /* global setting */
        backgroundColor:'rgb(142,124,195)',
        borderColor:'rgb(142,124,195)',
        borderWidth: 2
    }]


    // data: topBeersObjects[0].attribute_score,
    // backgroundColor:'rgb(142,124,195)',
    // borderColor:'rgb(142,124,195)',
    // borderWidth: 2
};

var options = {
    legend: {
        display: true,
        fillStyle: 'red',

        labels: {
            boxWidth: 0,
            fontSize: 2,
            fontColor: 'black',
        }
    },
    scales: {
        xAxes: [{
            stacked: false,
            scaleLabel: {
                display: true,
                labelString: 'Beer Name'
            },
        }],
        yAxes: [{
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: 'Score'
            },
            ticks: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 10
            }
        }]
    },
    plugins: {
        // datalabels plugin
        /*https://chartjs-plugin-datalabels.netlify.com*/
        datalabels: {
            display: true,
            color: 'black',
            fontSize: 10
        }
    }
};

var topChart =  new Chart('topChart-0', {
    plugins: [ChartDataLabels], /*https://chartjs-plugin-datalabels.netlify.com*/
    type: 'bar',
    indexAxis: 'y',
    data: data,
    options: options
});

function changeChart(index) {
    topChart.data.datasets.forEach(function(dataset) {
        // data.label = topBeersObjects[index].beer_name;
        dataset.label = topBeersObjects[index].beer_name;
        dataset.data = topBeersObjects[index].attribute_score;
    });
    topChart.update();
};

var header = document.getElementById('beerDiv');
var btnsH = document.getElementsByClassName('btnH');
for (var i = 0; i < btnsH.length; i++) {
    btnsH[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
        // changeChart(this.id);
    });
}