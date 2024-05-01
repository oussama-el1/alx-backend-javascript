const weakMap = new WeakMap();
let counter = 0;
const queryAPI = (endpoint) => {
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    counter += 1;
    weakMap.set(endpoint, counter);
  }
};

export { queryAPI, weakMap };
