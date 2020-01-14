const fs = require('fs');
const buffer = require('buffer').Buffer;

const buf1 = buffer.allocUnsafe(256);

buf1.fill(0);

fs.readFile('largeFile.txt', 'UTF8', (err, data) => {
  if(err)
   console.log(err);
  else {
    const len = buf1.write(data);
    console.log(buf1.toString())
  }  
});

const data = fs.readFileSync('./practice/file1.txt', 'UTF8')
console.log(data, 'sync----')



