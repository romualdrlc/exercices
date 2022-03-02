const developer = {
  isCoding: true,
  daysCoding: Number,
  projectStatus: String,
  codeLinesProduced: Number,
  linesNeeded: Number,
  maxDelay: Number,

  initiateProject: function () {
    console.log("test dans la methode avant", this.isCoding);
    this.isCoding = false;
    this.daysCoding = 0;
    this.codeLinesProduced = 0;
    console.log("test dans la methode apres", this.isCoding);
  },
};

module.exports = developer;
