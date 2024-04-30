export default function getListStudentIds(listofstudents) {
  const ids = [];
  if (listofstudents instanceof Array) {
    listofstudents.map((element) => ids.push(element.id));
  }
  return ids;
}
