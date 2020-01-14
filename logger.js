const EventEmitter = require('events');

// const emitter = new EventEmitter();

// let m = 0;

// emitter.on('log',() => {
//   setTimeout(() => {
//   console.log('msg logged', arg1, arg2);
//   }, 500)
//   console.log(++m);
// });

// emitter.on('abc', () => {
//   console.log('printed abc');
// });

// console.log(emitter.listenerCount('log'));
// console.log(emitter.eventNames())
// console.log(emitter.getMaxListeners())
// emitter.setMaxListeners(emitter.getMaxListeners() + 1);

// console.log(emitter.eventNames())
// emitter.emit('log');
// emitter.emit('log');
// emitter.emit('abc');

class Logger extends EventEmitter{
  log(msg){
   console.log('msg logged ', msg);
  }
}

module.exports = Logger;