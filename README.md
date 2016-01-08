# ernst-state-machine

> A State Machine

[![Build Status](https://travis-ci.org/EduardoLopes/ernst-state-machine.svg)](https://travis-ci.org/EduardoLopes/ernst-state-machine) [![Coverage Status](https://coveralls.io/repos/EduardoLopes/ernst-state-machine/badge.svg?branch=master&service=github)](https://coveralls.io/github/EduardoLopes/ernst-state-machine?branch=master)

## Install

`npm install https://github.com/EduardoLopes/ernst-state-machine.git`

(This module is not published on npm yet because it is really really early alpha) 

or check out the build files in the dist folder and use it direct on the browser.

`<script src="state-machine.min.js"></script>`

This state machine is not made to fix all the problems. It will not prevent the machine from transition from a state to another especific state.

## Usage

There's two objects: Machine and State.

### Machine

`Machine` is the machine that manage the sates. These are the methods:

* `update()` - Calls the update function of the current state if the current state is set
* `set(stateName)` - Set the current state
* `get(stateName)` - Return the state with with that name
* `add(stateInstance)` - Add a state to the machine

### State
  
`State` is the state that can be added to the ``Machine`. These are the methods:

* `update()` - Called when this is the current state
* `onEnter()` - Called when machine enters on this state
* `onLeave()` - Called when the machine leaves this state

States have two properties:
* `name` - The name of the state. It will be added to the sate machine using this name, and it will be used to set it as current state or get it.
* `machine` - Reference to the machine that the state was add to

#### Code example

```js
class WalkState extends State{
  constuctor(player){
    
    this.name = 'walk';
    this.playerReference = player;
    
  }
  
  update(){
  
    /*
      walk logic here
    */
    
    //if the jump button is pressed, set the jump state
    if( Input.justPressed('jump') ){
      this.machine.set('jump');
    }    
    
  }
  
  onEnter(){
    
    console.log('enter walk state')
    
  }
  
  onLeave(){
    
    console.log('enter walk state')
    
  }  
  
}

class JumpState extends State{
  constuctor(player){
    
    this.name = 'jump';
    this.playerReference = player;
    
    //of course you can add any other property to this state
    this.jumpForce = -150;
    
  }
  
  update(){
    
    //when the player touch the ground, go to walk state
    if(this.playerReference.onGround){
      this.machine.set('walk');
    }
    
  }
  
  onEnter(){
    
    //Make the player jump when the enter the jump state
    this.playerReference.velocity.y = this.jumpForce;
    
  }
  
}

class Player{
  constuctor(){
      
    this.brain = new Machine();
    
    this.brain.add(new WalkState( this ));
    this.brain.add(new JumpState( this ));
    
    this.brain.set('walk');
    
  }
  
  /*
    In this case, this update function should be called inside a loop
  */
  update(){
    
    this.brain.update();
    
  }
}
```