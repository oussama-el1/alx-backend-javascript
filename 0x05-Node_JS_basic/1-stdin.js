console.log('Welcome to Holberton School, what is your name?\n');

function onExit() {
  console.log('This important software is now closing\n');
  process.exit();
}

process.stdin.on('data', (data) => {
  const name = data;
  console.log(`Your name is: ${name}`);

  onExit();
});
