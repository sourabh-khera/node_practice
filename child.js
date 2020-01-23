let count = 0;
process.on('message', data => {  
  console.log(data, 'msg from parent');
  if(data.action === 'start'){
    const sum = longComputation();
    console.log(sum, "-----")
    process.send({sum});
  }
});

const longComputation = () => {
  let sum = 0;
  for(let i = 0; i<5000000000; i++){
    sum+=i;
  }
  return sum;
}