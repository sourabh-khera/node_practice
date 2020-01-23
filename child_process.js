const { exec, spawn, fork } = require('child_process');

// const server = http.createServer().listen(3000);


// exec(`cat ${__filename}`, (err, stdout, stderr) => {
//   console.log('hello-----', stdout);
// });

// const spawn_process = spawn('cat', [__filename]);

// spawn_process.stdout.on('data', (data) => {
//   console.log(data.toString(), "----");
// })

// spawn_process.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// process.stdin.on('data', (data) => {
//   process.stdout.write(`input msg ${data}`);
//   process.stdin.resume();
//   process.stdin.end()
// })
// process.stdin.pipe(process.stdout);


//Fork

const forked = fork('child.js');

// forked.send({hello: 'sourabh'});

// forked.on('message', (data) => {
//   console.log(data, "msg from child");
// });


// server.on('request', (req, res) =>{
//   if(req.url === '/compute'){
//     // const sum = longComputation();
//     forked.send({action: 'start'});
//     // res.end(`data: ${sum}`)
//     forked.on('message', data => {
//       res.end(`${data.sum}`);
//     })
//   } else if(req.url === '/alt'){
//     res.end('OK')
//   }
//   else {
//     res.status(404).send('Chilling')
//   }
// })

//spawn

const child = spawn('find . -type f', {
  cwd: './practice',
  shell: true,
  // stdio: 'inherit',
});

// process.stdin.pipe(child.stdin);

child.stdout.on('data',data => {
  console.log(data.toString(), "=====");
});

child.stderr.on('data', data => {
  console.log(data.toString(), "err=");
});

child.on('exit', (code, signal) => {
  console.log('child process exited with ' +
  `code ${code} and signal ${signal}`);
});
