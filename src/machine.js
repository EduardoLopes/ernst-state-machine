'use strict';

class Machine {

  constructor(){

    this.currentState = null;
    this.states = new Map();
    this.length = 0;

  }

  update(){

    if(this.currentState != null){
      this.currentState.update();
    }

  }

  set(name){

    if(this.currentState != null){
      this.currentState.onLeave();
    }

    this.currentState = this.states.get(name);

    if(this.currentState != null){
      this.currentState.onEnter();
    }

  }

  get(name){

    return this.states.get(name);

  }

  add(state){

    this.states.set(state.name, state);
    this.states.get(state.name).machine = this;
    this.length++;

  }

}

module.exports = Machine;