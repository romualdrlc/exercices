const readyForm = (reader) => {
  // Code here
  reader.question("Are you ready for today ??!", (reponse) => {
    console.log(`WOW, ${reponse} READY ??!! Really Nice! Let's goo !!.`);
    reader.close();
  });  
}; 




// Leave line below for tests to work
module.exports = readyForm;
