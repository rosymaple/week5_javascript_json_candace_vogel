/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

// TODO Extract the latitude value, and log it to the console.

let latitude = iss_location.iss_position.latitude   //extract data from object
console.log(latitude)

// TODO Extract the longitude value, and log it to the console.

let longitude = iss_location.iss_position.longitude   //extract data from object
console.log(longitude)


/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.

rates.CHF = 1.1787;     // add new property to rates object

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)

let euros = 100;        // add euros variable
let aud = euros * rates.AUD;        // create equation to solve the exchange rate
console.log(aud.toFixed(2))        // print exchange rate up to 2 decimal points

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.

cats_and_owners.push({name: 'Taylor Swift', cat: 'Meredith'})       // push data to cats_and_owners array

// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.

cats_and_owners.forEach(owner => {
    // using the arrow function to access each element in the array
    console.log(`${owner.name} owns a cat named ${owner.cat}`)      //print template string using console.log
})      //end of forEach method

//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation

console.log('Gary Oldman\'s cat is named', cats_and_owners[1].cat)      // read and print data...
                                                                        // accessed from array index.

// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"

for (let owner of cats_and_owners) {        // for loop over entire cats_and_owners array
    if (owner.name === 'Gary Oldman') {     // if owner name value is equal to Gary Oldman...
        console.log('Gary Oldman\'s cat is named', owner.cat)       // log console.
    }       // end of if statement inside for loop
}       // end of for loop

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}


// TODO print the full name of the Literature Nobel laureate.

let literatureCategory = nobel_prize_winners_2017.prizes        // access the prizes property
    // use .find method on prizes property to find category property "literature" using === equality check
    .find(prize => prize.category === 'literature')

if (literatureCategory && literatureCategory.laureates.length > 0) {        // if the length of laureates property...
    // is greater than 0, run this if statement:
    let literatureLaureate = literatureCategory.laureates[0]
    // access the array of elements in "laureates" using literatureCategory.laureates[0]
    console.log(`${literatureLaureate.firstname} ${literatureLaureate.surname}`)
}

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.

let physics = nobel_prize_winners_2017.prizes.find(prize => prize.category === 'physics')
// use .find method on prizes property to search for the 'category' physics

if (physics && physics.laureates.length > 0) {      // if the length of physics variable is greater than 0...
    let physicsID = physics.laureates.map(laureate => laureate.id)  // run this line of code
    console.log(physicsID.join(', '))       // join all physicsID's together using commas
}       // end of if statement

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).

let categories = nobel_prize_winners_2017.prizes.map(prize => prize.category)
// use .map method on prizes array to create new array that contains all prize categories
console.log(categories.join(', '))      //join categories elements together using comma

// TODO write code to print the total number of prize categories

let totalNumberOfCategories = new Set(categories).size
// new Set stores unique values of any data type...
// because we need to create a new variable that will hold unique categories only
// .size returns unique values from categories array as a number
console.log(totalNumberOfCategories)    // log totalNumberOfCategories to console

// TODO write code to count the total number of laureates from 2017.

let laureatesFrom2017 = nobel_prize_winners_2017.prizes     // access prizes property
    .filter(prize => prize.year === "2017")     // use filter function to create new array...
    // containing only the elements with prize year being exactly "2017"
    .flatMap(prize => prize.laureates)
    // use .flatMap method to map each element to a single array
    // every laureate from 2017 will be added to our new array laureatesFrom2017
    .length     // use .length to find number of elements inside new array

console.log(laureatesFrom2017)      // print total number of laureates from 2017 in console

