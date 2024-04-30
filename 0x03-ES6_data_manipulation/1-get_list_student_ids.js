export default function getListStudentIds(listofstudents) {
  if (typeof listofstudents !== 'object') {
    return [];
  }
  const ids = [];
  listofstudents.map((element) => ids.push(element.id));
  return ids;
}
