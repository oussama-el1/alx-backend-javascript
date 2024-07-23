const fs = require('fs').promises;

const readDatabase = (filePath) => fs.readFile(filePath, 'utf-8')
  .then((data) => {
    const lines = data.trim().split('\n');
    const studentGroups = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        const [firstname, , , field] = line.split(',');
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstname);
      }
    }

    return studentGroups;
  })
  .catch(() => Promise.reject(new Error('Cannot load the database')));

module.exports = readDatabase;
