(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Machine = require('./src/machine.js');
var State = require('./src/state.js');

module.exports.Machine = Machine;
module.exports.State = State;

},{"./src/machine.js":2,"./src/state.js":3}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Machine = function () {
  function Machine() {
    _classCallCheck(this, Machine);

    this.currentState = null;
    this.states = new Map();
    this.length = 0;
  }

  _createClass(Machine, [{
    key: 'update',
    value: function update() {

      if (this.currentState != null) {
        this.currentState.update();
      }

      return this.currentState;
    }
  }, {
    key: 'set',
    value: function set(name) {

      if (this.currentState != null) {
        this.currentState.onLeave();
      }
      this.currentState = this.states.get(name);
      this.currentState.onEnter();
    }
  }, {
    key: 'get',
    value: function get(name) {

      return this.states.get(name);
    }
  }, {
    key: 'add',
    value: function add(state) {

      this.states.set(state.name, state);
      this.states.get(state.name).machine = this;
      this.length++;
    }
  }]);

  return Machine;
}();

module.exports = Machine;

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = function () {
  function State() {
    _classCallCheck(this, State);

    this.name = null;
    this.machine = null;
  }

  _createClass(State, [{
    key: 'update',
    value: function update() {}
  }, {
    key: 'onEnter',
    value: function onEnter() {}
  }, {
    key: 'onLeave',
    value: function onLeave() {}
  }]);

  return State;
}();

module.exports = State;

},{}]},{},[1])


//# sourceMappingURL=state-machine.js.map
