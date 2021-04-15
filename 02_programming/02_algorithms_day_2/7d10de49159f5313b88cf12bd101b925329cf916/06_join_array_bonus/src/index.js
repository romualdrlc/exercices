function joinArray(tab, carac) {
  // Code your function here.
  const tabvide = [];
  tab.reduce((newtab, index) => {
    tab.forEach((element) => {
      newtab.push(tab[element] + carac);
    });
    console.log(newtab);
    return newtab;
  }, []);
}

// ⚠ Do not remove me ! It's for tests
module.exports = joinArray;
