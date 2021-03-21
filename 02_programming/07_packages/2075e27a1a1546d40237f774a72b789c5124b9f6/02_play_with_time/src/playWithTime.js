import moment from "moment";

function formatDate(date) {
  return moment(date).format("dddd Do MMMM YYYY");
};

function yearsSinceDate(date) {
  return parseInt(moment(date).fromNow("YY"));
};

function getDayFromDate(date) { 
  return moment(date).format("dddd");
};

function daysSinceDate(date) {
  const currentDay = moment();
  const dateGiven = moment(date);
  return Math.round(moment.duration((currentDay - dateGiven)).asDays());
};


export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
 