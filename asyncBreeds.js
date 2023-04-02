const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    
    console.log("In readFile's Callback: it has the data.");
    //CHANGE: Pass data into callback instead of returning it directly.
    
    if (!error) cb(data); //prints out the data stored in cb.
  });
};

// CHANGE 1: Moved the console.log statement into a function.
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // => print out details correctly.
}

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function.
breedDetailsFromFile('Bombay', printOutCatBreed);
