export default function getListStudentIds(listofstudents) {
  const ids = [];
  if (typeof listofstudents !== 'object') {
    return ids;
  }

  listofstudents.map((element) => ids.push(element.id));
  return ids;
}
