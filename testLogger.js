const Logger = require('./logger');

const logger = new Logger();

logger.on('log', (msg) => {
  logger.log(msg);
})

logger.emit('log', 'hello sourabh');