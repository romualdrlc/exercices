const developer = {
  isCoding: false,
  daysCoding: 0,
  projectStatus: "waiting for a project",
  codeLinesProduced: 0,
  linesNeeded: 0,
  maxDelay: 0,

  initiateProject() {
    this.isCoding = true;
    this.daysCoding = 0;
    this.codeLinesProduced = 0;
    this.maxDelay = 0;
    this.linesNeeded = 0;
    return this;
  },

  startProject(numberLine, delay) {
    this.linesNeeded = numberLine;
    this.maxDelay = delay;
    return this;
  },

  codeForOneDay() {
    let bug = Math.random() * 1;
    console.log("random", bug);
    if (bug === 0) {
      this.codeLinesProduced += 2;
      this.daysCoding += 1;
    } else if (bug > 0 && bug <= 0.1) {
      this.codeLinesProduced += 2;
      this.daysCoding += 3;
    } else if (bug > 0.1 && bug <= 0.2) {
      this.codeLinesProduced += 2;
      this.daysCoding += 3;
    } else if (bug > 0.2 && bug <= 0.4) {
      this.codeLinesProduced += 2;
      this.daysCoding += 3;
    } else if (bug > 0.4 || bug === 1) {
      this.codeLinesProduced += 2;
      this.daysCoding += 3;
    }
    return this;
  },

  mightStop() {
    if (this.maxDelay <= this.daysCoding) {
      this.isCoding = false;
      this.projectStatus = "project stopped";
    } else if (this.linesNeeded === this.codeLinesProduced) {
      this.isCoding = false;
      this.projectStatus = "project finished";
    }
    return this;
  },
};

module.exports = developer;
