export default function getStudentsByLocation(students, city) {
  if (typeof city !== 'string' && students instanceof Array) {
    throw new Error('parameter type is incorrect');
  }
  const array = students.filter((element) => element.location === city);
  return array;
}
