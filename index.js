var Machine = require('./src/machine.js');
var State = require('./src/state.js');

module.exports.Machine = Machine;
module.exports.State = State;

/* istanbul ignore next */
if(typeof window !== 'undefined'){

  window.Machine = Machine;
  window.State = State;

}