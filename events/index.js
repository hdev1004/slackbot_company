const messageEvent = require('./message');
const commandEvent = require('./command');

module.exports = (app) => {
  messageEvent(app);
  commandEvent(app);
};
