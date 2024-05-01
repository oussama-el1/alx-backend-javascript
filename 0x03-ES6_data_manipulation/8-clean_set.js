export default function cleanSet(set, startString) {
  let result = '';
  if (set instanceof Set && typeof startString === 'string') {
    const resultarray = [];
    if (startString === '') {
      return result;
    }
    set.forEach((element) => {
      if (element.includes(startString)) {
        resultarray.push(element.replace(startString, ''));
      }
    });
    result = resultarray.join('-');
  } else {
    throw new Error('pass to the function a Set and String');
  }
  return result;
}
