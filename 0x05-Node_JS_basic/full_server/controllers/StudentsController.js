import readDatabase from '../utils';

const db = 'database.csv';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const report = await readDatabase(db);
      let responseText = 'This is the list of our students';
      const sortedFields = Object.keys(report).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );

      sortedFields.forEach((field) => {
        const students = report[field];
        responseText += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      });

      response.status(200).send(responseText);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const report = await readDatabase(db);
      const students = report[major];
      const responseText = `List: ${students.join(', ')}`;
      response.status(200).send(responseText);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
