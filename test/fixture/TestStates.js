'use strict';

var State = require('../../src/state.js');

class TestState1 extends State {

  constructor(){
    super();
    this.name = 'test-state-1';
    this.status = null;
    this.updated = false;

  }

  update(){

    this.updated = true;

  }
  onEnter(){

    this.status = 'on ENTER test '+this.name;

  }

  onLeave(){

    this.status = 'on LEAVE test '+this.name;

  }

}

class TestState2 extends State {

  constructor(){
    super();
    this.name = 'test-state-2';
    this.status = null;

  }

  update(){}
  onEnter(){

    this.status = 'on ENTER test '+this.name;

  }

  onLeave(){

    this.status = 'on LEAVE test '+this.name;

  }

}

class TestState3 extends State {

  constructor(){
    super();
    this.name = 'test-state-3';
    this.status = null;

  }

  update(){}
  onEnter(){

    this.status = 'on ENTER test '+this.name;

  }

  onLeave(){

    this.status = 'on LEAVE test '+this.name;

  }

}

module.exports.TestState1 = TestState1;
module.exports.TestState2 = TestState2;
module.exports.TestState3 = TestState3;