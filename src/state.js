'use strict';

class State {

  constructor(){
    this.name = null;
    this.machine = null;
  }

  update(){}
  onEnter(){}
  onLeave(){}

}

module.exports = State;