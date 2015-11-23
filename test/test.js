var test = require('ava');
var Machine = require('../src/machine.js');
var State = require('../src/state.js');
var TestState1 = require('./fixture/TestStates').TestState1;
var TestState2 = require('./fixture/TestStates').TestState2;
var TestState3 = require('./fixture/TestStates').TestState3;

test.beforeEach(t => {

    t.context.machine = new Machine();
    t.context.machine.add( new TestState1() );
    t.context.machine.add( new TestState2() );
    t.context.machine.add( new TestState3() );

    t.end();

});

test('State machine should have 3 states registred', t => {

  t.is(t.context.machine.length, 3);

  t.end();

});

test('Machine#get should return a state', t => {

  t.is(t.context.machine.get('test-state-1') instanceof State, true);

  t.end();

});

test('Machine#set should set "test-state-2" as the current state', t => {

  t.context.machine.set('test-state-2');

  t.is(t.context.machine.currentState.name, 'test-state-2');

  t.end();

});

test('"test-state-2" on enter callback shound work', t => {

  t.context.machine.set('test-state-2');

  t.is(t.context.machine.currentState.status, 'on ENTER test test-state-2');

  t.end();

});

test('"test-state-2" on leave callback shound work', t => {

  t.context.machine.set('test-state-2');
  t.context.machine.set('test-state-1');

  t.is(t.context.machine.get('test-state-2').status, 'on LEAVE test test-state-2');

  t.end();

});

test('"test-state-1" should update', t => {

  t.context.machine.set('test-state-1');
  t.context.machine.update();

  t.is(t.context.machine.currentState.updated, true);

  t.end();

});

test('Machine should not call the update function when the currentState is null', t => {

  t.context.machine.update();

  t.is(t.context.machine.currentState, null);

  t.end();

});