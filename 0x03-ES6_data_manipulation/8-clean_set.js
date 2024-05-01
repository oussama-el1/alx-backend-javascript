export default function cleanSet(set, startString) {
  const resultarray = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const sub = element.substring(startString.length);
      if (sub) {
        resultarray.push(sub);
      }
    }
  });
  return resultarray.join('-');
}
