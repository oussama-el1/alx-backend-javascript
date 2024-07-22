process.stdout.write('Welcome to Holberton School, what is your name?\n');

function onExit() {
  process.stdout.write('This important software is now closing\n');
}

process.stdin.on('data', (data) => {
  const name = data;
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});

process.on('exit', onExit);
process.on('SIGINT', onExit);
