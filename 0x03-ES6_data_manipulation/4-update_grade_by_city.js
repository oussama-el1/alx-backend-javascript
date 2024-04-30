export default function updateStudentGradeByCity(ListStudents, city, newGrades) {
  const array = [];
  if (ListStudents instanceof Array && typeof city === 'string' && newGrades instanceof Array) {
    const filtredstudents = ListStudents.filter((elt) => elt.location === city);
    // eslint-disable-next-line array-callback-return
    filtredstudents.map((student) => {
      const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchedGrade) {
        array.push({ ...student, grade: matchedGrade.grade });
      } else {
        array.push({ ...student, grade: 'N/A' });
      }
    });
  }
  return array;
}
