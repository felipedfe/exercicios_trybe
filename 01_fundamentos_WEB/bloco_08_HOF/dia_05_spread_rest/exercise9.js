const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

let mesesDoAno = [];

const {spring, summer, autumn, winter} = yearSeasons;
mesesDoAno = [...spring, ...summer, ...autumn, ...winter]

console.log(mesesDoAno)