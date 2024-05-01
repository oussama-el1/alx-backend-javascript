import groceriesList from './9-groceries_list';

const map = groceriesList();
console.log(map);

const newmap = new Map();

map.forEach((value, key) => {
  if (value === 1) {
    newmap.set(key, 100);
  } else {
    newmap.set(key, value);
  }
});

console.log(newmap);
