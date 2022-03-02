const developer = require("./developer");

console.log("test avant", developer.isCoding);

developer.initiateProject();
console.log("test apres", developer.isCoding);

//console.log(developer.startProject(130, 100));
