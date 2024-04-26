export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('Students must be an array');
    }
    for (const student of students) {
      if (typeof student !== 'string') {
        throw new Error('Each student must be a string');
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('Students must be an array');
    }

    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw new Error('Student must be a string');
      }
    }

    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
