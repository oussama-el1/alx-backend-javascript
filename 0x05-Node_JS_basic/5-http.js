const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const csvPath = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await fs.readFile(csvPath, 'utf-8');
      const lines = data.trim().split('\n');
      const count = lines.length - 1;

      const response = ['This is the list of our students'];
      response.push(`Number of students: ${count}`);

      const CS = [];
      const SWE = [];
      for (let i = 1; i <= count; i += 1) {
        const line = lines[i].split(',');
        const studentName = line[0].trim();
        const studentClass = line[3].trim();
        if (studentClass === 'CS') {
          CS.push(studentName);
        } else if (studentClass === 'SWE') {
          SWE.push(studentName);
        }
      }
      response.push(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
      response.push(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}\n`);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(response.join('\n'));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
