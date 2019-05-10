# Learning redux

## Why state management?

Here is the problem

```js

let x = 0;
let y = 1;
let keyPressed = false;
let name = 'Fluidly';
let score = 0;
...

function move(n) {
  x += n;
  y += n;

  if (x === 10) {
    score++
  }

  // update DOM every time something changes
  ...
}

```




## Why redux?

- predictable
- unidirectional dataflow
- debugging

Three principles of redux

1. Single source of truth
2. State is read only
3. Changes are made with pure functions
4. Lots of addons and things


## Why not redux?

- Probably overkill for most small apps



## Key concepts

Let's look at this picture:

https://blog.novoda.com/content/images/2018/03/redux-architecture-overview.png

1. Store
2. Actions
3. Reducers
4. View (UI)


## How does this work?

Redux provides you with a `createStore` function.

You are free to define your actions, reducers, and your view layer.


### Example

```js

const initialState = 0 // simplest application state is just a single integer

function reducer(state, action) {
  return state + action
}

const store = createStore(reducer, initialState) // magic!

function view(){
  // render app here
}

store.subscribe(view) // now our app is listening for state changes

store.getState() // 0
store.dispatch(1) // undefined
store.getState() // 1


```









## Your task

Write a `createStore` function that returns a store instance!

### Requirements for the store

1. `store.getState` is a function that returns the current state
2. `store.dispatch` is a function that updates the current state with a new state
3. initialState does not get mutated

### Stretch goals

1. Add a subscribe function! `store.subscribe` is a function that adds a `subscriber` to the store. The subscriber function gets called every time the state is updated.
2. Enhance your store! `createStore` takes a third argument `enhancer`, which allows you to customise your store. (middleware and the redux dev tools are examples of enhancers)
3. How can we improve the subscribe function such that the view layer doesn't need to rely on the global `store`? (hint: this is what react-redux does for us!)


























## More cool things

1. The redux dev tools
2. utilities like `combineReducers`
3. the react-redux library
