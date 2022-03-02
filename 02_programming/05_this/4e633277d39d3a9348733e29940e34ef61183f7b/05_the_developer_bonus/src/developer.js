const developer = {
  isCoding: true,
  daysCoding: Number,
  projectStatus: String,
  codeLinesProduced: Number,
  linesNeeded: Number,
  maxDelay: Number,

  initiateProject: function () {
    this.isCoding = true;
    this.daysCoding = 0;
    this.codeLinesProduced = 0;
    this.linesNeeded = 0;
    return this;
  },
};

module.exports = developer;
