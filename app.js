const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('stream.txt.gzip');
const writeStream = fs.createWriteStream('uncompressedFile.txt');

fs.writeFile('example.txt', 'Hello Sourabh how r u ?', err => {
  if(err)
    console.log(err)
  else {
    fs.readFile('example.txt', 'UTF8',(err, data) => {
      if(err)
        console.log(err);
      else {
        console.log('file data read successfully');
        fs.writeFile('example2.txt', data, (err) => {
          if(err)
            console.log(err);
          else {
            fs.appendFile('example2.txt', '\n\nHello sahil how r u ?', err => {
              if(err)
                console.log(err);
              else{
                console.log('line appended successfully');
                fs.unlink('example.txt', err => {
                  if(err)
                    console.log(err)
                  else 
                    console.log('file deleted successfully');  
                    fs.mkdir('practice', err => {
                      if(err)
                        console.log(err);
                      else
                       fs.copyFile('example2.txt', './practice/file1.txt', err=>{
                         if(err)
                           console.log(err);
                         else 
                           console.log('file copied');
                           fs.rename('example2.txt', './practice/file2.txt', err => {
                             if(err)
                               console.log(err);
                             else 
                              console.log('file moved successfully');  
                              fs.chmod('./practice/file1.txt', 0o400,err => {
                                if(err)
                                 console.log(err)
                                else 
                                 console.log('permission changed'); 
                                 readStream.pipe(gunzip).pipe(writeStream);
                                //  readStream.on('data', chunk => {
                                //    writeStream.write(chunk);

                                //  })
                                //  fs.appendFile('./practice/file1.txt', 'All good', err => {
                                //    if(err)
                                //     console.log(err);
                                //    else 
                                //     console.log('new line added'); 
                                //  });
                              });
                           });  
                        });
                    });   
                });  
              } 
            });
          }  
        });
      }
    });
  }
});

// process.nextTick(()=>{
//   console.log('hello sourabh');
// })
// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   setTimeout(bar,0);
//   baz()
// }
// foo();