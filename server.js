const express = require('express');
const user = require('./router');
const app = express();
const PORT = 3000;

app.locals.gender = 'Male';

const mid1 = (req, res, next) => {
  console.log(app.locals.gender);
  req.lastName = 'Khera';
  next('route');
  // next('err');
};

const mid2 = (req, res, next) => {
  console.log('Hello Sahil');
  next();
}

app.use('/user', user, (req, res)=>{
  res.status(404).send('something went wrong');
});

app.get('/ab+cd', (req, res) => {
  throw new Error('wrong');
  // res.send('Hello Sourabh');
})
app.get('/msg', [mid1, mid2],(req, res) => {
  res.send('Hi');
});

app.get('/msg', (req, res) => {
  res.send(req.lastName);
});

app.use((err, req, res, next)=>{
  res.status(500).send({err: 'something failed'});
})








app.listen(PORT, () => {
 console.log(`server listening on port ${PORT}`);
})