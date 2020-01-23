const router = require('express').Router();

// router.use((req,res,next) => {
//   console.log('user details---');
//   next();
// })

const mid1 = (req, res, next) => {
  console.log('In mid 1')
  next('router');
  // next('route');
};

const mid2 = (req, res, next) => {
  console.log('In mid 2');
  next();
}

router.get('/details', [mid1, mid2], (req, res) => {
  res.send('Hi');
})

router.get('/details', (req, res) => {
  res.send('Yo');
})

module.exports = router; 