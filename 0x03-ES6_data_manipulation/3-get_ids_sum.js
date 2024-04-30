export default function getStudentIdsSum(getListStudents) {
  const ids = [];
  for (const student of getListStudents) {
    ids.push(student.id);
  }
  const sum = ids.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
