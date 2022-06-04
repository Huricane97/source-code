// Follow me on twitter @JamesPistell

// Access the File System via Node's fs module
const fs = require('fs');


//* ************************************************** //
//* **************** Metadata Attributes ************* //
//* ************************************************** //
// Create metadata for a person (hair, eye, height, etc)

const malename=[
"Abe",
"Abu",
"Ace",
"Action",
"Adler",
"Admiral",
"Adrian Monk",
"Aesop",
"Agent 47",
"Aiden",
"Aigis",
"Ajax",
"Al Bundy",
"Aladdin",
"Alcott",
"Aldous",
"Alexander",
"Alfonso",
"Alfred",
"Alpha",
"Alton",
"Alucard",
"Amaterasu",
"Ambassador",
"Andrew",
"Angel",
"Angus",
"Angus MacGyver",
"Anxious",
"Apache",
"Apollo",
"Apple",
"Aqua",
"Aragorn",
"Arbiter",
"Archer",
"Archibald",
"Archie Bunker",
"Arthur",
"Arturo",
"Arwen",
"Asher",
"Ashford",
"Aspen",
"Astaroth",
"Atari",
"Atlas",
"Atom",
"Atticus",
"Aubrey",
"Audrey",
"Augustus",
"Austin",
"Autumn",
"Avalanche",
"Avery",
"Bad Boy",
"Bagheera",
"Bald Bull",
"Baloo",
"Balrog",
"Balthier",
"Bambi",
"Bandit",
"Banjo",
"Banshee",
"Barney",
"Barney Fife",
"Barney Rubble",
"Barney Stinson",
"Bart Simpson",
"Bartley",
"Bashful",
"Basil Fawlty",
"Batman",
"Baxter",
"Bayleaf",
"Baylor",
"Beagle",
"Beamer",
"Bean",
"Beans",
"Bear",
"Beast",
"Beau",
"Beckham",
"Beethoven",
"Bender",
"Benjamin",
"Benji",
"Benny",
"Bentley",
"Berkeley",
"Berlin",
"Bernard",
"Bess",
"Bessie",
"Big Boss",
"Big Boy",
"Big Daddy",
"Big Foot",
"Bilbo",
"Bing",
"Binkie",
"Birdie",
"Birdo",
"Biscuit",
"Bit",
"Blackie",
"Blake",
"Blanco",
"Blaze",
"Bling",
"Blondie",
"Blue",
"Blues",
"Bo",
"Boba Fett",
"Bobo",
"Body",
"Bogey",
"Bohemian",
"Bolt",
"Bond",
"Bongo",
"Bonkers",
"Bonnie",
"Boo",
"Boomer",
"Boone",
"Boston Beans",
"Bowen",
"Bowser",
"Brayden",
"Breeze",
"Brian Griffin",
"Brie",
"Britton",
"Brock",
"Brody",
"Brooklyn",
"Brownie",
"Bruno",
"Brutus",
"Buddy",
"Bug",
"Bugs Bunny",
"Bullet",
"Bungee",
"Bunker",
"Burhbank",
"Buster",
"Buttercup",
"Butterfly",
"Buzz",
"Byron",
"Byte",
"C3PO",
"Cabernet",
"Caden",
"Cadillac",
"Cage",
"Cagney",
"Cairo",
"Caleb",
"Cali",
"Callaway",
"Callie",
"Callisto",
"Calvin",
"Cameron",
"Captain",
"Captain Falcon",
"Captain Olimar",
"Captain Qwark",
"Carlyle",
"Carter",
"Casey",
"Cash",
"Castle",
"Catcher",
"Cersei",
"Chalupa",
"Champ",
"Chance",
"Chandler",
"Chandler Bing",
"Chaos",
"Charlie",
"Chase",
"Checkers",
"Chekov",
"Cherry",
"Chester",
"Chew Chew",
"Chico",
"Chili",
"China",
"Chip",
"Chocolate",
"Christian",
"Christopher Robin",
"Chubbs",
"Chun-Li",
"Church",
"Churchill",
"Cid",
"Cinder",
"Cisco",
"Clabourne",
"Clarus",
"Cleveland",
"Clifford",
"Clipper",
"Cloud",
"Cobalt",
"Cobra Bubble",
"Coco",
"Dory",
"Dot",
"Doug",
"Dozer",
"Dr. Bosconovitch",
"Dr. Gregory House",
"Dr. John Watson",
"Dr. Wily",
"Dracula",
"Drop",
"Drunkard",
"Dudley",
"Duffy",
"Duke",
"Dumbo",
"Dwight Schrute",
"Dylan",
"E. Honda",
"Eaglehurst Gillette",
"Earthworm Jim",
"Ebony",
"Echo",
"Eddard Stark",
"Eden",
"Edith Bunker",
"Edmund",
"Edsel",
"Eeyore",
"Eldridge",
"Elf",
"Cody",
"Cogsworth",
"Cole",
"Coleman Hawkins",
"Colonel",
"Columbo",
"Comet",
"Commander Shepard",
"Connor",
"Cookie",
"Cooper",
"Copper",
"Cormac",
"Cosmo Kramer",
"Crash Bandicoot",
"Creeper",
"Cricket",
"Crissie",
"Cromwell",
"Cruise",
"Crumble",
"Crush",
"Cuddles",
"Cyber",
"Cypher",
"Cyrano",
"Dab",
"Daenerys Targaryen",
"Daffy Duck",
"Dagger",
"Dale",
"Dallas",
"Dana Scully",
"Dancer",
"Danger",
"Emu",
"Ender",
"Enid",
"Enrage",
"Epona",
"Eric Cartman",
"Ermac",
"Ethan",
"Ethel Mertz",
"Evil Knevil",
"Ewok",
"Faithful",
"Falco Lombardi",
"Faline",
"Fancy",
"Fandango",
"Fang",
"Faulkner",
"Fauna",
"Fawful",
"Fei Long",
"Feisty",
"Feller",
"Ferdie",
"Ferris",
"Fifi",
"Figaro",
"Finn",
"Fiver",
"Flash",
"Fletcher",
"Flounder",
"Fluffy",
"Flynn",
"Fonzie",
"Forester",
"Forrest",
"Fox McCloud",
"Fox Mulder",
"Frank Costanza",
"Frank West",
"Frankie",
"Frasier Crane",
"Fred Flintstone",
"Frederick",
"Frisco",
"Frisky",
"Frodo",
"Frou-Frou",
"Fry",
"Fulgore",
"Gabby",
"Gabriel",
"Gamma",
"Gandalf",
"Gandhi",
"Garbo",
"Gaston",
"Gator",
"Gatsby",
"Gen",
"George",
"George Costanza",
"George Jefferson",
"Geppetto",
"Ghenghis Khan",
"Ghost",
"Giant",
"Gibson",
"Gidget",
"Gilligan",
"Ginger",
"Giselle",
"Gizmo",
"Gladiator",
"Glass Joe",
"Glen",
"Glenn Quagmire",
"Glitter",
"Godot",
"Goldie",
"Goldwin",
"Goody",
"Goofy",
"Google",
"Goomba",
"Goro",
"Gouken",
"Grace",
"Gracie",
"Gray Fox",
"Great Tiger",
"Grits",
"Gucci",
"Guile",
"Gumball",
"Gunner",
"Gus",
"Gustavo Fring",
"Guy",
"Gwen",
"Gypsy",
"Hamilton",
"Hamm",
"Han Solo",
"Handsome Jack"
];
const female=[
  "Abby",
  "Adalyn",
  "Addie",
  "Addison",
  "Adele",
  "Adeline",
  "Adella",
  "Agatha",
  "Aimee",
  "Akuma",
  "Alaska",
  "Alice",
  "Alistair",
  "Allie",
  "Amelia",
  "Amelie",
  "Anastasia",
  "Amy Rose",
  "Angelica",
  "Anna",
  "Annie",
  "Aria",
  "Arianna",
  "Ariel",
  "Arya",
  "Arya Stark",
  "Ash",
  "Ashley",
  "Ashton",
  "Asia",
  "Athena",
  "Atta",
  "Attila",
  "Augie",
  "Aurora",
  "Ava",
  "Avril",
  "Ayane",
  "Bailey",
  "Banzai",
  "Baraka",
  "Barclay",
  "Bella",
  "Belle",
  "Berry",
  "Beta",
  "Betty Boop",
  "Beyonce",
  "Bianca",
  "Betty White",
  "Bitsy",
  "Bitty",
  "Bizzy",
  "Blanka",
  "Brady",
  "Brandy",
  "Brently",
  "Briar",
  "Bubba",
  "Buffy",
  "Buffy Summers",
  "Bullseye",
  "Calamity Jane",
  "Camilla",
  "Cammy",
  "Camry",
  "Carmen",
  "Carmen Sandiego",
  "Carol Peletier",
  "Cassie Cage",
  "Celia",
  "Chanel",
  "Channing",
  "Chantilly",
  "Charlotte",
  "Chewie",
  "Chewy",
  "Chloe",
  "Christie",
  "CiCi",
  "Clancy",
  "Clara",
  "Claude",
  "Cleo",
  "Cloe",
  "Cocoa",
  "Dora",
  "Elaine Benes",
  "Elena",
  "Eli",
  "Eliana",
  "Elijah",
  "Elizabeth",
  "Ella",
  "Ellie",
  "Elsa",
  "Emily",
  "Emma",
  "Emmy",
  "Colette",
  "Curly",
  "Cyrax",
  "Daisy",
  "Daisy Duck",
  "Dakota",
  "Ernie",
  "Esme",
  "Esmeralda",
  "Eve"
  
];

const sex = [
  ['male'],
  ['female']
];

const breeddog=[
['Beagle']
['Border Collie'],
['Dalmatian'],
['Greyhound'],
['Golden Retreiver'],
['Husky'],
['Pitbull'],
['Rottweiler'],
['Shar Pei'],
['Samoyed'],
['Shiba Inu']
];


const weightbreed=[

];
const genderdog=[
  ["male",85],
  ["female",15]
];
const tier=[
  ["tier 1",15],
  ["tier 2",85]
]

//* ************************************************** //
//* **************** Weighted Randomizer ************* //
//* ************************************************** //
// Randomize the array and chose a value based on weights
// https://blobfolio.com/2019/randomizing-weighted-choices-in-javascript/

function getRndIntegertier(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function randomWeight(arr) {
  // Pre-sum the weights
  // First, we loop the main dataset to count up the total weight.
  // We're starting the counter at one because the upper boundary
  // of Math.random() is exclusive.
  let total = 0;
  for (let index = 0; index < arr.length; ++index) {
    total += arr[index][1];
  }
  // Total in hand, we can now pick a random value akin to our
  // random index from before.
  const threshold = Math.random() * total;

  // Now we just need to loop through the main arr one more time
  // until we discover which value would live within this
  // particular threshold. We need to keep a running count of
  // weights as we go, so let's just reuse the "total" variable
  // since it was already declared.
  total = 0;
  for (let index = 0; index < arr.length; ++index) {
    // Add the weight to our running total.
    total += arr[index][1];
    // If this value falls within the threshold, we're done!
    if (total >= threshold) {
      return arr[index][0];
    }
  }
  return arr[arr.length - 1][0];
}



//* ************************************************** //
//* ********** Create the JSON metadata file ********* //
//* ************************************************** //
for (let index = 0; index < 20; index++) {
  const breeddog1 = Math.floor(Math.random() * breeddog.length);
  const genderdog1 = Math.floor(Math.random() * genderdog.length);
  const tier1 = Math.floor(Math.random() * tier.length);
  const malename1 = Math.floor(Math.random() * malename.length);
  const female1 = Math.floor(Math.random() * female.length);
  
  let personData = {
    Name:"",
    gender:genderdog[genderdog1],
    breed:breeddog[breeddog1],
    weight:0,
    tier:tier[tier1],
    Endurance:0,
    Speed:0,
    Strength:0
  };
  
  // // console.log(tier[tier1]);
  if(personData.gender[0]=="male"){
    personData.Name=malename[malename1]
  }
  else if(personData.gender[0]=="female"){
    personData.Name=female[female1]
  }

console.log("esesese");
console.log(personData.gender);

  if(personData.tier[0] == 'tier 1'){
    personData.Endurance=getRndIntegertier(75, 100),
    personData.Speed=getRndIntegertier(75, 100),
    personData.Strength=getRndIntegertier(75, 100)
  }
  else if(personData.tier[0] == "tier 2"){
    personData.Endurance=getRndIntegertier(40, 75),
    personData.Speed=getRndIntegertier(40, 75),
    personData.Strength=getRndIntegertier (40, 75)
  }

  if(personData.breed=="Beagle"){
    personData.weight=getRndIntegertier (9, 11)
  }
  else if(personData.breed=="Border Collie"){
    personData.weight=getRndIntegertier (12, 19)
  }
  else if(personData.breed=="Dalmatian"){
    personData.weight=getRndIntegertier (15, 32)
  }
  else if(personData.breed=="Greyhound"){
    personData.weight=getRndIntegertier (23, 25)
  }
  else if(personData.breed=="Golden Retreiver"){
    personData.weight=getRndIntegertier (25, 34)
  }
  else if(personData.breed=="Husky"){
    personData.weight=getRndIntegertier (16, 27)
  }
  else if(personData.breed=="Pitbull"){
    personData.weight=getRndIntegertier (14, 27)
  }
  else if(personData.breed=="Rottweiler"){
    personData.weight=getRndIntegertier (35, 50)
  }
  else if(personData.breed=="Shar Pei"){
    personData.weight=getRndIntegertier (18, 30)
  }
  else if(personData.breed=="Samoyed"){
    personData.weight=getRndIntegertier (16, 25)
  }
  else if(personData.breed=="Shiba Inu"){
    personData.weight=getRndIntegertier (8, 10)
  }

  

  // lets output this data to JSON!!!!!!!
  fs.writeFileSync(`./metadata/${index}.json`, JSON.stringify(personData, null, 2));
}



//* ************************************************** //
//* ********** Validate your rarity DATA ************* //
//* ************************************************** //
const emptyArr = [];
const counts = {};

for (let index = 1; index < 8888; index++) {
  // Pick a random attribute array to find how how many are going to be generated
  // In this example I am analyzing eyeColor
  emptyArr.push(randomWeight(genderdog));
}

// view the total number of each attribute generated
emptyArr.forEach((x) => {
  let totalNum = (counts[x] || 0) + 1;
  counts[x] = totalNum;
});

console.log('================= TOTAL COUNT =================');
console.log(counts);

// view the total percentage of each attribute generated
Object.entries(counts).forEach((e) => {
  counts[e[0]] = `${((e[1] / 8888) * 100).toFixed(2)}%`;
});

console.log('================= TOTAL PERCENTAGE =================');
console.log(counts);