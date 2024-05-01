export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && array instanceof Array) {
    for (const val of array) {
      if (!set.has(val)) {
        return false;
      }
    }
  } else {
    throw new Error('pass a Set and array');
  }
  return true;
}
