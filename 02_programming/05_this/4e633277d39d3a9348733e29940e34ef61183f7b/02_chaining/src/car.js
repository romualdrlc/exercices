// Complete and add needed car properties:
const car = {
  //speed: 0,
  distanceparcouru: 0,
  minute: 0,
  vitesse: 0,
  
  start: function () {
    this.vitesse = 0;
    this.minutes = 0;
    this.distanceparcouru = 0;
    return this;
  },
  changeSpeed: function(speed) {
    this.vitesse = speed;
    return this;
  },
  drive: function(minutes) {
    this.minute = minutes;
    this.distanceparcouru += (this.vitesse * this.minute) / 60;
    return this;
  },
  showDistance: function() {
    console.log(`${this.distanceparcouru} Km`);
    return this;
  },
};

module.exports = car;
